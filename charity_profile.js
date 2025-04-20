// Toggle form visibility
document.addEventListener("DOMContentLoaded", () => {
  const volunteerBtn = document.getElementById("volunteerBtn");
  const formDiv = document.getElementById("volunteerForm");
  formDiv.style.display = "none"; // Hide initially

  volunteerBtn.addEventListener("click", () => {
    formDiv.style.display = formDiv.style.display === "none" ? "block" : "none";
  });

  // Add interactive detail on hover
  const detailBox = document.createElement("div");
  detailBox.textContent = "Hover over services to learn more!";
  detailBox.style.marginTop = "10px";
  detailBox.style.padding = "10px";
  detailBox.style.border = "1px dashed #aaa";
  detailBox.style.backgroundColor = "#f0f0f0";
  detailBox.style.display = "none";

  const servicesList = document.querySelector("ul");
  servicesList.parentNode.appendChild(detailBox);

  servicesList.addEventListener("mouseenter", () => {
    detailBox.style.display = "block";
  });

  servicesList.addEventListener("mouseleave", () => {
    detailBox.style.display = "none";
  });

  // Add a dynamic motivational quote at the top
  const header = document.querySelector("header");
  const quote = document.createElement("p");
  quote.textContent = "“The best way to find yourself is to lose yourself in the service of others.” – Mahatma Gandhi";
  quote.style.fontStyle = "italic";
  quote.style.textAlign = "center";
  quote.style.marginTop = "10px";
  header.appendChild(quote);
});
