const steamUserIDInput = document.getElementById("steamUserID");
const openSteamLibraryButton = document.getElementById(
  "openSteamLibraryButton"
);
toggleButtonState();
// Function to enable or disable the button based on input value
function toggleButtonState() {
  if (steamUserIDInput.value.trim() === "") {
    openSteamLibraryButton.disabled = true;
  } else {
    openSteamLibraryButton.disabled = false;
  }
}

// Add event listener to the input element
steamUserIDInput.addEventListener("input", toggleButtonState);
function generateLink() {
  const userId = document.getElementById("steamUserID").value.trim();

  if (userId === "") {
    alert("Please enter your Steam user-id.");
    return; // Exit the function if the input is empty
  }
  // Disable the button
  openSteamLibraryButton.disabled = true;

  // Clear the input
  steamUserIDInput.value = "";

  const link = `https://steamcommunity.com/id/${userId}/games/?tab=all`;
  window.open(link, "_blank"); // Open the link in a new tab
}

// Add event listener to the input field to detect "Enter" key press
document
  .getElementById("steamUserID")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent the default action (form submission, etc.)
      generateLink(); // Call the generateLink function
    }
  });

async function submitData() {
  const data = document.getElementById("steamData").value.trim();
  if (data) {
    try {
      const response = await fetch("http://127.0.0.1:8500/user_games", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data }),
        credentials: "include", // Important for handling cookies in cross-origin requests
      });
      console.log("Data submitted:", response);
      await response.json();
      alert("Data submitted successfully!");
      window.location.href = "/front/game-recommendations";
    } catch (error) {
      console.error("Failed to submit data:", error);
    }
  } else {
    alert("Please paste the Steam data into the text area.");
  }
}
