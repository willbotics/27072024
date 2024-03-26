// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get all navigation links
    const navLinks = document.querySelectorAll("nav ul li a");

    // Loop through each navigation link
    navLinks.forEach(function(link) {
        // Add click event listener to each link
        link.addEventListener("click", function(event) {
            // Prevent default link behavior
            event.preventDefault();

            // Get the href attribute of the clicked link (which contains the section ID)
            const targetId = link.getAttribute("href").substring(1);

            // Find the corresponding section using the target ID
            const targetSection = document.getElementById(targetId);

            // Scroll the page to the top of the target section smoothly if it exists
            if (targetSection) {
                // Adjust scroll position to account for fixed header
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetOffset = targetSection.offsetTop - headerHeight;
                window.scrollTo({ top: targetOffset, behavior: "smooth" });
            }
        });
    });
});

// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get the photo section
    const photoSection = document.getElementById("photo-section");

    // Add scroll event listener to adjust the background position
    window.addEventListener("scroll", function() {
        // Calculate the new background position based on the scroll position
        const yPos = -window.pageYOffset / 2; // Adjust the divisor for desired effect

        // Apply the new background position
        photoSection.style.backgroundPositionY = yPos + "px";
    });
});

// Calculate remaining days until the wedding
function calculateDaysUntilWedding() {
    var weddingDate = new Date("2024-07-27"); // Set your wedding date here
    var currentDate = new Date();
    var timeDifference = weddingDate.getTime() - currentDate.getTime();
    var daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    return daysDifference;
}

// Update countdown clock
function updateCountdownClock() {
    var daysUntilWedding = calculateDaysUntilWedding();
    document.getElementById("countdown-clock").textContent = "Days until wedding: " + daysUntilWedding;
}

// Update countdown clock on page load
updateCountdownClock();
