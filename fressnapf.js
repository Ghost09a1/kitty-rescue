// Function to perform the search on Fressnapf
async function searchFressnapf(query) {
    const searchUrl = `https://www.fressnapf.de/suche?search=${encodeURIComponent(query)}`;

    try {
        const response = await fetch(searchUrl);

        if (response.ok) {
            const text = await response.text();
            // Handle the search results here, e.g., display them on your webpage
            console.log("Search results:", text);
        } else {
            console.error("Failed to fetch the search results.");
        }
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

// Get references to the search button and input field
const searchButton = document.getElementById("searchBtn");
const input = document.getElementById("search");

// Function to handle the search button click
function handleSearchButtonClick() {
    const searchTerm = input.value;
    searchFressnapf(searchTerm);
}

// Add event listener for the search button
searchButton.addEventListener("click", handleSearchButtonClick);
