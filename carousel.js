document.addEventListener("DOMContentLoaded", function () {
    const carouselTrack = document.querySelector(".carousel-track");

    // Committee members array
    const committeeMembers = [
        { img: "/pfp/chairman img.png", name: "Mr Uttam Bhanage", role: "Chairman" },
        { img: "/pfp/committe1.png", name: "Mr Meher Sripatrao", role: "Committee Member" },
        { img: "/pfp/committee2.png", name: "Mr Babaji Shinde", role: "Committee Member" },
        { img: "/pfp/committee3.png", name: "Mr Kesur Chavda", role: "Committee Member" },
        { img: "/pfp/committee4.png", name: "Mr Chandrakant Holkar", role: "Committee Member" }
    ];

    // Function to create and append committee cards
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

    createCarousel(); // Generate cards dynamically

    let currentTranslate = 0;
    const cardWidth = document.querySelector(".committee-card").offsetWidth + 20; // Card width + gap
    const speed = 1; // Adjust speed of movement

    function moveCarousel() {
        currentTranslate -= speed; // Move left continuously
        carouselTrack.style.transform = `translateX(${currentTranslate}px)`;

        // Reset position seamlessly when first set moves out of view
        if (Math.abs(currentTranslate) >= cardWidth * committeeMembers.length) {
            currentTranslate = 0; // Reset position smoothly
            carouselTrack.style.transform = `translateX(${currentTranslate}px)`;
        }

        requestAnimationFrame(moveCarousel); // Smooth animation
    }

    moveCarousel(); // Start infinite scrolling
});
