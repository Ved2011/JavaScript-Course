let data = [];

async function fetchData() {
    try {
        const res = await fetch("travel_recommendation_api.json");
        data = await res.json();
    } catch (err) {
        console.log(err);
    }
}

fetchData();

function getKeyword(input) {
    input = input.toLowerCase();

    if (input.includes("beach")) return "beach";
    if (input.includes("temple")) return "temple";
    if (input.includes("country")) return "country";

    return null;
}

function search() {
    const inputEl = document.getElementById("searchInput");
    const resultsDiv = document.getElementById("results");

    if (!inputEl || !resultsDiv) return;

    const input = inputEl.value.toLowerCase().trim();

    if (!input) {
        resultsDiv.innerHTML = "<p>Type something to search</p>";
        return;
    }

    let results = [];

    data.forEach(category => {
        category.destinations.forEach(place => {
            const nameMatch = place.name.toLowerCase().includes(input);
            const descMatch = place.description.toLowerCase().includes(input);

            if (nameMatch || descMatch) {
                results.push(place);
            }
        });
    });

    if (results.length === 0) {
        resultsDiv.innerHTML = "<p>No results found</p>";
        return;
    }

    resultsDiv.style.display = "grid";
    resultsDiv.style.gridTemplateColumns = "repeat(auto-fit, minmax(250px, 1fr))";
    resultsDiv.style.gap = "20px";

    resultsDiv.innerHTML = results.slice(0, 6).map(place => `
        <div class="card">
            <h3>${place.name}</h3>
            <img src="${place.imageUrl}" alt="${place.name}" style="width: 100%; height: 150px; object-fit: cover;" />
            <p>${place.description}</p>
        </div>
    `).join("");
}

function clearSearch() {
    const inputEl = document.getElementById("searchInput");
    const resultsDiv = document.getElementById("results");

    if (inputEl) inputEl.value = "";
    if (resultsDiv) resultsDiv.innerHTML = "";
}