// Function to get recommendations
async function getRecommendations() {
  try {
    const response = await fetch("http://127.0.0.1:8500/recommendations", {
      method: "GET",
      credentials: "include", // This ensures cookies are included
    });
    const data = await response.json();
    console.log("Recommendations:", data);
    displayRecommendations(data);
  } catch (error) {
    console.error("Error fetching recommendations:", error);
    document.getElementById("results").textContent =
      "Error fetching game details. Please try again.";
  }
}

// Function to display recommendations
function displayRecommendations(recommendations) {
  const resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML = ""; // Clear previous results

  recommendations.forEach((details) => {
    const div = document.createElement("div");
    div.className = "game-detail";
    div.innerHTML = `
              <img src="${details.header_image}" alt="${details.name}">
              <h3>${details.name}</h3>
              <p>${details.short_description}</p>
              <p>Tags: ${details.genres
                .map((genre) => genre.description)
                .join(", ")}</p>
          `;
    resultsContainer.appendChild(div);
  });
}
