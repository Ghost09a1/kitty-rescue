async function searchFressnapf(query) {
    const searchUrl = `https://www.fressnapf.de/suche?search=${encodeURIComponent(query)}`;

    try {
        const response = await fetch(searchUrl);

        if (response.ok) {
            const text = await response.text();
            console.log(text); // Log the response HTML to the console
        } else {
            console.error('Failed to fetch the search results.');
        }
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

// Get references to the search button and input field
const searchButton = document.getElementById("searchBtn");
const input = document.getElementById("search");

// Function to perform the search when the button is clicked
function performSearch() {
    const searchTerm = input.value;
    searchFressnapf(searchTerm); // Call the search function with the entered search term
}

// Add event listener for the search button
searchButton.addEventListener("click", performSearch);

// Get references to the donation button and cat image
const donationButton = document.getElementById("btn");
const cat = document.getElementById("cat");

// Function to handle donation button click
function handleDonation() {
    const amount = input.value;

    if (amount == 0) {
        alert('Thanks for nothing, the cats are all sad :(');
        document.body.style.background = 'red';
    } else {
        alert(`Thanks for the donation of $ ${amount}!`);
    }
}

// Function to handle cat image click
function catClick() {
    document.body.style.background = 'pink';
}

// Add event listeners for donation button and cat image
donationButton.addEventListener('click', handleDonation);
cat.addEventListener('click', catClick);