document.addEventListener("DOMContentLoaded", () => {
  const eventsContainer = document.getElementById("eventsContainer");
  const errorMessage = document.getElementById("error");

  // Example API endpoint (you can replace this with a real one)
  const API_URL = "https://api.sampleapis.com/volunteering/events";

  fetch(API_URL)
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(data => {
      if (!data.length) {
        eventsContainer.innerHTML = "<p>No upcoming events found.</p>";
        return;
      }

      data.forEach(event => {
        const eventCard = document.createElement("div");
        eventCard.style.border = "1px solid #ccc";
        eventCard.style.margin = "10px 0";
        eventCard.style.padding = "15px";
        eventCard.style.borderRadius = "8px";
        eventCard.style.backgroundColor = "#fff";

        eventCard.innerHTML = `
          <h2>${event.title}</h2>
          <p><strong>Date:</strong> ${event.date}</p>
          <p><strong>Location:</strong> ${event.location}</p>
          <p>${event.description}</p>
        `;

        eventsContainer.appendChild(eventCard);
      });
    })
    .catch(error => {
      console.error("Fetch error:", error);
      errorMessage.style.display = "block";
    });
});
