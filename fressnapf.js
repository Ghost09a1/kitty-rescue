async function searchFressnapf(query) {
    const searchUrl = `https://www.fressnapf.de/suche?search=${encodeURIComponent(
        query
    )}`;

    try {
        const response = await fetch(searchUrl);

        if (response.ok) {
            const text = await response.text();

            console.log("Search results:", text);
        } else {
            console.error("Failed to fetch the search results.");
        }
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

const searchButton = document.getElementById("searchBtn");
const input = document.getElementById("search");

function handleSearchButtonClick() {
    const searchTerm = input.value;
    console.log({ searchButton, searchTerm, input });
    searchFressnapf(searchTerm);
}

searchButton.addEventListener("click", handleSearchButtonClick);
