function generateLink() {
  const userId = document.getElementById("steamUserID").value.trim();
  const link = `https://steamcommunity.com/id/${userId}/games/?tab=all`;
  const steamLinkElement = document.getElementById("steamLink");
  steamLinkElement.href = link;
  steamLinkElement.textContent = "Your Steam Games";
}

async function submitData() {
  const data = document.getElementById("steamData").value.trim();
  if (data) {
    try {
      const response = await fetch("http://127.0.0.1:8000/user_games", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data }),
        credentials: "include", // Important for handling cookies in cross-origin requests
      });
      console.log("Data submitted:", response);
      const result = await response.json();
      alert("Data submitted successfully!");
    } catch (error) {
      console.error("Failed to submit data:", error);
    }
  } else {
    alert("Please paste the Steam data into the text area.");
  }
}
