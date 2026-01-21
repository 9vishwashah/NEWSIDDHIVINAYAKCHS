let scannedQR = "";
let currentQR = "";
let currentFlat = "";
let authToken = null;

const API = "https://script.google.com/macros/s/AKfycbzsljUO22BMFw88gmbH7KNTdL2Dsi5WX1ZpC6OzB4HGOQ681OLS3S9SnordA9UMblZE/exec";
let html5QrCode;

/* ================= PAGE LOAD ================= */
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
  resetState();

  html5QrCode = new Html5Qrcode("reader");
  html5QrCode.start(
    { facingMode: "environment" },
    { fps: 10, qrbox: 250 },
    onScanSuccess
  );
}

function resetState() {
  scannedQR = "";
  currentQR = "";
  currentFlat = "";
  authToken = null;

  document.getElementById("result").innerHTML = "";
  document.getElementById("reportForm").style.display = "none";
  document.getElementById("scanAgain").style.display = "none";
  document.getElementById("reader").style.display = "block";
}

/* ================= ON SCAN ================= */
function onScanSuccess(decodedText) {
  html5QrCode.stop().then(() => {
    document.getElementById("reader").style.display = "none";
  });

  // Legacy QR (ID only)
  if (!decodedText.startsWith("http")) {
    window.location.href =
      `https://newsiddhivinayakchs.co.in/vehicle/?qr=${encodeURIComponent(decodedText)}`;
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

    if (!resp.success || !resp.token) {
      errorBox.innerText =
        "Verification failed. Please contact society office.";
      btn.disabled = false;
      btn.innerHTML = "Verify & View";
      return;
    }

    // ✅ AUTH SUCCESS
    authToken = resp.token;

    document.getElementById("verifyModal").style.display = "none";
    btn.disabled = false;
    btn.innerHTML = "Verify & View";

    fetchVehicleDetails(scannedQR, authToken);
  })
  .catch(() => {
    errorBox.innerText = "Network error. Try again.";
    btn.disabled = false;
    btn.innerHTML = "Verify & View";
  });
}

/* ================= FETCH VEHICLE DETAILS ================= */
function fetchVehicleDetails(qr, token) {

  if (!token) {
    document.getElementById("result").innerHTML =
      `<div class="error-message">Unauthorized access</div>`;
    return;
  }

  const result = document.getElementById("result");

  result.innerHTML =
    '<div class="checking-message"><i class="fa fa-spinner fa-spin"></i> Loading vehicle details...</div>';

  fetch(`${API}?qr=${encodeURIComponent(qr)}&token=${encodeURIComponent(token)}`)
    .then(res => res.json())
    .then(data => {

      if (data.error) {
        result.innerHTML =
          `<div class="error-message">${data.error}</div>`;
        return;
      }

      if (data.Status !== "Active") {
        result.innerHTML = `
          <div class="status-card access-denied">
            <div class="status-title">ACCESS DENIED</div>
            <div class="info-row">Inactive QR Code</div>
          </div>`;
        document.getElementById("scanAgain").style.display = "block";
        return;
      }

      // ✅ FINAL ACCESS
      currentQR = data["QR_ID"];
      currentFlat = data["Flat No"];
      const mobile = data["Mobile No"];

      result.innerHTML = `
        <div class="status-card access-granted">
          <div class="status-title">ACCESS GRANTED</div>

          <div class="vehicle-info">
            <div><b>Flat:</b> ${data["Flat No"]}</div>
            <div><b>Owner:</b> ${data["Owner Name"]}</div>
          </div>

          <div class="vehicle-section">
            <b>Two Wheelers:</b> ${data["2W Numbers"] || "None"}
          </div>

          <div class="vehicle-section">
            <b>Four Wheelers:</b> ${data["4W Numbers"] || "None"}
          </div>

          <div class="action-buttons">
            ${mobile ? `<a href="tel:${mobile}" class="btn btn-call">Call Owner</a>` : ""}
            <button id="reportBtn" class="btn btn-danger">Report Issue</button>
          </div>
        </div>`;

      document.getElementById("reportBtn").onclick = () => {
        document.getElementById("reportForm").style.display = "block";
        document.getElementById("reportForm").scrollIntoView({ behavior: "smooth" });
      };

      document.getElementById("scanAgain").style.display = "block";
    })
    .catch(() => {
      result.innerHTML =
        '<div class="error-message">Error fetching data</div>';
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
  btn.innerHTML = "Reporting...";

  const send = (photo) => {
    fetch(API, {
      method: "POST",
      body: JSON.stringify({
        action: "submitReport",
        qrId: currentQR,
        flatNo: currentFlat,
        issue,
        remarks,
        photo
      })
    }).then(() => {
      alert("Report submitted");
      btn.disabled = false;
      btn.innerHTML = "Submit Report";
    });
  };

  if (photoInput.files.length) {
    const reader = new FileReader();
    reader.onload = () => send(reader.result);
    reader.readAsDataURL(photoInput.files[0]);
  } else {
    send(null);
  }
}
