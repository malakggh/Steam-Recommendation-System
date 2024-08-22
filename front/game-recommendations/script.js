// Function to get recommendations
async function getRecommendations() {
  try {
    const response = await fetch("http://127.0.0.1:8000/recommendations", {
      method: "GET",
      credentials: "include", // This ensures cookies are included
    });
    const data = await response.json();
    displayRecommendations(data);
  } catch (error) {
    console.error("Error fetching recommendations:", error);
  }
}

// Function to display recommendations
function displayRecommendations(recommendations) {
  const recommendationsList = document.getElementById("recommendations");
  recommendationsList.innerHTML = ""; // Clear previous recommendations
  recommendations.forEach((game) => {
    const li = document.createElement("li");
    li.textContent = game;
    recommendationsList.appendChild(li);
  });
}
