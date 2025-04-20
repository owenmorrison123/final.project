document.addEventListener("DOMContentLoaded", () => {
  const volunteerBtn = document.getElementById("volunteerBtn");
  const formDiv = document.getElementById("volunteerForm");
  formDiv.style.display = "none";

  volunteerBtn.addEventListener("click", () => {
    formDiv.style.display = formDiv.style.display === "none" ? "block" : "none";
  });

  // Add dynamic description on hover
  const listItems = document.querySelectorAll("#servicesList li");

  const hoverBox = document.createElement("div");
  hoverBox.style.position = "absolute";
  hoverBox.style.padding = "8px";
  hoverBox.style.background = "#fff";
  hoverBox.style.border = "1px solid #ccc";
  hoverBox.style.borderRadius = "8px";
  hoverBox.style.boxShadow = "0 0 5px rgba(0,0,0,0.2)";
  hoverBox.style.display = "none";
  hoverBox.style.zIndex = "1000";
  document.body.appendChild(hoverBox);

  listItems.forEach(item => {
    item.addEventListener("mouseenter", (e) => {
      hoverBox.textContent = item.dataset.description;
      hoverBox.style.display = "block";
      hoverBox.style.left = e.pageX + 10 + "px";
      hoverBox.style.top = e.pageY + 10 + "px";
    });

    item.addEventListener("mousemove", (e) => {
      hoverBox.style.left = e.pageX + 10 + "px";
      hoverBox.style.top = e.pageY + 10 + "px";
    });

    item.addEventListener("mouseleave", () => {
      hoverBox.style.display = "none";
    });
  });

  // Motivational quote
  const header = document.querySelector("header");
  const quote = document.createElement("p");
  quote.textContent = "“The best way to find yourself is to lose yourself in the service of others.” – Mahatma Gandhi";
  quote.style.fontStyle = "italic";
  quote.style.textAlign = "center";
  quote.style.marginTop = "10px";
  header.appendChild(quote);
});
