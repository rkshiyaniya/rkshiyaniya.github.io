document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("dark-mode-toggle");
    const body = document.body;
    const backToTop = document.getElementById("back-to-top");

    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
    }

    toggleButton.addEventListener("click", function() {
        body.classList.toggle("dark-mode");
        localStorage.setItem("darkMode", body.classList.contains("dark-mode") ? "enabled" : "disabled");
    });

    // Scroll Event for Back to Top Button
    window.addEventListener("scroll", function() {
        if (window.scrollY > 300) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    });

    backToTop.addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Trigger skill bar animation on page load
    setTimeout(() => {
        document.querySelectorAll(".progress-bar").forEach(bar => {
            bar.style.width = bar.classList.contains("python") ? "90%" :
                             bar.classList.contains("java") ? "85%" :
                             bar.classList.contains("javascript") ? "75%" :
                             bar.classList.contains("sql") ? "80%" :
                             bar.classList.contains("spring") ? "70%" :
                             bar.classList.contains("gcp") ? "65%" :
                             "75%";
        });
    }, 500);
});
