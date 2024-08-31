// Function to get recommendations
async function getRecommendations() {
  try {
    const button = document.getElementById("get-recommendations-button");
    button.disabled = true; // Disable the button to prevent multiple clicks
    button.textContent = "Loading..."; // Provide feedback that the process is ongoing
    const response = await fetch("http://127.0.0.1:8500/recommendations", {
      method: "GET",
      credentials: "include",
    });
    const data = await response.json();
    console.log("Recommendations:", data);

    displayRecommendations(data.user_to_user, "user-to-user");
    displayRecommendations(data.item_to_item, "item-to-item");
    displayRecommendations(data.tags, "tags-recommendations");
  } catch (error) {
    console.error("Error fetching recommendations:", error);
    document.getElementById("results").textContent =
      "Error fetching game details. Please try again.";
  } finally {
    console.log("Recommendations fetched successfully.");
    const button = document.getElementById("get-recommendations-button");
    button.disabled = false; // Re-enable the button
    button.textContent = "Get Recommendations"; // Reset the button text
  }
}

// Function to display recommendations in a horizontal card layout
function displayRecommendations(recommendations, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = ""; // Clear previous results

  recommendations.forEach((details) => {
    const card = document.createElement("div");
    card.className = "game-card";
    card.innerHTML = `
      <img src="${details.header_image}" alt="${details.name}">
      <h3>${details.name}</h3>
      <p>${details.short_description}</p>
      <p>Tags: ${details.genres
        .map((genre) => genre.description)
        .join(", ")}</p>
    `;
    container.appendChild(card);
  });
}
