document.addEventListener("DOMContentLoaded", function () {
    // Highlight clicked resource
    document.querySelectorAll(".resource-link").forEach(item => {
        item.addEventListener("click", function () {
            alert("You are about to visit: " + this.href);
        });
    });

    // Smooth scrolling effect for internal links
    document.querySelector(".btn").addEventListener("click", function (e) {
        e.preventDefault();
        window.location.href = "dashboard.html";
    });
});
