const galleryTrack = document.getElementById("galleryTrack");
let isDragging = false;
let startX;
let scrollLeft;

galleryTrack.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.pageX - galleryTrack.offsetLeft;
    scrollLeft = galleryTrack.scrollLeft;
    galleryTrack.style.cursor = "grabbing";
});

galleryTrack.addEventListener("mouseleave", () => {
    isDragging = false;
    galleryTrack.style.cursor = "grab";
});

galleryTrack.addEventListener("mouseup", () => {
    isDragging = false;
    galleryTrack.style.cursor = "grab";
});

galleryTrack.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - galleryTrack.offsetLeft;
    const walk = (x - startX) * 2; // scroll speed
    galleryTrack.scrollLeft = scrollLeft - walk;
});

galleryTrack.style.cursor = "grab";