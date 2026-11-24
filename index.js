const projects = [
  {
    name: "Sharp Edge Barbers",
    description: "Responsive barber shop landing page with a gallery slider and a booking form with validation.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://b00g33y.github.io/barber-shop/",
    code: "https://github.com/B00G33Y/barber-shop",
    image: "images/barber-shop.jpg",
  },
];

const projectsGrid = document.getElementById("projectsGrid");

projectsGrid.innerHTML = projects
  .map(({ name, description, tech, live, code, image }) => `
    <article class="project-card">
      <img src="${image}" alt="Screenshot of ${name}">
      <h3>${name}</h3>
      <p>${description}</p>
      <ul class="tags">
        ${tech.map(item => `<li>${item}</li>`).join("")}
      </ul>
      <div class="project-links">
        <a href="${live}" target="_blank" rel="noopener noreferrer">Live</a>
        <a href="${code}" target="_blank" rel="noopener noreferrer">Code</a>
      </div>
    </article>
  `)
  .join("");


  document.getElementById("year").textContent= new Date().getFullYear();
  