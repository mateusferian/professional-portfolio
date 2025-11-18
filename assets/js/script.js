/* =========================================================
   PARTICLES JS
========================================================= */
particlesJS("particles-js", {
  particles: {
    number: { value: 70 },
    color: { value: "#8a63f6" },
    shape: { type: "circle" },
    opacity: { value: 0.3 },
    size: { value: 2 },
    line_linked: {
      enable: true,
      distance: 120,
      color: "#8a63f6",
      opacity: 0.2,
      width: 1
    },
    move: { enable: true, speed: 1.2, direction: "none", out_mode: "out" }
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" }
    },
    modes: {
      repulse: { distance: 80, duration: 0.4 },
      push: { particles_nb: 4 }
    }
  },
  retina_detect: true
});


/* =========================================================
   TÍTULO ANIMADO
========================================================= */
document.addEventListener("DOMContentLoaded", () => {

  const titulo = document.getElementById("titulo-animado");
  const textos = ["Desenvolvedor Salesforce", "Desenvolvedor Full Stack"];
  let index = 0;

  setInterval(() => {
    titulo.classList.add("bounce");

    setTimeout(() => {
      index = (index + 1) % textos.length;
      titulo.textContent = textos[index];
    }, 300);

    setTimeout(() => {
      titulo.classList.remove("bounce");
    }, 600);

  }, 2000);
});

/* =========================================================
   DADOS DAS EXPERIÊNCIAS
========================================================= */
const detalhes = {
  datum: `
    <span class="badge-nivel">Senior</span>
    <h3>Desenvolvedor Salesforce Senior</h3>
    <p class="empresa">Duko Tecnologia • Consultoria</p>
    <p class="xp-data-grande">Maio 2025 - Atual</p>

    <p class="promocao">🎉 Promovido a Sênior após 5 meses</p>

    <h4>Principais Conquistas</h4>
    <ul class="xp-lista">
      <li>Construção de Einstein Bots</li>
      <li>Desenvolvimento em Apex, LWC, flows</li>
      <li>Integrações com ferramentas externas</li>
      <li>CI/CD para versionamento e deploy</li>
      <li>Esteira De Deploy jenkins</li>
      <li>Sales Cloud</li>
      <li>Service Cloud</li>
      <li>Atuação com Solução Tecnica em Marketing Cloud</li>
      <li>Digital Engagement</li>
      <li>Configurações Nativas</li>
      <li>Experiência em canal de atendimento</li>
    </ul>

    <h4>Tecnologias Utilizadas</h4>
    <div class="tags mt-4">
      <span>Salesforce</span>
      <span>Apex</span>
      <span>LWC</span>
      <span>Einstein Bot</span>
      <span>CI/CD</span>
      <span>Jenkins</span>
    </div>
  `,

  dukotech: `
    <span class="badge-nivel">Pleno</span>
    <h3>Desenvolvedor Salesforce - Referência Técnica</h3>
    <p class="empresa">Duko Tecnologia • Consultoria</p>
    <p class="xp-data-grande">Setembro 2023 - Maio 2025</p>

    <p class="promocao">🎉 Promovido a Pleno após 6 meses</p>

    <h4>Atividades</h4>
    <ul class="xp-lista">
      <li>Construção de mais de 40 Projetos</li>
      <li>Desenvolvimento em Apex, LWC e configurações avançadas</li>
      <li>Integrações com ferramentas externas</li>
      <li>CI/CD para versionamento e deploy</li>
      <li>Treinamentos sobre boas práticas em Einstein Bot</li>
      <li>Atuação em Sales Cloud, Service Cloud, Maps e Cadence</li>
      <li>Experiência em diversos setores</li>
      <li>Realização de treinamentos para desenvolvedores</li>
    </ul>

    <h4>Tecnologias Utilizadas</h4>
    <div class="tags mt-4">
      <span>Salesforce</span><span>Apex</span><span>LWC</span><span>Einstein Bot</span>
      <span>Node.js</span><span>Java</span><span>CI/CD</span>
    </div>
  `,

  consulcl: `
    <h3>Desenvolvedor Full Stack</h3>
    <span class="badge-nivel">Freelancer Pleno</span>
    <p class="empresa">Consulcl • Consultoria</p>
    <p class="xp-data-grande">Abril 2024 - Maio 2024</p>

    <p class="promocao">Projeto de sistema completo</p>

    <h4>Atividades</h4>
    <ul class="xp-lista">
      <li>Desenvolvimento completo de sistema de mega-sena</li>
      <li>Modelagem de dados eficiente</li>
      <li>Experiência do usuário e código limpo</li>
      <li>Funcionalidades completas implementadas</li>
    </ul>

    <h4>Tecnologias</h4>
    <div class="tags mt-4">
      <span>PHP</span><span>JavaScript</span><span>HTML</span>
      <span>CSS</span><span>MySQL</span>
    </div>
  `,

  gerador: `
    <h3>Desenvolvedor Back-End</h3>
    <span class="badge-nivel">Pleno</span>
    <p class="empresa">Gerador de Devs • Consultoria</p>
    <p class="xp-data-grande">Junho 2022 - Agosto 2023</p>

    <p class="promocao">Arquitetura de microsserviços</p>

    <h4>Atividades</h4>
    <ul class="xp-lista">
      <li>APIs RESTful com Spring Boot e Quarkus</li>
      <li>Microsserviços escaláveis</li>
      <li>MongoDB e MySQL</li>
      <li>Swagger para documentação</li>
      <li>Testes automatizados com JUnit</li>
      <li>Docker para containerização</li>
      <li>Scrum e Gitflow</li>
    </ul>

    <h4>Tecnologias</h4>
    <div class="tags mt-4">
      <span>Java</span><span>Node.js</span><span>Spring Boot</span>
      <span>Quarkus</span><span>MongoDB</span><span>MySQL</span>
      <span>Docker</span><span>JUnit</span>
    </div>
  `,

  garten: `
    <h3>Designer Digital</h3>
    <span class="badge-nivel">Pleno</span>
    <p class="empresa">Garten Seminovos</p>
    <p class="xp-data-grande">Janeiro 2022 - Junho 2022</p>

    <h4>Atividades</h4>
    <ul class="xp-lista">
      <li>Distribuição de leads</li>
      <li>Designer gráfico e mídia</li>
      <li>Gestão de redes sociais</li>
      <li>Conteúdos interativos</li>
      <li>Engajamento e métricas</li>
    </ul>

    <h4>Ferramentas</h4>
    <div class="tags mt-4">
      <span>Photoshop</span><span>Design Gráfico</span>
      <span>Social Media</span><span>Análise de Dados</span>
    </div>
  `
};


/* =========================================================
   SISTEMA DE EXPERIÊNCIA — ANIMAÇÃO E TROCA
========================================================= */
const xpItems = document.querySelectorAll(".xp-item");
const xpContainer = document.getElementById("xp-detalhes");

xpContainer.innerHTML = detalhes.dukotech;
xpContainer.classList.add("show");

function animarLinhas() {
  [...xpContainer.children].forEach((el, i) => {
    el.classList.add("linha-animada");
    el.style.animationDelay = `${i * 0.05}s`;
  });
}

xpItems.forEach(item => {
  item.addEventListener("click", () => {
    document.querySelector(".xp-item.ativo")?.classList.remove("ativo");
    item.classList.add("ativo");

    xpContainer.classList.remove("show");

    setTimeout(() => {
      xpContainer.innerHTML = detalhes[item.dataset.xp];
      xpContainer.classList.add("show");
      animarLinhas();
    }, 200);
  });
});


/* =========================================================
   HABILIDADES — BASE DE DADOS
========================================================= */
const habilidadesData = {
  salesforce: [
    { nome: "Sales Cloud", nivel: 80, desc: "Configuração avançada" },
    { nome: "Service Cloud", nivel: 60, desc: "Console e automação" },
    { nome: "Marketing Cloud", nivel: 30, desc: "Jornadas e integração" },
    { nome: "Data Cloud", nivel: 10, desc: "Dados unificados" },
    { nome: "Einstein Bot", nivel: 99, desc: "Mais de 40 bots desenvolvidos" },
    { nome: "IAs Salesforce", nivel: 30, desc: "AgentForce e automação" },
    { nome: "LWC", nivel: 60, desc: "Componentes modernos" },
    { nome: "Apex", nivel: 70, desc: "Back-end Salesforce" },
    { nome: "Flows", nivel: 90, desc: "Processos complexos" },
    { nome: "Reports", nivel: 90, desc: "Dashboards analíticos" },
    { nome: "Digital Engagement", nivel: 80, desc: "Canais e atendimento" },
    { nome: "Arquitetura", nivel: 50, desc: "Modelagem Salesforce" },
    { nome: "SOQL", nivel: 80, desc: "Consultas avançadas" },
    { nome: "Integração", nivel: 80, desc: "REST e SOAP" }
  ],

  backend: [
    { nome: "Java", nivel: 80, desc: "Spring Boot e Quarkus" },
    { nome: "Node.js", nivel: 70, desc: "APIs e microserviços" },
    { nome: "PHP", nivel: 60, desc: "Sistemas e web" },
    { nome: "Python", nivel: 30, desc: "Scripts e automação" },
    { nome: "API Integration", nivel: 60, desc: "REST / SOAP" },
    { nome: "Microservices", nivel: 70, desc: "Arquitetura distribuída" },
    { nome: "Docker", nivel: 60, desc: "Containerização" },
    { nome: "JUnit", nivel: 50, desc: "Testes automatizados" }
  ],

  frontend: [
    { nome: "React", nivel: 30, desc: "Hooks e componentes" },
    { nome: "JavaScript", nivel: 60, desc: "ES6+ e DOM" },
    { nome: "HTML/CSS", nivel: 90, desc: "Semântica e responsivo" },
    { nome: "Bootstrap", nivel: 85, desc: "Layouts e UI" },
    { nome: "jQuery", nivel: 80, desc: "Manipulação DOM" },
    { nome: "Figma", nivel: 75, desc: "Prototipação" },
    { nome: "Responsive Design", nivel: 90, desc: "Mobile-first" },
    { nome: "UX/UI", nivel: 75, desc: "Experiência do usuário" }
  ],

  banco: [
    { nome: "MySQL", nivel: 60, desc: "Queries avançadas" },
    { nome: "MongoDB", nivel: 40, desc: "NoSQL e agregações" },
    { nome: "SQL", nivel: 50, desc: "Procedures e queries" },
    { nome: "Database Design", nivel: 30, desc: "Modelagem" },
    { nome: "Performance Tuning", nivel: 40, desc: "Otimização" }
  ],

  devops: [
    { nome: "Git/GitHub/Bitbucket", nivel: 90, desc: "Versionamento" },
    { nome: "CI/CD", nivel: 70, desc: "Pipelines e deploys" },
    { nome: "Scrum", nivel: 60, desc: "Metodologia ágil" },
    { nome: "Clean Code", nivel: 85, desc: "Boas práticas" },
    { nome: "SOLID", nivel: 70, desc: "Princípios" },
    { nome: "GitFlow", nivel: 85, desc: "Organização" },
    { nome: "Code Review", nivel: 85, desc: "Qualidade" }
  ]
};


/* =========================================================
   HABILIDADES — RENDERIZAÇÃO COM ANIMAÇÃO
========================================================= */
function getCorCategoria(cat) {
  return {
    salesforce: "linear-gradient(90deg, #2a6aee, #6fa8ff)",
    backend: "linear-gradient(90deg, #1BB253, #4dd97a)",
    frontend: "linear-gradient(90deg, #983BEE, #b56af7)",
    banco: "linear-gradient(90deg, #D99D06, #f0c94a)",
    devops: "linear-gradient(90deg, #E53535, #f56a6a)"
  }[cat] || "linear-gradient(90deg, #8a63f6, #b28cff)";
}

function renderHabilidades(categoria) {
  const container = document.getElementById("conteudo-habilidades");
  const cor = getCorCategoria(categoria);

  container.classList.remove("fade-in");
  container.classList.add("fade-out");

  setTimeout(() => {
    container.innerHTML = "";

    (habilidadesData[categoria] || []).forEach((skill, idx) => {
      const col = document.createElement("div");
      col.className = "col-md-6";

      const card = document.createElement("div");
      card.className = "skill-card";
      card.style.animationDelay = `${idx * 80}ms`;

      card.innerHTML = `
        <div class="skill-top">
          <span class="skill-name">${skill.nome}</span>
          <span class="skill-level">${skill.nivel}%</span>
        </div>
        <div class="progress">
          <div class="progress-bar"
               style="background:${cor};"
               aria-valuenow="${skill.nivel}"
               aria-valuemin="0"
               aria-valuemax="100"></div>
        </div>
        <p class="skill-desc">${skill.desc}</p>
      `;

      col.appendChild(card);
      container.appendChild(col);

      requestAnimationFrame(() => {
        card.classList.add("show");
        setTimeout(() => {
          card.querySelector(".progress-bar").style.width = `${skill.nivel}%`;
        }, 50);
      });
    });

    container.classList.remove("fade-out");
    container.classList.add("fade-in");
  }, 200);
}

document.addEventListener("DOMContentLoaded", () => {
  const botoes = document.querySelectorAll(".filtro-btn");

  botoes.forEach(btn => {
    btn.addEventListener("click", () => {
      botoes.forEach(b => b.classList.remove("ativo"));
      btn.classList.add("ativo");
      renderHabilidades(btn.dataset.categoria);
    });
  });

  renderHabilidades("salesforce");
});


/* =========================================================
   PROJETOS — PUZZLE ANIMADO
========================================================= */
const projetos = [
  "OFICIAL FARMA", "SEVEN", "H2", "ACR", "MACCHU-PICCHU BRASIL", "GOLDPLAT",
  "PAULA TORRES", "RENATA FRANÇA", "E-NUTRI", "QUADRACRED", "VPORTEC", "BRMOTORS",
  "SENHA - SEGURA", "VIAINVEST", "X9", "WW - CATALOG", "WW - REGISTER", "GRAU E CORTE",
  "BOLAO RIO PARDO", "BR MOTOS", "MELVER", "TROUSSEAU", "SEGUE FINANCEIRA", "APS",
  "PRIME", "CASA DE APOSTA", "FF SOLUTIONS", "BANCO BV"
];

const cores = [
  "var(--grad-piece-1)", "var(--grad-piece-2)",
  "var(--grad-piece-3)", "var(--grad-piece-4)",
  "var(--grad-piece-5)"
];

const containerProjetos = document.getElementById("projetos-container");

projetos.forEach((nome, idx) => {
  const div = document.createElement("div");

  div.setAttribute("data-aos", "fade-up");
  div.setAttribute("data-aos-delay", `${idx * 50}`);

  div.classList.add("col-auto", "puzzle-piece", "hidden");
  div.style.background = cores[idx % cores.length];

  div.innerHTML = `<div class="puzzle-content"><h5>${nome}</h5></div>`;

  containerProjetos.appendChild(div);
});

document.querySelectorAll(".puzzle-piece").forEach(piece => {
  piece.addEventListener("mouseenter", () => {
    piece.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
    piece.style.transform = "scale(1.1)";
    piece.style.boxShadow = "0 8px 25px rgba(0,0,0,0.4)";
  });

  piece.addEventListener("mouseleave", () => {
    piece.style.transform = "scale(1)";
    piece.style.boxShadow = "0 4px 15px rgba(0,0,0,0.2)";
  });
});
