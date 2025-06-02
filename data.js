
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


function showWelcomeToast(duration = 5000) {
    const toast = document.getElementById("welcome-toast");
    // const icon = document.getElementById("toast-icon");
    const progress = document.getElementById("welcome-toast-progress");

    // Reset icon
    // icon.className = "toast-icon fa-solid fa-circle-info";
    progress.style.backgroundColor = "crimson";

    // Reset and restart animation
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
};



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
                patraBill, patraRec, MarchReceipt, MarchBill,
                vehicleImage1, vehicleImage2
            ] = line.split(',').map(item => item.trim());

            return {
                ownerName, flatNo, phno, email, fourwheel, twowheel, balance, occupancy,
                TwoWNo, SecondTwNo, FourWNo, decBill, decRec,
                patraBill, patraRec, MarchReceipt, MarchBill,
                vehicleImage1, vehicleImage2
            };
        });

        console.log('CSV Data Loaded:', flatData);
    })
    .catch(error => {
        console.error('Error loading CSV:', error);
        console.log('Error loading member data. Please check the console for details.');
    });


// window.onload = function () {
//     const popup = document.getElementById("alertPopup");
//     popup.style.display = "block";

//     // Optional: Auto-dismiss after 8 seconds
//     setTimeout(() => {
//         closePopup();
//     }, 8000);
// };

// function closePopup() {
//     document.getElementById("alertPopup").style.display = "none";
// }








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

    const result = flatData.find(flat =>
        (normalizedFlatNo && flat.flatNo === normalizedFlatNo) ||
        (flat.TwoWNo && flat.TwoWNo.toUpperCase() === searchInput) ||
        (flat.FourWNo && flat.FourWNo.toUpperCase() === searchInput) ||
        nameMatches(flat.ownerName, searchInput)
    );

    const resultCard = document.getElementById('resultCard');
    resetField();

    if (result) {

        if (normalizeNo !== result.phno.trim()) {
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