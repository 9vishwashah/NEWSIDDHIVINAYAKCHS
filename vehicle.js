let scannedQR = "";
let currentQR = "";
let currentFlat = "";

const API = "https://script.google.com/macros/s/AKfycbzsljUO22BMFw88gmbH7KNTdL2Dsi5WX1ZpC6OzB4HGOQ681OLS3S9SnordA9UMblZE/exec";
let html5QrCode;

// document.addEventListener("DOMContentLoaded", () => {
//   startScan();
// });

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const qrFromUrl = params.get("qr");

  if (qrFromUrl) {
    scannedQR = qrFromUrl;
    document.getElementById("verifyModal").style.display = "flex";
  } else {
    startScan();
  }
});

/* ================= START SCAN ================= */
function startScan() {
  document.getElementById("result").innerHTML = "";
  document.getElementById("reportForm").style.display = "none";
  document.getElementById("scanAgain").style.display = "none";
  document.getElementById("reader").style.display = "block";

  html5QrCode = new Html5Qrcode("reader");
  html5QrCode.start(
    { facingMode: "environment" },
    { fps: 10, qrbox: 250 },
    onScanSuccess
  );
}


function onScanSuccess(decodedText) {
  html5QrCode.stop().then(() => {
    document.getElementById("reader").style.display = "none";
  });

  // Legacy QR (ID only)
  if (!decodedText.startsWith("http")) {
    window.location.href =
      `https://newsvvehicle.netlify.app/?qr=${encodeURIComponent(decodedText)}`;
    return;
  }

  try {
    const url = new URL(decodedText);
    scannedQR = url.searchParams.get("qr");
  } catch {
    alert("Invalid QR code");
    return;
  }

  if (!scannedQR) {
    alert("QR ID missing");
    return;
  }

  document.getElementById("verifyModal").style.display = "flex";
  document.getElementById("verifyError").innerText = "";
}


/* ================= RESIDENT VERIFICATION ================= */
function verifyResident() {
  const flat = document.getElementById("verifyFlat").value.trim();
  const mobile = document.getElementById("verifyMobile").value.trim();
  const errorBox = document.getElementById("verifyError");
  const btn = document.querySelector("#verifyModal button");

  if (!flat || !mobile) {
    errorBox.innerText = "Flat No and Mobile No are required";
    return;
  }

  // UI state
  btn.disabled = true;
  btn.innerHTML = '<i class="fa fa-spinner fa-spin"></i> Verifying...';
  errorBox.innerText = "";

  fetch(API, {
    method: "POST",
    body: JSON.stringify({
      action: "verifyResident",
      flatNo: flat,
      mobileNo: mobile,
      qrId: scannedQR
    })
  })
  .then(res => res.json())
  .then(resp => {
    if (!resp.success) {
      errorBox.innerText = "Verification failed. Details not matched.";
      btn.disabled = false;
      btn.innerHTML = "Verify & View";
      return;
    }

    // Success
    document.getElementById("verifyModal").style.display = "none";
    btn.disabled = false;
    btn.innerHTML = "Verify & View";
    fetchVehicleDetails(scannedQR);
  })
  .catch(() => {
    errorBox.innerText = "Network error. Try again.";
    btn.disabled = false;
    btn.innerHTML = "Verify & View";
  });
}



/* ================= FETCH VEHICLE DETAILS ================= */
function fetchVehicleDetails(qr) {
  const result = document.getElementById("result");

  result.innerHTML =
    '<div class="checking-message"><i class="fa fa-spinner fa-spin"></i> Loading vehicle details...</div>';

  fetch(`${API}?qr=${encodeURIComponent(qr)}`)
    .then(res => res.json())
    .then(data => {
      if (data.error) {
        result.innerHTML =
          `<div class="error-message"><i class="fa fa-times-circle"></i> ${data.error}</div>`;
        document.getElementById("scanAgain").style.display = "block";
        return;
      }

      if (data.Status !== "Active") {
        result.innerHTML = `
          <div class="status-card access-denied">
            <div class="status-header">
              <div class="status-icon"><i class="fa fa-times"></i></div>
              <div class="status-title">ACCESS DENIED</div>
            </div>
            <div class="info-row">
              <span class="info-label">Reason:</span>
              <span class="info-value">Inactive QR Code</span>
            </div>
          </div>
        `;
        document.getElementById("scanAgain").style.display = "block";
        return;
      }

      currentQR = data["QR_ID"];
      currentFlat = data["Flat No"];
      const mobile = data["Mobile No"];

      result.innerHTML = `
        <div class="status-card access-granted">
          <div class="status-header">
            <div class="status-icon"><i class="fa fa-check"></i></div>
            <div class="status-title">ACCESS GRANTED</div>
          </div>

          <div class="vehicle-info">
            <div class="info-row">
              <span class="info-label">Flat No</span>
              <span class="info-value">${data["Flat No"]}</span>
            </div>
            <div class="info-row">
              <span class="info-label">Owner</span>
              <span class="info-value">${data["Owner Name"]}</span>
            </div>
          </div>

          <div class="vehicle-section">
            <div class="vehicle-section-header">
              <i class="fa fa-motorcycle"></i>
              <span>Two Wheelers</span>
              <span class="vehicle-count">${data["2W Count"]}</span>
            </div>
            <div class="vehicle-numbers">${data["2W Numbers"] || "None registered"}</div>
          </div>

          <div class="vehicle-section">
            <div class="vehicle-section-header">
              <i class="fa fa-car"></i>
              <span>Four Wheelers</span>
              <span class="vehicle-count">${data["4W Count"]}</span>
            </div>
            <div class="vehicle-numbers">${data["4W Numbers"] || "None registered"}</div>
          </div>

          <div class="action-buttons">
            ${mobile ? `
              <a href="tel:${mobile}" class="btn btn-call">
                <i class="fa fa-phone"></i> Call Owner
              </a>` : ""}
            <button id="reportBtn" class="btn btn-danger">
              <i class="fa fa-flag"></i> Report Issue
            </button>
          </div>
        </div>
      `;

      document.getElementById("reportBtn").onclick = () => {
        document.getElementById("reportForm").style.display = "block";
        document.getElementById("reportForm").scrollIntoView({ behavior: "smooth" });
      };

      document.getElementById("scanAgain").style.display = "block";
    })
    .catch(() => {
      result.innerHTML =
        '<div class="error-message"><i class="fa fa-exclamation-triangle"></i> Error fetching data</div>';
      document.getElementById("scanAgain").style.display = "block";
    });
}

/* ================= REPORT FLOW (UNCHANGED) ================= */
function submitReport() {
  if (!currentQR || !currentFlat) {
    alert("Please scan a vehicle first");
    return;
  }

  const issue = document.getElementById("issueType").value;
  const remarks = document.getElementById("remarks").value;
  const photoInput = document.getElementById("photoInput");
  const btn = document.getElementById("submitReportBtn");

  if (!issue) {
    alert("Please select an issue");
    return;
  }

  btn.disabled = true;
  btn.innerHTML = '<i class="fa fa-spinner fa-spin"></i> Reporting...';

  if (photoInput.files.length > 0) {
    const reader = new FileReader();
    reader.onload = () => sendReport(issue, remarks, reader.result, btn);
    reader.readAsDataURL(photoInput.files[0]);
  } else {
    sendReport(issue, remarks, null, btn);
  }
}

function sendReport(issue, remarks, photoBase64, btn) {
  fetch(API, {
    method: "POST",
    body: JSON.stringify({
      action: "submitReport",   // ✅ REQUIRED
      qrId: currentQR,
      flatNo: currentFlat,
      issue: issue,
      remarks: remarks,
      photo: photoBase64
    })
  })
  .then(res => res.json())
  .then(data => {
    if (data.success) {
      btn.innerHTML = '<i class="fa fa-check"></i> Reported Successfully';
      setTimeout(() => {
        alert("Report submitted successfully");
        document.getElementById("reportForm").style.display = "none";
        document.getElementById("photoInput").value = "";
        document.getElementById("issueType").value = "";
        document.getElementById("remarks").value = "";
        btn.innerHTML = '<i class="fa fa-paper-plane"></i> Submit Report';
        btn.disabled = false;
      }, 800);
    } else {
      throw new Error();
    }
  })
  .catch(() => {
    alert("Error submitting report");
    btn.innerHTML = '<i class="fa fa-paper-plane"></i> Submit Report';
    btn.disabled = false;
  });
}


/* ================= INIT ================= */
// startScan();
