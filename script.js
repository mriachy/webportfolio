const projects = [
  {
    title: "DamaKita - Sentiment Analysis",
    image: "images/damakita.png",
    tech: ["Next.js", "Node.js", "OpenAI API"],
    desc: "A web app that combines sentiment analysis with a conversational chatbot powered by ChatGPT. Built to demonstrate AI integration, natural language processing, and responsive UI design.",
    demoLink: "https://damakitawithdaki.netlify.app",
    githubLink: "https://github.com/mccrbico/DamaKita"
  },
  {
    title: "Portfolio Website",
    image: "images/portfolio.png",
    tech: ["HTML", "CSS", "JavaScript"],
    desc: "A responsive personal portfolio built with HTML, CSS, and JavaScript to showcase my skills, projects, and professional journey.",
    demoLink: "https://mccrbico.github.io/",
    githubLink: "https://github.com/mccrbico/mccrbico.github.io"
  }
  // Add more projects here
];

const container = document.getElementById("project_grid");

projects.forEach(project => {
  const card = document.createElement("div");
  card.className = "project_card";

  card.innerHTML = `
    <img src="${project.image}" alt="${project.title} preview" />
    <h3>${project.title}</h3>
    <p class="tech">Developed with ${project.tech.map(t => `<span>${t}</span>`).join(", ")}</p>
    <p class="desc">${project.desc}</p>
    <div class="project_buttons">
      <a href="${project.demoLink}" target="_blank" class="btn primary">Live Demo <i class="fa-solid fa-arrow-right"></i></a>
      <a href="${project.githubLink}" target="_blank" class="btn secondary"><i class="fab fa-github"></i> GitHub</a>
    </div>
  `;

  container.appendChild(card);
});