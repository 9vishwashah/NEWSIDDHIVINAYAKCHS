document.addEventListener("DOMContentLoaded", function () {
    const carouselTrack = document.querySelector(".carousel-track");

    const committeeMembers = [
        { img: "/pfp/bhanage.png", name: "Mr Uttam Bhanage", role: "Chairman" },
        { img: "/pfp/ajaygandhi.png", name: "Mr Ajay Gandhi", role: "Committee Member" },
        { img: "/pfp/shinde.png", name: "Mr Babaji Shinde", role: "Committee Member" },
        { img: "/pfp/kesur.png", name: "Mr Kesur Chavda", role: "Committee Member" },
        { img: "/pfp/meher.png", name: "Mr Meher Sripatrao", role: "Committee Member" },
        { img: "/pfp/holkar.png", name: "Mr Chandrakant Holkar", role: "Committee Member" }
    ];

    function createCarousel() {
        committeeMembers.forEach(member => {
            let card = document.createElement("div");
            card.classList.add("committee-card");

            card.innerHTML = `
                <div class="image-container">
                    <img src="${member.img}" alt="${member.name}">
                </div>
                <div class="name">${member.name}</div>
                <p>${member.role}</p>
            `;

            carouselTrack.appendChild(card);
        });

        // Duplicate cards to ensure infinite looping
        committeeMembers.forEach(member => {
            let card = document.createElement("div");
            card.classList.add("committee-card");

            card.innerHTML = `
                <div class="image-container">
                    <img src="${member.img}" alt="${member.name}">
                </div>
                <div class="name">${member.name}</div>
                <p>${member.role}</p>
            `;

            carouselTrack.appendChild(card);
        });
    }

    createCarousel();

    let currentTranslate = 0;
    const cardWidth = document.querySelector(".committee-card").offsetWidth + 20; // Card width + gap
    const speed = 1;

    function moveCarousel() {
        currentTranslate -= speed; // Move left continuously
        carouselTrack.style.transform = `translateX(${currentTranslate}px)`;

        if (Math.abs(currentTranslate) >= cardWidth * committeeMembers.length) {
            currentTranslate = 0; // Reset position smoothly
            carouselTrack.style.transform = `translateX(${currentTranslate}px)`;
        }

        requestAnimationFrame(moveCarousel); // Smooth animation
    }

    moveCarousel(); // Start infinite scrolling
});
