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
function verifyResident_(ss, body) {
  const flatNo   = String(body.flatNo || "").trim();
  const mobileNo = String(body.mobileNo || "").trim();
  const qrId     = String(body.qrId || "").trim();

  if (!flatNo || !mobileNo || !qrId) {
    return json({ success: false, reason: "Missing input" });
  }

  const sheet = ss.getSheetByName(DATA_SHEET);
  const rows = sheet.getDataRange().getValues();
  const headers = rows[0];

  const flatIdx   = headers.indexOf("Flat No");
  const mobileIdx = headers.indexOf("Mobile No");
  const qrIdx     = headers.indexOf("QR_ID");

  let scannerFlatMatched = false;
  let targetFlat = null;

  for (let i = 1; i < rows.length; i++) {

    const rowFlat   = String(rows[i][flatIdx]).trim();
    const rowMobile = String(rows[i][mobileIdx]).trim();
    const rowQr     = String(rows[i][qrIdx]).trim();

    // ✅ STRICT flat + mobile match
    if (rowFlat === flatNo && rowMobile === mobileNo) {
      scannerFlatMatched = true;
    }

    // 🎯 Identify QR owner
    if (rowQr === qrId) {
      targetFlat = rowFlat;
    }
  }

  // ❌ If flat+mobile do not match EXACTLY → deny
  if (!scannerFlatMatched || !targetFlat) {
    logScan_(ss, flatNo, mobileNo, qrId, targetFlat, "DENIED");
    return json({ success: false });
  }

  // ✅ Log successful scan
  logScan_(ss, flatNo, mobileNo, qrId, targetFlat, "ALLOWED");

  return json({ success: true });
}


function logScan_(ss, scannedByFlat, scannerMobile, qrId, scannedForFlat, result) {
  let logSheet = ss.getSheetByName("ScanLogs");

  if (!logSheet) {
    logSheet = ss.insertSheet("ScanLogs");
    logSheet.appendRow([
      "SR NO",
      "Timestamp",
      "QR_ID",
      "Scanned By",
      "Scanner Mobile",
      "Scanned For",
      "Result"
    ]);
  }

  const nextRow = logSheet.getLastRow() + 1;
  const srNo = nextRow - 1;

  logSheet.getRange(nextRow, 1, 1, 7).setValues([[
    srNo,
    Utilities.formatDate(new Date(), "Asia/Kolkata", "yyyy-MM-dd HH:mm:ss"),
    qrId,
    scannedByFlat,
    scannerMobile,
    scannedForFlat || "UNKNOWN",
    result
  ]]);
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
