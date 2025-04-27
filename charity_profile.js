document.addEventListener("DOMContentLoaded", () => {
  const volunteerBtn = document.getElementById("volunteerBtn");
  const formDiv = document.getElementById("volunteerForm");

  if (volunteerBtn && formDiv) {
    formDiv.style.display = "none";

    volunteerBtn.addEventListener("click", () => {
      formDiv.style.display = formDiv.style.display === "none" ? "block" : "none";
    });
  }

  // Safe check if #servicesList exists
  const servicesList = document.getElementById("servicesList");
  if (servicesList) {
    const listItems = servicesList.querySelectorAll("li");

    const hoverBox = document.createElement("div");
    Object.assign(hoverBox.style, {
      position: "absolute",
      padding: "8px",
      background: "#fff",
      border: "1px solid #ccc",
      borderRadius: "8px",
      boxShadow: "0 0 5px rgba(0,0,0,0.2)",
      display: "none",
      zIndex: "1000"
    });
    document.body.appendChild(hoverBox);

    listItems.forEach(item => {
      item.addEventListener("mouseenter", (e) => {
        hoverBox.textContent = item.dataset.description || "";
        hoverBox.style.display = "block";
        hoverBox.style.left = `${e.pageX + 10}px`;
        hoverBox.style.top = `${e.pageY + 10}px`;
      });

      item.addEventListener("mousemove", (e) => {
        hoverBox.style.left = `${e.pageX + 10}px`;
        hoverBox.style.top = `${e.pageY + 10}px`;
      });

      item.addEventListener("mouseleave", () => {
        hoverBox.style.display = "none";
      });
    });
  }

  // Add motivational quote to header
  const header = document.querySelector("header");
  if (header) {
    const quote = document.createElement("p");
    quote.textContent = "“The best way to find yourself is to lose yourself in the service of others.” – Mahatma Gandhi";
    Object.assign(quote.style, {
      fontStyle: "italic",
      textAlign: "center",
      marginTop: "10px",
      color: "#555",
      fontSize: "18px"
    });
    header.appendChild(quote);
  }
});
