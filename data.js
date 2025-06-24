const penaltyData = [
    {
        date: "24 June",
        flat: "1515",
        vehicleNo: "MH12XE7492",
        reason: "Overnight Parking of Outside 4W",
        amount: "₹ 500",
        photo: "https://drive.google.com/file/d/1LjGAdXsc4EiSdj8KfPZohBReDJj24kGq/view",
        bill: "https://drive.google.com/file/d/1bvUyOVDCj0cL5DhAKtq0-BUpfmyWIs92/view"
    },
    {
        date: "24 June",
        flat: "1507",
        vehicleNo: "MH14FZ3552",
        reason: "Wrong Parking of 2W",
        amount: "₹ 200",
        photo: "https://drive.google.com/file/d/1AFvC3FsyFD8CCusXJHrB6Nd1z7-yHc7u/view",
        bill: "https://drive.google.com/file/d/1IVjISSkICaM-HnXkWC13NG0bCl_MnZBU/view"
    },
    {
        date: "24 June",
        flat: "1108",
        vehicleNo: "MH43CM7413",
        reason: "Overnight Parking of Outside 4W",
        amount: "₹ 500",
        photo: "https://drive.google.com/file/d/16updcy99alkwcwAg0qskQ3Hm2JItIfSH/view",
        bill: "https://drive.google.com/file/d/10hy79IQoKM9e6nA4KLMi_SmoXQLDoJQs/view"
    },
    {
        date: "24 June",
        flat: "1111",
        vehicleNo: "MH43AQ6513",
        reason: "Wrong Parking of 2W",
        amount: "₹ 200",
        photo: "https://drive.google.com/file/d/1XcOVGh4YMnHTSKbEIAyXe8f-FnAWqqW6/view",
        bill: "https://drive.google.com/file/d/1l_CU4TvnW2NbZ_asTtRsmnTFTkPCT-Ca/view"
    },
    {
        date: "24 June",
        flat: "1107",
        vehicleNo: "MH14HH9235",
        reason: "Wrong Parking of 2W",
        amount: "₹ 200",
        photo: "https://drive.google.com/file/d/1y5iS7pIBuVHIejC65SpWQVFhrw8WKAUz/view",
        bill: "https://drive.google.com/file/d/1km1anpDkcLP5afv6z9xw1SmWAuO1eYpJ/view"
    },
    {
        date: "21 June",
        flat: "1208",
        vehicleNo: "MH04FF7914",
        reason: "Wrong Parking of 4W",
        amount: "₹ 500",
        photo: "https://drive.google.com/file/d/1z4GN-wo1Wc5D2DbTOM3xKLVqj2gsr7bX/view",
        bill: "https://drive.google.com/file/d/1u4y8p_icrF-MApFoeucHa5Azwzj4eONZ/view"
    },
    {
        date: "21 June",
        flat: "1202",
        vehicleNo: "MH04DX1523",
        reason: "Wrong Parking of 2W",
        amount: "₹ 200",
        photo: "https://drive.google.com/file/d/1aBTi6w5iRFM3NNp6sdBVqWqaJBUHl5HI/view",
        bill: "https://drive.google.com/file/d/1oxt3_aSGOU9mTGaplTGs6OSwBXYusk4H/view"
    },
    {
        date: "1 June",
        flat: "2209",
        vehicleNo: "MH26AD2424",
        reason: "Overnight Parking of Outside 4W",
        amount: "₹ 500",
        photo: "https://newsv.netlify.app/",
        bill: "https://drive.google.com/file/d/1Q4LPbN0vLMgF5RUodsTc6IJFLkdFV2xf/view"
    },
    {
        date: "1 June",
        flat: "2311",
        vehicleNo: "MH43BY2971",
        reason: "Overnight Parking of Outside 4W",
        amount: "₹ 500",
        photo: "https://newsv.netlify.app/",
        bill: "https://drive.google.com/file/d/1r32gccGUat__gSeIrfm1piqSuqywXBGU/view"
    }
];
const batchSize = 5;
let currentPage = 0;

document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("penalty-rows");
    const showLatestBtn = document.getElementById("show-latest");
    const showPreviousBtn = document.getElementById("show-previous");

    // Render Entries (batch)
    function renderPenalties(batch) {
        container.innerHTML = ""; // Clear previous
        batch.forEach(entry => {
            const row = document.createElement("div");
            row.className = "penalty-row";
            row.innerHTML = `
                <span>${entry.date}</span>
                <span>${entry.flat}</span>
                <span>${entry.vehicleNo}</span>
                <span>${entry.reason}</span>
                <span>${entry.amount}</span>
                <span>${entry.photo ? `<a href="${entry.photo}" target="_blank" class="penalty-receipt">Image</a>` : "-"}</span>
                <span>${entry.bill ? `<a href="${entry.bill}" target="_blank" class="penalty-bill">View Bill</a>` : "-"}</span>
            `;
            container.appendChild(row);
        });
    }

    // Show latest 5 (last entries)
    showLatestBtn.addEventListener("click", () => {
        const latestBatch = penaltyData.slice(-batchSize);
        currentPage = Math.floor(penaltyData.length / batchSize);
        renderPenalties(latestBatch);
    });

    // Show previous 5 (first entries)
    showPreviousBtn.addEventListener("click", () => {
        const firstBatch = penaltyData.slice(0, batchSize);
        currentPage = 0;
        renderPenalties(firstBatch);
    });

    // Load default (latest)
    const defaultBatch = penaltyData.slice(-batchSize);
    renderPenalties(defaultBatch);
});


document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("requestForm");

    form.addEventListener("submit", function () {
        if (submitted) {
            setTimeout(() => {
                form.reset();
            }, 2000);
        }
    });
});


function showWelcomeToast(duration = 3000) {
    const toast = document.getElementById("welcome-toast");
    const progress = document.getElementById("welcome-toast-progress");
    progress.style.backgroundColor = "crimson";

    progress.style.animation = "none";
    void progress.offsetWidth;
    progress.style.animation = `slideLeft ${duration}ms linear forwards`;

    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, duration);
}


window.onload = function () {
    showWelcomeToast();
    countPayments();
    countVehicles();
};

// window.addEventListener("DOMContentLoaded", function () {
//     const target = document.getElementById("payment-section");
//     if (target) observer.observe(target);
// });


let flatData = [];

fetch('asset/member_details.csv')
    .then(response => {
        if (!response.ok) {
            throw new Error('CSV file could not be loaded');
        }
        return response.text();
    })
    .then(csvData => {
        const lines = csvData.trim().split('\n');

        flatData = lines.slice(1).map(line => {
            const [
                ownerName, flatNo, phno, email, fourwheel, twowheel, balance, occupancy,
                TwoWNo, SecondTwNo, FourWNo, decBill, decRec,
                patraBill, patraRec, MarchReceipt, MarchBill, JuneRec, JuneBill,
                vehicleImage1, vehicleImage2
            ] = line.split(',').map(item => item.trim());

            return {
                ownerName, flatNo, phno, email, fourwheel, twowheel, balance, occupancy,
                TwoWNo, SecondTwNo, FourWNo, decBill, decRec,
                patraBill, patraRec, MarchReceipt, MarchBill, JuneRec, JuneBill,
                vehicleImage1, vehicleImage2
            };
        });

        console.log('CSV Data Loaded:', flatData);
        const target = document.getElementById("payment-section");
        if (target) observer.observe(target);
        countPayments();
        countVehicles();
    })
    .catch(error => {
        console.error('Error loading CSV:', error);
        console.log('Error loading member data. Please check the console for details.');
    });



function triggerSearch(event) {
    if (event.key === "Enter") {
        searchFlat();
    }
}


function showPopup(message) {
    document.getElementById("popupMessage").innerText = message;
    document.getElementById("customPopup").style.display = "flex";
}


function closePopup() {
    document.getElementById("alertPopup").style.display = "none";
    document.getElementById("customPopup").style.display = "none";
}


function normalizeMobileNumber(input) {
    // Remove all non-digit characters
    let digitsOnly = input.replace(/\D/g, '');

    // If the number is longer than 10 digits and starts with 91, take last 10
    if (digitsOnly.length > 10 && digitsOnly.startsWith('91')) {
        digitsOnly = digitsOnly.slice(-10);
    }

    return digitsOnly;
}



// function countPayments() {
//     let totalPayments = 0;
//     const TOTAL_FLATS = 224;

//     flatData.forEach(flat => {
//         const value = flat["JuneRec"]?.trim();
//         if (value && value !== "") {
//             totalPayments++;
//         }
//     });

//     animateCounter("animatedCount", totalPayments);
//     animateProgressCircle(totalPayments, TOTAL_FLATS);
// }

function countPayments() {
    let totalPayments = 0;
    const TOTAL_FLATS = 224;

    flatData.forEach(flat => {
        const receiptLink = flat["JuneRec"]?.trim();
        const balanceValue = flat["balance"]?.trim();

        const isReceiptPresent = receiptLink && receiptLink !== "";

        let isAdvancePaid = false;
        if (balanceValue) {
            const numericBalance = parseFloat(balanceValue.replace(/[^0-9.-]+/g, ""));
            isAdvancePaid = !isNaN(numericBalance) && numericBalance < 0;
        }

        if (isReceiptPresent || isAdvancePaid) {
            totalPayments++;
        }
    });

    animateCounter("animatedCount", totalPayments);
    animateProgressCircle(totalPayments, TOTAL_FLATS);
}



function animateCounter(id, target) {
    const el = document.getElementById(id);
    let count = 0;
    const duration = 1000;
    const step = Math.ceil(target / (duration / 16));

    const interval = setInterval(() => {
        count += step;
        if (count >= target) {
            count = target;
            clearInterval(interval);
        }
        el.textContent = count;
    }, 80);
}

function animateProgressCircle(current, total) {
    const circle = document.querySelector('.progress-ring__circle');
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;

    const percent = current / total;
    const offset = circumference * (1 - percent);

    circle.style.strokeDasharray = `${circumference}`;
    circle.style.strokeDashoffset = offset;
}

let hasAnimated = false;

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimated) {
            hasAnimated = true;
            countPayments()
            countVehicles()
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.8, // At least 80% of the section must be visible
    root: null,
    rootMargin: "0px" // no early triggering
});


const target = document.getElementById("payment-section");
if (target) observer.observe(target);

function countVehicles() {
    let twoW = 0;
    let fourW = 0;

    flatData.forEach(flat => {
        const two = parseInt(flat.twowheel);
        const four = parseInt(flat.fourwheel);

        if (!isNaN(two)) twoW += two;
        if (!isNaN(four)) fourW += four;
    });

    animateCounter("twoWheelerCount", twoW);
    animateCounter("fourWheelerCount", fourW);
}


const vehicleTarget = document.getElementById("payment-section");
if (vehicleTarget) observer.observe(vehicleTarget);

function searchFlat() {
    let searchInput = document.getElementById('searchInput').value.trim().toUpperCase();
    let searchPhoneInput = document.getElementById('searchMobileNo').value.trim();
    document.getElementById('searchInput').value = "";
    document.getElementById('searchMobileNo').value = "";

    if (!searchInput && !searchPhoneInput) {
        showToast("Please enter both Flat No and Mobile No!", "info");
        return;
    } else if (!searchInput) {
        showToast("Please enter Flat No!", "info");
        return;
    } else if (!searchPhoneInput) {
        showToast("Please enter Mobile No!", "info");
        return;
    }

    document.getElementById('searchInput').value = "";
    document.getElementById('searchMobileNo').value = "";

    const normalizeNo = normalizeMobileNumber(searchPhoneInput);
    const normalizedFlatNo = normalizeFlatNo(searchInput);
    const isAdminKey = normalizeNo === "2424";

    // (isAdminKey && normalizeFlatNo) ||

    const result = flatData.find(flat =>
        (normalizedFlatNo && flat.flatNo === normalizedFlatNo) ||
        (flat.TwoWNo && flat.TwoWNo.toUpperCase() === searchInput) ||
        (flat.FourWNo && flat.FourWNo.toUpperCase() === searchInput) ||
        nameMatches(flat.ownerName, searchInput)
    );


    const resultCard = document.getElementById('resultCard');
    resetField();

    if (result) {

        if (!isAdminKey && normalizeNo !== result.phno.trim()) {
            showToast("Kindly Enter Registered PhNo! Contact Office", "error");
            resultCard.style.display = 'none';
            return;
        }

        showToast("Login successful!", "success");

        document.getElementById('ownerName').innerText = result.ownerName;
        document.getElementById('flatNo').innerText = result.flatNo;
        document.getElementById('phno').innerText = result.phno;
        document.getElementById('email').innerText = result.email;
        document.getElementById('twowheel').innerText = result.twowheel;
        document.getElementById('fourwheel').innerText = result.fourwheel;
        document.getElementById('balance').classList.remove('red-text', 'green-text');
        document.getElementById('occupancy').innerText = result.occupancy;

        updatePhoneNumber(result);
        checkTwoWheeler(result);
        checkFourWheeler(result);
        checkBalance(result);
        vehicleImages(result);
        bills(result);
        checkEmail(result);

        resultCard.style.display = 'block';

        resultCard.scrollIntoView({ behavior: 'smooth', block: 'start' });


    } else {
        resultCard.style.display = 'none';
        showToast("Flat not found!");
    }
}

function searchByPhoneNumber() {
    let searchPhoneInput = document.getElementById('searchMobileNo').value.trim();

    if (!searchPhoneInput) {
        alert("Please enter a phone number!");
        return;
    }

    const result = flatData.find(flat => flat.phno && flat.phno.trim() === searchPhoneInput);

    if (result) {
        document.getElementById('searchInput').value = result.flatNo;
        searchFlat();
    } else {
        alert("No matching flat found for this phone number!");
    }
}




let submitted = false;

function checkApplication(event) {
    event.preventDefault();

    const form = document.getElementById("requestForm");

    const flatNo = form.querySelector('input[name="FlatNo"]').value.trim();
    const ownerName = form.querySelector('input[name="OwnerName"]').value.trim();
    const mobile = form.querySelector('input[name="Mobile No"]').value.trim();
    const message = form.querySelector('textarea[name="Message"]').value.trim();

    if (!flatNo || !ownerName || !mobile || !message) {
        showToast("Please fill in all required fields.", "info");
        return false;
    }

    showToast("Form details filled! Submitting...", "success");

    submitted = true;

    setTimeout(() => {
        form.submit();
    }, 1200);
}

function resetField() {

    document.getElementById('ownerName').innerText = "";
    document.getElementById('flatNo').innerText = "";
    document.getElementById('phno').innerText = "";
    document.getElementById('email').innerText = "";
    document.getElementById('fourwheel').innerText = "";
    document.getElementById('twowheel').innerText = "";
    document.getElementById('balance').innerText = "";
    document.getElementById('occupancy').innerText = "";
    document.getElementById('TwoWNo').innerText = "";
    document.getElementById('SecondTwNo').innerText = "";
    document.getElementById('FourWNo').innerText = "";
    document.getElementById('SecondTwNopara').style.display = "none";
}



function checkTwoWheeler(result) {
    const twowheellabel = document.getElementById('twoWLabel');
    const twowheelno = document.getElementById("TwoWNo");

    twowheellabel.style.display = "block";
    twowheelno.innerText = ""

    if (result.twowheel == "N/A") {
        twowheellabel.style.display = 'none';
    } else {
        twowheelno.innerText = result.TwoWNo || "No Record";
    }
}

function checkEmail(result) {
    const emailField = document.getElementById("email");

    if (!result.email || result.email.trim() === "") {
        emailField.innerText = "No Record";
    } else {
        emailField.innerText = result.email;
    }
}



function checkFourWheeler(flat) {

    const fourWheelLabel = document.getElementById("flabel")
    const fourWheelNo = document.getElementById("FourWNo")

    fourWheelLabel.style.display = "block"
    fourWheelNo.innerText = ""

    if (flat.fourwheel === "N/A") {
        fourWheelLabel.style.display = 'none';
    } else {
        fourWheelNo.innerText = flat.FourWNo || "No Record";
    }
}


function checkBalance(result) {
    if (result.balance > 0) {

        document.getElementById('balance').classList.add('red-text');
    } else {
        document.getElementById('balance').classList.add('green-text');
    }
    document.getElementById('balance').innerText = "₹" + Math.abs(result.balance);
}

function vehicleImages(result) {
    if (result.vehicleImage1) {
        document.getElementById('vehicleImage1').src = result.vehicleImage1;
        document.getElementById('vehicleImage1').style.display = 'block';
    } else {
        document.getElementById('vehicleImage1').style.display = 'none';
    }

    if (result.vehicleImage2) {
        document.getElementById('vehicleImage2').src = result.vehicleImage2;
        document.getElementById('vehicleImage2').style.display = 'block';
    } else {
        document.getElementById('vehicleImage2').style.display = 'none';
    }
}

function bills(result) {

    if (result.JuneRec) {
        const juneReceiptBtn = document.getElementById('juneReceiptBtn');
        juneReceiptBtn.style.display = "inline-block";
        juneReceiptBtn.onclick = () => {
            console.log("Opening URL:", result.JuneRec);
            window.open(result.JuneRec, '_blank');
        };
    } else {
        document.getElementById('juneReceiptBtn').style.display = "none";
    }

    if (result.JuneBill) {
        const juneBillbtn = document.getElementById('juneBillbtn');
        juneBillbtn.style.display = "inline-block";
        juneBillbtn.onclick = () => {
            console.log("Opening URL:", result.JuneBill);
            window.open(result.JuneBill, '_blank');
        };
    } else {
        document.getElementById('juneBillbtn').style.display = "none";
    }

    if (result.MarchReceipt) {
        const marchReceiptBtn = document.getElementById('marchReceiptBtn');
        marchReceiptBtn.style.display = "inline-block";
        marchReceiptBtn.onclick = () => {
            console.log("Opening URL:", result.MarchReceipt);
            window.open(result.MarchReceipt, '_blank');
        };
    } else {
        document.getElementById('marchReceiptBtn').style.display = "none";
    }

    if (result.MarchBill) {
        const marchBillbtn = document.getElementById('marchBillbtn');
        marchBillbtn.style.display = "inline-block";
        marchBillbtn.onclick = () => {
            console.log("Opening URL:", result.MarchBill);
            window.open(result.MarchBill, '_blank');
        };
    } else {
        document.getElementById('marchBillbtn').style.display = "none";
    }



    if (result.decBill) {
        const decBillBtn = document.getElementById('decBillBtn');
        decBillBtn.style.display = "inline-block";
        decBillBtn.onclick = () => {
            window.open(result.decBill, '_blank');
        };
    } else {
        document.getElementById('decBillBtn').style.display = "none";
    }


    if (result.decRec) {
        const decRecBtn = document.getElementById('decRecBtn');
        decRecBtn.style.display = "inline-block";
        decRecBtn.onclick = () => {
            window.open(result.decRec, '_blank');
        };
    } else {
        document.getElementById('decRecBtn').style.display = "none";
    }

    if (result.patraBill) {
        const patraBillBtn = document.getElementById('patraBillBtn');
        patraBillBtn.style.display = "inline-block";
        patraBillBtn.onclick = () => {
            window.open(result.patraBill, '_blank');
        };
    } else {
        document.getElementById('patraBillBtn').style.display = "none";
    }


    if (result.patraRec) {
        const patraRecBtn = document.getElementById('patraRecBtn');
        patraRecBtn.style.display = "inline-block";
        patraRecBtn.onclick = () => {
            window.open(result.patraRec, '_blank');
        };
    } else {
        document.getElementById('patraRecBtn').style.display = "none";
    }

}

function normalizeFlatNo(input) {
    let digits = input.replace(/\D/g, "");

    if (digits.length === 3) {
        digits = digits.substring(0, 2) + "0" + digits.substring(2);
    }

    return digits.length === 4 ? digits : null;
}



function nameMatches(ownerName, searchInput) {
    if (!ownerName) return false;

    const ownerWords = ownerName.toUpperCase().split(" ");
    const searchWords = searchInput.split(" ");

    return searchWords.every(word => ownerWords.includes(word));

}


function updatePhoneNumber(result) {
    const phnoElement = document.getElementById('phno');
    const phnoLink = document.getElementById('phnoLink');

    if (result.phno) {
        phnoElement.innerText = result.phno;
        phnoLink.href = `https://wa.me/${result.phno.replace(/\D/g, '')}`;
        phnoLink.style.display = "inline";
    } else {
        phnoElement.innerText = "N/A";
        phnoLink.href = "#";
        phnoLink.style.display = "none";
    }
}




window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("shrink");
    } else {
        navbar.classList.remove("shrink");
    }
});



document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("popupModal");
    const modalImg = document.getElementById("popupImg");
    const closeModal = document.querySelector(".close");

    document.querySelectorAll("img[data-popup='true']").forEach(img => {
        img.addEventListener("click", function () {
            modal.style.display = "flex";
            modalImg.src = this.src;
        });
    });

    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});