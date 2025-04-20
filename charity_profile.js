// Event listener for the Volunteer button
document.getElementById("volunteerBtn").addEventListener("click", function () {
  const form = document.getElementById("volunteerForm");
  form.style.display = form.style.display === "none" ? "block" : "none";
});

// Additional interactivity: Show charity description on hover
const charityTitle = document.getElementById("charityTitle"); // Add this ID to a header or div

const descriptionBox = document.createElement("div");
descriptionBox.textContent = "We help communities by providing food, shelter, and education.";
descriptionBox.style.display = "none";
descriptionBox.style.border = "1px solid #ccc";
descriptionBox.style.padding = "10px";
descriptionBox.style.backgroundColor = "#f9f9f9";

charityTitle.appendChild(descriptionBox);

charityTitle.addEventListener("mouseenter", () => {
  descriptionBox.style.display = "block";
});

charityTitle.addEventListener("mouseleave", () => {
  descriptionBox.style.display = "none";
});
