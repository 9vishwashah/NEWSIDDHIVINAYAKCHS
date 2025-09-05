const penaltyData = [
    {
        date: "6 July",
        flat: "A-14/12",
        vehicleNo: "MH43CN8123",
        reason: "Wrong Parking of 2W",
        amount: "₹ 200",
        photo: "https://drive.google.com/file/d/1JfSVzNzWz0gVIJyg58Gk5Y4qOBKd7fI4/view",
        bill: "https://drive.google.com/file/d/1f0VU3bOd5l0xF1DA9Z6DIwczCrJms0hW/view"
    },
    {
        date: "5 July",
        flat: "A-14/12",
        vehicleNo: "MH43CN8123",
        reason: "Wrong Parking of 2W",
        amount: "₹ 200",
        photo: "https://drive.google.com/file/d/1HHSSR17gbVJSKfhQDSNajjfX3Yk2sGzY/view",
        bill: "https://drive.google.com/file/d/1OMjHpRwfRCcQznXqbxul9AQZX9RFxReb/view"
    },
    {
        date: "4 July",
        flat: "A-14/07",
        vehicleNo: "MH4302EG8209",
        reason: "Wrong Parking of 2W",
        amount: "₹ 200",
        photo: "https://drive.google.com/file/d/1C5iX11Mf9bCZ0SjJvzXgA62aIOhSol4I/view",
        bill: "https://drive.google.com/file/d/1s8li37kee4YtMHtBCR6jbeZY6i5dYugc/view"
    },
    {
        date: "4 July",
        flat: "A-14/12",
        vehicleNo: "MH43CN8123",
        reason: "Wrong Parking of 2W",
        amount: "₹ 200",
        photo: "https://drive.google.com/file/d/1HHSSR17gbVJSKfhQDSNajjfX3Yk2sGzY/view",
        bill: "https://drive.google.com/file/d/1OMjHpRwfRCcQznXqbxul9AQZX9RFxReb/view"
    },
    {
        date: "3 July",
        flat: "A-14/12",
        vehicleNo: "MH43CN8123",
        reason: "Wrong Parking of 2W",
        amount: "₹ 200",
        photo: "https://drive.google.com/file/d/1HHSSR17gbVJSKfhQDSNajjfX3Yk2sGzY/view",
        bill: "https://drive.google.com/file/d/1OMjHpRwfRCcQznXqbxul9AQZX9RFxReb/view"
    },
    {
        date: "3 July",
        flat: "A-14/04",
        vehicleNo: "MH43AM7405",
        reason: "Wrong Parking of 2W",
        amount: "₹ 200",
        photo: "https://drive.google.com/file/d/1gShR4W9ushoPSwTx750pRAG3KfROX_yQ/view",
        bill: "https://drive.google.com/file/d/1ZLiJtN6Rbjnb3JWiPP2eT-fcL8IWsb07/view"
    },
    {
        date: "2 July",
        flat: "A-14/12",
        vehicleNo: "MH43CN8123",
        reason: "Wrong Parking of 2W",
        amount: "₹ 200",
        photo: "https://drive.google.com/file/d/1HHSSR17gbVJSKfhQDSNajjfX3Yk2sGzY/view",
        bill: "https://drive.google.com/file/d/1_a3Mn6eEGvTiubsq5YR2nvojXRV354P4/view"
    },
    {
        date: "1 July",
        flat: "B-13/04",
        vehicleNo: "OUTSIDE 2W",
        reason: "Parking of Outside 2W",
        amount: "₹ 200",
        photo: "https://newsv.netlify.app/",
        bill: "https://drive.google.com/file/d/1gJAmPk29MR1S7sBSRtDddi-xo-R3mBwW/view"
    },
    {
        date: "1 July",
        flat: "A-14/05",
        vehicleNo: "MH43LJ4452",
        reason: "Wrong Parking of 2W",
        amount: "₹ 200",
        photo: "https://drive.google.com/file/d/1d5DNTtvCpgsV_i-1m1qpJPqKHW6gaTOP/view",
        bill: "https://drive.google.com/file/d/1Reg1en6-ewNSgudaYzZYUD946qwV0YQD/view"
    },
    {
        date: "1 July",
        flat: "A-14/12",
        vehicleNo: "MH43CN8123",
        reason: "Wrong Parking of 2W",
        amount: "₹ 200",
        photo: "https://drive.google.com/file/d/1HHSSR17gbVJSKfhQDSNajjfX3Yk2sGzY/view",
        bill: "https://drive.google.com/file/d/1kNnQSGbLfBb9f1tUT6-G7a4f72G-Mntc/view"
    },
    {
        date: "29 July",
        flat: "A-14/04",
        vehicleNo: "MH43AM7405",
        reason: "Wrong Parking of 2W",
        amount: "₹ 200",
        photo: "https://drive.google.com/file/d/1D83AKye_pE-eYr0UextlLDnr1vq5xBMS/view",
        bill: "https://drive.google.com/file/d/1QotdhHkh529_QpuQckHZ3kTKe1d53xwi/view"
    },
    {
        date: "28 June",
        flat: "A-14/04",
        vehicleNo: "MH43AM7405",
        reason: "Wrong Parking of 2W",
        amount: "₹ 200",
        photo: "https://drive.google.com/file/d/1nljxT9LzmV5D9FGehQm28clhjIO2A3kx/view",
        bill: "https://drive.google.com/file/d/1QotdhHkh529_QpuQckHZ3kTKe1d53xwi/view"
    },
    {
        date: "27 June",
        flat: "B-11/02",
        vehicleNo: "MH43AQ6513",
        reason: "Wrong Parking of 2W",
        amount: "₹ 200",
        photo: "https://drive.google.com/file/d/1XcOVGh4YMnHTSKbEIAyXe8f-FnAWqqW6/view",
        bill: "https://drive.google.com/file/d/1FntOg8O8KwlCqm_-gy12rAlj703HKNEs/view"
    },
    {
        date: "27 June",
        flat: "B-11/11",
        vehicleNo: "MH43AQ6513",
        reason: "Wrong Parking of 2W",
        amount: "₹ 200",
        photo: "https://drive.google.com/file/d/1XcOVGh4YMnHTSKbEIAyXe8f-FnAWqqW6/view",
        bill: "https://drive.google.com/file/d/1Wm594acr2G5u65mGc1DuDkSqlLzhQcLA/view"
    },
    {
        date: "26 June",
        flat: "B-11/07",
        vehicleNo: "MH14HH9235",
        reason: "Wrong Parking of 2W",
        amount: "₹ 200",
        photo: "https://drive.google.com/file/d/1y5iS7pIBuVHIejC65SpWQVFhrw8WKAUz/view",
        bill: "https://drive.google.com/file/d/1yG4lzNd4Hma64RBDqomzs2UIxkIBB1Zm/view"
    },
    {
        date: "26 June",
        flat: "B-10/08",
        vehicleNo: "Not Visible",
        reason: "Wrong Parking of 2W",
        amount: "₹ 200",
        photo: "https://drive.google.com/file/d/1J6VQ2AiqwEkBwyA_Ou7GjAnWFUrGyBOb/view",
        bill: "https://drive.google.com/file/d/111rc6LIngmDJGlUcGxj-wrw4lbdRrPdh/view"
    },
    {
        date: "25 June",
        flat: "A-15/07",
        vehicleNo: "MH14FZ3552",
        reason: "Wrong Parking of 2W",
        amount: "₹ 200",
        photo: "https://drive.google.com/file/d/1AFvC3FsyFD8CCusXJHrB6Nd1z7-yHc7u/view",
        bill: "https://drive.google.com/file/d/1TV7VwGd-8evSTBsg9FJP3srRQ5uzX9WF/view"
    },
    {
        date: "25 June",
        flat: "B-12/05",
        vehicleNo: "MH01EV5055",
        reason: "Overnight Parking of Outside 4W",
        amount: "₹ 500",
        photo: "https://drive.google.com/file/d/15CZnPzZLulqpYMUfbp4XZBjVdK4XXhZQ/view",
        bill: "https://drive.google.com/file/d/1PtKG4xomPbXeu4Vk1OXtIL5LRJF-SThZ/view"
    },
    {
        date: "25 June",
        flat: "B-11/11",
        vehicleNo: "MH43AQ6513",
        reason: "Wrong Parking of 2W",
        amount: "₹ 200",
        photo: "https://drive.google.com/file/d/1XcOVGh4YMnHTSKbEIAyXe8f-FnAWqqW6/view",
        bill: "https://drive.google.com/file/d/1PgFG_ZHoTmvjdh4LsNknWR1384Pu7Flr/view"
    },
    {
        date: "25 June",
        flat: "B-10/11",
        vehicleNo: "MH43AS1611",
        reason: "Wrong Parking of 2W",
        amount: "₹ 200",
        photo: "https://drive.google.com/file/d/1TYi4a62ipOVH4HSuy9R2nNce5RMmiwZJ/view",
        bill: "https://drive.google.com/file/d/14x6ORyRJ-33wxoq3ZrPzjJVppeoXq1Ad/view"
    },
    {
        date: "24 June",
        flat: "A-15/15",
        vehicleNo: "MH12XE7492",
        reason: "Overnight Parking of Outside 4W",
        amount: "₹ 500",
        photo: "https://drive.google.com/file/d/1LjGAdXsc4EiSdj8KfPZohBReDJj24kGq/view",
        bill: "https://drive.google.com/file/d/1bvUyOVDCj0cL5DhAKtq0-BUpfmyWIs92/view"
    },
    {
        date: "24 June",
        flat: "A-15/07",
        vehicleNo: "MH14FZ3552",
        reason: "Wrong Parking of 2W",
        amount: "₹ 200",
        photo: "https://drive.google.com/file/d/1AFvC3FsyFD8CCusXJHrB6Nd1z7-yHc7u/view",
        bill: "https://drive.google.com/file/d/1IVjISSkICaM-HnXkWC13NG0bCl_MnZBU/view"
    },
    {
        date: "24 June",
        flat: "B-11/08",
        vehicleNo: "MH43CM7413",
        reason: "Overnight Parking of Outside 4W",
        amount: "₹ 500",
        photo: "https://drive.google.com/file/d/16updcy99alkwcwAg0qskQ3Hm2JItIfSH/view",
        bill: "https://drive.google.com/file/d/10hy79IQoKM9e6nA4KLMi_SmoXQLDoJQs/view"
    },
    {
        date: "24 June",
        flat: "B-11/11",
        vehicleNo: "MH43AQ6513",
        reason: "Wrong Parking of 2W",
        amount: "₹ 200",
        photo: "https://drive.google.com/file/d/1XcOVGh4YMnHTSKbEIAyXe8f-FnAWqqW6/view",
        bill: "https://drive.google.com/file/d/1l_CU4TvnW2NbZ_asTtRsmnTFTkPCT-Ca/view"
    },
    {
        date: "24 June",
        flat: "B-11/07",
        vehicleNo: "MH14HH9235",
        reason: "Wrong Parking of 2W",
        amount: "₹ 200",
        photo: "https://drive.google.com/file/d/1y5iS7pIBuVHIejC65SpWQVFhrw8WKAUz/view",
        bill: "https://drive.google.com/file/d/1km1anpDkcLP5afv6z9xw1SmWAuO1eYpJ/view"
    },
    {
        date: "21 June",
        flat: "B-12/08",
        vehicleNo: "MH04FF7914",
        reason: "Wrong Parking of 4W",
        amount: "₹ 500",
        photo: "https://drive.google.com/file/d/1z4GN-wo1Wc5D2DbTOM3xKLVqj2gsr7bX/view",
        bill: "https://drive.google.com/file/d/1u4y8p_icrF-MApFoeucHa5Azwzj4eONZ/view"
    },
    {
        date: "21 June",
        flat: "B-12/02",
        vehicleNo: "MH04DX1523",
        reason: "Wrong Parking of 2W",
        amount: "₹ 200",
        photo: "https://drive.google.com/file/d/1aBTi6w5iRFM3NNp6sdBVqWqaJBUHl5HI/view",
        bill: "https://drive.google.com/file/d/1oxt3_aSGOU9mTGaplTGs6OSwBXYusk4H/view"
    },
    {
        date: "1 June",
        flat: "B-22/09",
        vehicleNo: "MH26AD2424",
        reason: "Overnight Parking of Outside 4W",
        amount: "₹ 500",
        photo: "https://newsv.netlify.app/",
        bill: "https://drive.google.com/file/d/1Q4LPbN0vLMgF5RUodsTc6IJFLkdFV2xf/view"
    },
    {
        date: "18 May",
        flat: "B-23/11",
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




    const showLatestBtn = document.getElementById("show-latest");
    const showPreviousBtn = document.getElementById("show-previous");

    const totalBatches = Math.ceil(penaltyData.length / batchSize);

    // Load default: latest entries (first 5 in the array)
    renderPenalties(currentPage);

    showPreviousBtn.addEventListener("click", () => {
        if (currentPage < totalBatches - 1) {
            currentPage++;
            renderPenalties(currentPage);
        }
    });

    showLatestBtn.addEventListener("click", () => {
        if (currentPage > 0) {
            currentPage--;
            renderPenalties(currentPage);
        }
    });

    function renderPenalties(page) {
        const container = document.getElementById("penalty-rows");
        container.innerHTML = "";

        const start = page * batchSize;
        const end = start + batchSize;
        const batch = penaltyData.slice(start, end);

        batch.forEach(entry => {
            const row = document.createElement("div");
            row.className = "penalty-row";
            row.innerHTML = `
                <span>${entry.date}</span>
                <span><strong>${entry.flat}</strong></span>
                <span>${entry.vehicleNo}</span>
                <span>${entry.reason}</span>
                <span>${entry.amount}</span>
                <span>${entry.photo ? `<a href="${entry.photo}" target="_blank" class="penalty-receipt"><i class="fa-solid fa-eye"></i> Photo</a>` : "-"}</span>
                <span>${entry.bill ? `<a href="${entry.bill}" target="_blank" class="penalty-bill"><i class="fa-solid fa-file-invoice"></i> Bill</a>` : "-"}</span>
            `;
            container.appendChild(row);
        });

        // Button disabling (optional)
        showLatestBtn.disabled = currentPage === 0;
        showPreviousBtn.disabled = currentPage >= totalBatches - 1;
        const pageCounter = document.getElementById("penalty-page-counter");
        pageCounter.textContent = `Page ${page + 1} of ${totalBatches}`;
    }

    // Forms 
    const SUPABASE_URL = 'https://exuwgrqeecccowoymxxs.supabase.co';
    const SUPABASE_KEY = 'sb_publishable_Ov-hEYH3LoEzkQtvzq1URg_TKf5QdeR';
    const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
    // --- 1. Form Elements ---
    const surveyForm = document.getElementById('member-survey-form');
    const twoWheelerToggles = document.querySelectorAll('input[name="two_wheeler_count"]');
    const twoWheelerInputsContainer = document.getElementById('two-wheeler-inputs');
    const hasFourWheelerToggles = document.querySelectorAll('input[name="has_four_wheeler"]');
    const fourWheelerInputContainer = document.getElementById('four-wheeler-input');
    const formStatus = document.getElementById('form-status');

    // --- 2. Conditional Logic for Form ---
    twoWheelerToggles.forEach(toggle => {
        toggle.addEventListener('change', (e) => {
            const count = parseInt(e.target.value);
            twoWheelerInputsContainer.innerHTML = ''; // Clear previous inputs
            for (let i = 1; i <= count; i++) {
                const input = document.createElement('input');
                input.type = 'text';
                input.placeholder = `Two-Wheeler #${i} Number`;
                input.name = `two_wheeler_no_${i}`;
                input.style.marginBottom = '10px';
                twoWheelerInputsContainer.appendChild(input);
            }
        });
    });

    hasFourWheelerToggles.forEach(toggle => {
        toggle.addEventListener('change', (e) => {
            if (e.target.value === 'yes') {
                fourWheelerInputContainer.innerHTML = `<input type="text" name="four_wheeler_number" placeholder="Four-Wheeler Number">`;
            } else {
                fourWheelerInputContainer.innerHTML = '';
            }
        });
    });

    // --- 3. Form Submission Logic ---
    surveyForm.addEventListener('submit', async (e) => {
        e.preventDefault(); // This is the line that STOPS the page from reloading

        const submitBtn = document.getElementById('submit-survey-btn');
        submitBtn.disabled = true;
        formStatus.textContent = 'Submitting...';

        const formData = new FormData(surveyForm);

        const twoWheelerNumbers = [];
        const twoWheelerCount = parseInt(formData.get('two_wheeler_count'));
        for (let i = 1; i <= twoWheelerCount; i++) {
            const vehicleNo = formData.get(`two_wheeler_no_${i}`);
            if (vehicleNo) twoWheelerNumbers.push(vehicleNo);
        }

        const surveyData = {
            flat_no: formData.get('flat_no'),
            owner_name: formData.get('owner_name'),
            primary_mobile: formData.get('primary_mobile'),
            secondary_mobile: formData.get('secondary_mobile') || null,
            email: formData.get('email') || null,
            two_wheeler_count: twoWheelerCount,
            two_wheeler_numbers: twoWheelerNumbers,
            has_four_wheeler: formData.get('has_four_wheeler') === 'yes',
            four_wheeler_number: formData.get('four_wheeler_number') || null,
            occupancy_status: formData.get('occupancy_status'),
            residents_count: parseInt(formData.get('residents_count')),
            redevelopment_preference: formData.get('redevelopment_preference'),
            feedback: formData.get('feedback') || null
        };

        // This uses the 'supabaseClient' variable created in your main script.js
        const { error } = await supabaseClient.from('member_survey').insert([surveyData]);

        if (error) {
            console.error('Error submitting survey:', error);
            formStatus.textContent = `Error: ${error.message}`;
            submitBtn.disabled = false;
        } else {
            formStatus.textContent = 'Thank you! Your response has been recorded.';
            surveyForm.reset();
            twoWheelerInputsContainer.innerHTML = '';
            fourWheelerInputContainer.innerHTML = '';
            setTimeout(() => {
                formStatus.textContent = '';
                submitBtn.disabled = false;
            }, 4000);
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
                patraBill, patraRec, MarchReceipt, MarchBill, JuneRec, JuneBill, SepBill, SepRec,
                vehicleImage1, vehicleImage2
            ] = line.split(',').map(item => item.trim());

            return {
                ownerName, flatNo, phno, email, fourwheel, twowheel, balance, occupancy,
                TwoWNo, SecondTwNo, FourWNo, decBill, decRec,
                patraBill, patraRec, MarchReceipt, MarchBill, JuneRec, JuneBill, SepBill, SepRec,
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
    let digitsOnly = input.replace(/\D/g, '');

    if (digitsOnly.length > 10 && digitsOnly.startsWith('91')) {
        digitsOnly = digitsOnly.slice(-10);
    }

    return digitsOnly;
}



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

    if (result.SepRec) {
        const sepReceiptBtn = document.getElementById('sepReceiptBtn');
        sepReceiptBtn.style.display = "inline-block";
        sepReceiptBtn.onclick = () => {
            console.log("Opening URL:", result.SepRec);
            window.open(result.SepRec, '_blank');
        };
    } else {
        document.getElementById('sepReceiptBtn').style.display = "none";
    }

    if (result.SepBill) {
        const sepBillbtn = document.getElementById('sepBillbtn');
        sepBillbtn.style.display = "inline-block";
        sepBillbtn.onclick = () => {
            console.log("Opening URL:", result.SepBill);
            window.open(result.SepBill, '_blank');
        };
    } else {
        document.getElementById('sepBillbtn').style.display = "none";
    }


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