async function searchFressnapf(query) {
    const searchUrl = `https://www.fressnapf.de/suche?search=${encodeURIComponent(
        query
    )}`;

    try {
        const response = await fetch(searchUrl);

        if (response.ok) {
            const text = await response.text();
            console.log(text);
        } else {
            console.error("Failed to fetch the search results.");
        }
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

const searchButton = document.getElementById("searchBtn");
const input = document.getElementById("search");

function performSearch() {
    const searchTerm = input.value;
    searchFressnapf(searchTerm);
}

searchButton.addEventListener("click", performSearch);

const donationButton = document.getElementById("btn");
const cat = document.getElementById("cat");

function handleDonation() {
    const amount = input.value;

    if (amount == 0) {
        alert("Thanks for nothing, the cats are all sad :(");
        document.body.style.background = "red";
    } else {
        alert(`Thanks for the donation of $ ${amount}!`);
    }
}

function catClick() {
    document.body.style.background = "pink";
}

donationButton.addEventListener("click", handleDonation);
cat.addEventListener("click", catClick);
