// Function to get recommendations
async function getRecommendations() {
  try {
    
    const spinner = document.getElementById("spinner");
    const sections = document.getElementById("recommendations-sections");


    // Show the spinner and hide the recommendation sections
    spinner.classList.remove("hidden");
    sections.classList.add("hidden");

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
   
    // Hide the spinner and show the recommendation sections
    const spinner = document.getElementById("spinner");
    const sections = document.getElementById("recommendations-sections");
    spinner.classList.add("hidden");
    sections.classList.remove("hidden");

  }
}

// Function to display recommendations in a horizontal card layout
function displayRecommendations(recommendations, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = ""; // Clear previous results

  recommendations.forEach((details) => {
    const card = document.createElement("div");
    card.className = "game-card";

    // Creating the inner HTML structure
    card.innerHTML = `
      <img src="${details.header_image}" alt="${details.name}">
      <h3>${details.name}</h3>
      <p>${details.short_description}</p>
    `;

    // Creating the tags section
    const tags = document.createElement("p");
    tags.className = "tags";
    if (details.genres && details.genres.length > 0) {
        details.genres.forEach((genre) => {
            const tagSpan = document.createElement("span");
            tagSpan.textContent = genre.description;
            tags.appendChild(tagSpan);
        });
    } else {
        tags.textContent = "No tags available";
    }

    // Appending the tags section to the card
    card.appendChild(tags);

    card.addEventListener("click", () => {
      window.open(details.support_info.url, "_blank");
    });

    // Appending the card to the container
    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", function() {
  getRecommendations();
});
