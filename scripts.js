// // Function to highlight words matching the search query
// function highlightText() {
//     const input = document.getElementById('searchBar').value.toLowerCase();
//     const paragraphs = document.querySelectorAll('p'); // Selects all <p> elements on the page

//     paragraphs.forEach((paragraph) => {
//         const text = paragraph.textContent; // Get the text content of the paragraph

//         // Remove existing highlights
//         paragraph.innerHTML = text;

//         // Apply highlights if input matches
//         if (input.length > 0) {
//             const regex = new RegExp(input, 'gi'); // Case-insensitive search
//             const newText = text.replace(regex, (match) => `<span class="highlight">${match}</span>`);
//             paragraph.innerHTML = newText;
//         }
//     });
// }

// // Function to toggle the menu display
// function toggleMenu() {
//     const menu = document.getElementById("menu");
//     if (menu.style.display === "none" || !menu.style.display) {
//         menu.style.display = "block";
//     } else {
//         menu.style.display = "none";
//     }
// }
// // Get all profile image elements
// const profileImages = document.querySelectorAll('.profile-card img.profile-image');

// // Loop through each image and add the event listener
// profileImages.forEach(function(image) {
//     image.addEventListener('click', function() {
//         // Toggle the enlarged class when the image is clicked
//         this.classList.toggle('enlarged');
//     });
// });
// Function to highlight words matching the search query and filter paragraphs
function highlightTextAndFilter() {
    const input = document.getElementById('searchBar').value.toLowerCase();
    const paragraphs = document.querySelectorAll('p'); // Select all <p> elements on the page
    const profiles = document.querySelectorAll('.profile-card'); // Select all profile cards

    profiles.forEach((profile) => {
        const paragraphs = profile.querySelectorAll('p'); // Get all paragraphs within the profile
        let matchFound = false;

        paragraphs.forEach((paragraph) => {
            const text = paragraph.textContent; // Get the text content of the paragraph

            // Remove existing highlights
            paragraph.innerHTML = text;

            if (input.length > 0) {
                const regex = new RegExp(input, 'gi'); // Case-insensitive search
                const newText = text.replace(regex, (match) => `<span class="highlight">${match}</span>`);
                paragraph.innerHTML = newText;

                // Check if the paragraph contains the search query
                if (text.toLowerCase().includes(input)) {
                    matchFound = true;
                }
            } 
        });

        // Show or hide the profile based on the match found
        profile.style.display = matchFound || input.length === 0 ? 'block' : 'none';
    });
}

// Function to toggle the menu display
function toggleMenu() {
    const menu = document.getElementById("menu");
    if (menu.style.display === "none" || !menu.style.display) {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}

// Get all profile image elements
const profileImages = document.querySelectorAll('.profile-card img.profile-image');

// Loop through each image and add the event listener
profileImages.forEach(function(image) {
    image.addEventListener('click', function() {
        // Toggle the enlarged class when the image is clicked
        this.classList.toggle('enlarged');
    });
});

// Add event listener to the search bar
document.getElementById('searchBar').addEventListener('input', highlightTextAndFilter);
