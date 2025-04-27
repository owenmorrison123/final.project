document.addEventListener("DOMContentLoaded", () => {
  const apiKey = "YOUR_API_KEY_HERE"; // <-- replace with your real API key
  const projectsContainer = document.getElementById("projects-container");

  fetch("https://api.globalgiving.org/api/public/projectservice/all/projects?api_key=" + apiKey)
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json();
    })
    .then(data => {
      const projects = data.projects.project.slice(0, 5); // Just show 5 projects
      projects.forEach(project => {
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("project-card");
        projectDiv.innerHTML = `
          <h3>${project.title}</h3>
          <p>${project.summary}</p>
          <a href="${project.projectLink}" target="_blank">Learn More</a>
        `;
        projectsContainer.appendChild(projectDiv);
      });
    })
    .catch(error => {
      console.error("Fetch error:", error);
      projectsContainer.innerHTML = "<p>Sorry, we couldn't load projects right now. Please try again later.</p>";
    });
});
