function showToast(message, type = "success", duration = 3000) {
    const toast = document.getElementById("toast");
    const icon = document.getElementById("toast-icon");
    const msg = document.getElementById("toast-message");
    const progress = document.getElementById("toast-progress");

    // Reset all FA classes
    icon.className = "toast-icon fa-solid";

    switch (type) {
        case "success":
            icon.classList.add("fa-circle-check");
            // <i class="fa-solid fa-check"></i>
            progress.style.backgroundColor = "crimson";
            break;
        case "error":
            icon.classList.add("fa-circle-xmark");
            progress.style.backgroundColor = "#F44336";
            break;
        case "info":
            icon.classList.add("fa-circle-info");
            progress.style.backgroundColor = "crimson";
            break;
        case "warning":
            icon.classList.add("fa-triangle-exclamation");
            progress.style.backgroundColor = "#FF9800";
            break;
        default:
            icon.classList.add("fa-bell");
            progress.style.backgroundColor = "#aaa";
    }

    msg.textContent = message;

    // Reset and restart progress animation
    progress.style.animation = "none";
    void progress.offsetWidth;
    progress.style.animation = `slideLeft ${duration}ms linear forwards`;

    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, duration);
}
