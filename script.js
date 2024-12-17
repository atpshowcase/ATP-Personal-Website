// Wait for the page to fully load
window.onload = function () {
    setTimeout(function () {
        // Hide the loading screen and show the content
        document.getElementById("loading-screen").style.display = "none";
        const content = document.getElementById("content");
        
        // Show content and apply rise animation
        content.classList.remove("hidden");
        content.classList.add("show");
    }, 5000);  // 5 seconds
};
