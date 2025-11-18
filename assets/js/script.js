/* =========================================================
   TRANSLATIONS + MAIN SCRIPT
   PT (padrão) / EN (literal)
========================================================= */

/* =========================================================
   TRANSLATIONS OBJECT (TODAS AS CHAVES)
   - pt: textos originais em português
   - en: tradução literal para inglês
========================================================= */
const translations = {
  pt: {
    static: {
      nav_sobre: "Sobre",
      nav_experiencia: "Experiência",
      nav_projetos: "Projetos",
      nav_skills: "Skills",

      hero_nome: "Mateus Ferian",
      hero_local: "📍 São Paulo, Brasil",
      hero_descricao: `Especialista em Salesforce com mais de <strong class="sobre-cargo-1">40 projetos</strong> realizados,
        desenvolvedor Full-Stack apaixonado por criar soluções inovadoras e de alta qualidade.
        Experiência em <strong class="sobre-cargo-1">Salesforce</strong>, <strong class="sobre-cargo-1">Back-End</strong>
        <strong class="sobre-cargo-3">Front-End</strong>, <strong class="sobre-cargo-2"> Banco de Dados</strong> e
        arquiteturas robustas.`,
      btn_explore: "Explore Meu Trabalho",

      sobre_titulo: "Sobre Mim",
      sobre_card: `
        <h5><strong class="titulo">Perfil Pessoal</strong></h5>
        <p>
          Olá, tudo bem? Meu nome é
          <strong class="sobre-nome-pessoa">Mateus Ferian</strong>.
          Acredito que, além de atender às demandas, é fundamental garantir que todas as entregas sejam realizadas
          com
          <strong class="sobre-texto-total-qualidade">total qualidade!</strong>
        </p>
        <ul>
          <li>💼 <strong class="sobre-cargo-1">Desenvolvedor Salesforce Sênior</strong> com experiencias em Sales
            Cloud, Service Cloud, Marketing Cloud, Data Cloud</li>
          <li>🚀 <strong class="sobre-cargo-2">Full-Stack Developer</strong> especializado em Java, Node.js, React,
            Banco de dados</li>
          <li>🌍 Experiência em <strong class="sobre-cargo-3">múltiplos setores</strong>: e-commerce, saúde,
            bancário, mineração e telecomunicações.</li>
        </ul>
      `,

      btn_curriculo: "🔎 Visualizar Currículo",
      stat_projetos: "Projetos Concluídos",
      stat_bots: "Bots de atendimento Criados",
      stat_anos: "Anos de Experiência",
      stat_setores: "Setores Atendidos",

      filosofia_titulo: "Filosofia de Trabalho",
      filosofia_text: `“Além do desenvolvimento e configurações, também atuo na elaboração de
          <span class="filosofia-1">arquiteturas para o CRM</span> e
          <span class="filosofia-2">padronização de desenvolvimentos</span>,
          transformando regras de negócio em soluções Salesforce eficientes e escaláveis.”`,

      experiencia_titulo: "Experiência Profissional",
      xp_datum_title: "Desenvolvedor Salesforce Senior",
      xp_datum_company: "Datum",
      xp_datum_dates: "Maio de 2025 - Atual",

      xp_dukotech_title: "Desenvolvedor Salesforce - Referencia Tecnica",
      xp_dukotech_company: "Duko Tecnologia",
      xp_dukotech_dates: "Setembro 2023 - Maio de 2025",

      xp_consulcl_title: "Desenvolvedor Full Stack",
      xp_consulcl_company: "Consulter – Consultoria",
      xp_consulcl_dates: "Abril 2024 - Maio 2024",

      xp_gerador_title: "Desenvolvedor Back-End",
      xp_gerador_company: "Gerador de Devs",
      xp_gerador_dates: "Junho 2022 - Agosto 2023",

      xp_garten_title: "Designer Digital",
      xp_garten_company: "Garten Seminovos",
      xp_garten_dates: "Janeiro 2022 - Junho 2022",

      projetos_titulo: "Projetos trabalhados",

      habilidades_titulo: "Habilidades Técnicas",
      habilidades_subtitulo: "Domínio em tecnologias modernas com foco em qualidade, performance e boas práticas de desenvolvimento.",

      filtro_salesforce: "Salesforce",
      filtro_backend: "Back-End",
      filtro_frontend: "Front-End",
      filtro_banco: "Banco de Dados",
      filtro_devops: "DevOps & Metodologias",

      certificacoes: "Certificações",
      certificacoes_valor: "Em Progresso",
      especializacao: "Especialização",
      especializacao_valor: "☁️ Projetos Salesforce",
      especializacao_small: "Mais de 40 Projetos desenvolvidos",
      metodologias: "Metodologias",
      metodologias_valor: "Ágil",
      metodologias_small: "Scrum, Kanban, XP",

      footer_ano: "2025 - Mateus Ferian",
      footer_text: "Tudo é construido com esforço e determinação"
    },

    dynamic: {
      // título animado (arranjo)
      tituloAnimado: ["Desenvolvedor Salesforce", "Desenvolvedor Full Stack"],

      // detalhes (HTML strings) - mesmas chaves: datum, dukotech, consulcl, gerador, garten
      detalhes: {
        datum: `
          <span class="badge-nivel">Senior</span>
          <h3>Desenvolvedor Salesforce Senior</h3>
          <p class="empresa">Datum • Consultoria</p>
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
      },

      // habilidadesData (pt labels/descs)
      habilidadesData: {
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
      },

      projetos: [
        "OFICIAL FARMA", "SEVEN", "H2", "ACR", "MACCHU-PICCHU BRASIL", "GOLDPLAT",
        "PAULA TORRES", "RENATA FRANÇA", "E-NUTRI", "QUADRACRED", "VPORTEC", "BRMOTORS",
        "SENHA - SEGURA", "VIAINVEST", "X9", "WW - CATALOG", "WW - REGISTER", "GRAU E CORTE",
        "BOLAO RIO PARDO", "BR MOTOS", "MELVER", "TROUSSEAU", "SEGUE FINANCEIRA", "APS",
        "PRIME", "CASA DE APOSTA", "FF SOLUTIONS", "BANCO BV"
      ]
    }
  },

  en: {
    static: {
      nav_sobre: "About",
      nav_experiencia: "Experience",
      nav_projetos: "Projects",
      nav_skills: "Skills",

      hero_nome: "Mateus Ferian",
      hero_local: "📍 São Paulo, Brazil",
      hero_descricao: `Specialist in Salesforce with more than <strong class="sobre-cargo-1">40 projects</strong> completed,
        Full-Stack developer passionate about creating innovative and high-quality solutions.
        Experience in <strong class="sobre-cargo-1">Salesforce</strong>, <strong class="sobre-cargo-1">Back-End</strong>
        <strong class="sobre-cargo-3">Front-End</strong>, <strong class="sobre-cargo-2"> Database</strong> and
        robust architectures.`,
      btn_explore: "Explore My Work",

      sobre_titulo: "About Me",
      sobre_card: `
        <h5><strong class="titulo">Personal Profile</strong></h5>
        <p>
          Hello, how are you? My name is
          <strong class="sobre-nome-pessoa">Mateus Ferian</strong>.
          I believe that, besides meeting demands, it is essential to ensure that all deliveries are carried out
          with
          <strong class="sobre-texto-total-qualidade">total quality!</strong>
        </p>
        <ul>
          <li>💼 <strong class="sobre-cargo-1">Senior Salesforce Developer</strong> with experience in Sales
            Cloud, Service Cloud, Marketing Cloud, Data Cloud</li>
          <li>🚀 <strong class="sobre-cargo-2">Full-Stack Developer</strong> specialized in Java, Node.js, React,
            Databases</li>
          <li>🌍 Experience in <strong class="sobre-cargo-3">multiple sectors</strong>: e-commerce, health,
            banking, mining and telecommunications.</li>
        </ul>
      `,

      btn_curriculo: "🔎 View Resume",
      stat_projetos: "Projects Completed",
      stat_bots: "Customer Service Bots Created",
      stat_anos: "Years of Experience",
      stat_setores: "Sectors Served",

      filosofia_titulo: "Work Philosophy",
      filosofia_text: `“Besides development and configurations, I also work on designing
          <span class="filosofia-1">architectures for CRM</span> and
          <span class="filosofia-2">standardization of developments</span>,
          transforming business rules into efficient and scalable Salesforce solutions.”`,

      experiencia_titulo: "Professional Experience",
      xp_datum_title: "Senior Salesforce Developer",
      xp_datum_company: "Datum",
      xp_datum_dates: "May 2025 - Present",

      xp_dukotech_title: "Salesforce Developer - Technical Reference",
      xp_dukotech_company: "Duko Tecnologia",
      xp_dukotech_dates: "September 2023 - May 2025",

      xp_consulcl_title: "Full Stack Developer",
      xp_consulcl_company: "Consulter – Consulting",
      xp_consulcl_dates: "April 2024 - May 2024",

      xp_gerador_title: "Back-End Developer",
      xp_gerador_company: "Gerador de Devs",
      xp_gerador_dates: "June 2022 - August 2023",

      xp_garten_title: "Digital Designer",
      xp_garten_company: "Garten Seminovos",
      xp_garten_dates: "January 2022 - June 2022",

      projetos_titulo: "Projects Worked On",

      habilidades_titulo: "Technical Skills",
      habilidades_subtitulo: "Mastery of modern technologies with a focus on quality, performance and development best practices.",

      filtro_salesforce: "Salesforce",
      filtro_backend: "Back-End",
      filtro_frontend: "Front-End",
      filtro_banco: "Database",
      filtro_devops: "DevOps & Methodologies",

      certificacoes: "Certifications",
      certificacoes_valor: "In Progress",
      especializacao: "Specialization",
      especializacao_valor: "☁️ Salesforce Projects",
      especializacao_small: "More than 40 Projects developed",
      metodologias: "Methodologies",
      metodologias_valor: "Agile",
      metodologias_small: "Scrum, Kanban, XP",

      footer_ano: "2025 - Mateus Ferian",
      footer_text: "Everything is built with effort and determination"
    },

    dynamic: {
      tituloAnimado: ["Salesforce Developer", "Full Stack Developer"],

      detalhes: {
        datum: `
          <span class="badge-nivel">Senior</span>
          <h3>Senior Salesforce Developer</h3>
          <p class="empresa">Datum • Consulting</p>
          <p class="xp-data-grande">May 2025 - Present</p>

          <p class="promocao">🎉 Promoted to Senior after 5 months</p>

          <h4>Main Achievements</h4>
          <ul class="xp-lista">
            <li>Construction of Einstein Bots</li>
            <li>Development in Apex, LWC, flows</li>
            <li>Integrations with external tools</li>
            <li>CI/CD for versioning and deployment</li>
            <li>Jenkins deployment pipeline</li>
            <li>Sales Cloud</li>
            <li>Service Cloud</li>
            <li>Work with Technical Solution in Marketing Cloud</li>
            <li>Digital Engagement</li>
            <li>Native Configurations</li>
            <li>Experience in service channel</li>
          </ul>

          <h4>Technologies Used</h4>
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
          <h3>Salesforce Developer - Technical Reference</h3>
          <p class="empresa">Duko Tecnologia • Consulting</p>
          <p class="xp-data-grande">September 2023 - May 2025</p>

          <p class="promocao">🎉 Promoted to Mid-level after 6 months</p>

          <h4>Activities</h4>
          <ul class="xp-lista">
            <li>Delivery of more than 40 Projects</li>
            <li>Development in Apex, LWC and advanced configurations</li>
            <li>Integrations with external tools</li>
            <li>CI/CD for versioning and deployment</li>
            <li>Trainings on best practices in Einstein Bot</li>
            <li>Work in Sales Cloud, Service Cloud, Maps and Cadence</li>
            <li>Experience in various sectors</li>
            <li>Trainings for developers</li>
          </ul>

          <h4>Technologies Used</h4>
          <div class="tags mt-4">
            <span>Salesforce</span><span>Apex</span><span>LWC</span><span>Einstein Bot</span>
            <span>Node.js</span><span>Java</span><span>CI/CD</span>
          </div>
        `,

        consulcl: `
          <h3>Full Stack Developer</h3>
          <span class="badge-nivel">Mid-level Freelancer</span>
          <p class="empresa">Consulcl • Consulting</p>
          <p class="xp-data-grande">April 2024 - May 2024</p>

          <p class="promocao">Complete system project</p>

          <h4>Activities</h4>
          <ul class="xp-lista">
            <li>Full development of mega-sena system</li>
            <li>Efficient data modeling</li>
            <li>User experience and clean code</li>
            <li>Full features implemented</li>
          </ul>

          <h4>Technologies</h4>
          <div class="tags mt-4">
            <span>PHP</span><span>JavaScript</span><span>HTML</span>
            <span>CSS</span><span>MySQL</span>
          </div>
        `,

        gerador: `
          <h3>Back-End Developer</h3>
          <span class="badge-nivel">Mid-level</span>
          <p class="empresa">Gerador de Devs • Consulting</p>
          <p class="xp-data-grande">June 2022 - August 2023</p>

          <p class="promocao">Microservices architecture</p>

          <h4>Activities</h4>
          <ul class="xp-lista">
            <li>RESTful APIs with Spring Boot and Quarkus</li>
            <li>Scalable microservices</li>
            <li>MongoDB and MySQL</li>
            <li>Swagger for documentation</li>
            <li>Automated tests with JUnit</li>
            <li>Docker for containerization</li>
            <li>Scrum and Gitflow</li>
          </ul>

          <h4>Technologies</h4>
          <div class="tags mt-4">
            <span>Java</span><span>Node.js</span><span>Spring Boot</span>
            <span>Quarkus</span><span>MongoDB</span><span>MySQL</span>
            <span>Docker</span><span>JUnit</span>
          </div>
        `,

        garten: `
          <h3>Digital Designer</h3>
          <span class="badge-nivel">Mid-level</span>
          <p class="empresa">Garten Seminovos</p>
          <p class="xp-data-grande">January 2022 - June 2022</p>

          <h4>Activities</h4>
          <ul class="xp-lista">
            <li>Lead distribution</li>
            <li>Graphic design and media</li>
            <li>Social media management</li>
            <li>Interactive content</li>
            <li>Engagement and metrics</li>
          </ul>

          <h4>Tools</h4>
          <div class="tags mt-4">
            <span>Photoshop</span><span>Graphic Design</span>
            <span>Social Media</span><span>Data Analysis</span>
          </div>
        `
      },

      habilidadesData: {
        salesforce: [
          { nome: "Sales Cloud", nivel: 80, desc: "Advanced configuration" },
          { nome: "Service Cloud", nivel: 60, desc: "Console and automation" },
          { nome: "Marketing Cloud", nivel: 30, desc: "Journeys and integration" },
          { nome: "Data Cloud", nivel: 10, desc: "Unified data" },
          { nome: "Einstein Bot", nivel: 99, desc: "More than 40 bots developed" },
          { nome: "Salesforce AIs", nivel: 30, desc: "AgentForce and automation" },
          { nome: "LWC", nivel: 60, desc: "Modern components" },
          { nome: "Apex", nivel: 70, desc: "Salesforce back-end" },
          { nome: "Flows", nivel: 90, desc: "Complex processes" },
          { nome: "Reports", nivel: 90, desc: "Analytical dashboards" },
          { nome: "Digital Engagement", nivel: 80, desc: "Channels and service" },
          { nome: "Architecture", nivel: 50, desc: "Salesforce modeling" },
          { nome: "SOQL", nivel: 80, desc: "Advanced queries" },
          { nome: "Integration", nivel: 80, desc: "REST and SOAP" }
        ],

        backend: [
          { nome: "Java", nivel: 80, desc: "Spring Boot and Quarkus" },
          { nome: "Node.js", nivel: 70, desc: "APIs and microservices" },
          { nome: "PHP", nivel: 60, desc: "Systems and web" },
          { nome: "Python", nivel: 30, desc: "Scripts and automation" },
          { nome: "API Integration", nivel: 60, desc: "REST / SOAP" },
          { nome: "Microservices", nivel: 70, desc: "Distributed architecture" },
          { nome: "Docker", nivel: 60, desc: "Containerization" },
          { nome: "JUnit", nivel: 50, desc: "Automated tests" }
        ],

        frontend: [
          { nome: "React", nivel: 30, desc: "Hooks and components" },
          { nome: "JavaScript", nivel: 60, desc: "ES6+ and DOM" },
          { nome: "HTML/CSS", nivel: 90, desc: "Semantics and responsive" },
          { nome: "Bootstrap", nivel: 85, desc: "Layouts and UI" },
          { nome: "jQuery", nivel: 80, desc: "DOM manipulation" },
          { nome: "Figma", nivel: 75, desc: "Prototyping" },
          { nome: "Responsive Design", nivel: 90, desc: "Mobile-first" },
          { nome: "UX/UI", nivel: 75, desc: "User experience" }
        ],

        banco: [
          { nome: "MySQL", nivel: 60, desc: "Advanced queries" },
          { nome: "MongoDB", nivel: 40, desc: "NoSQL and aggregations" },
          { nome: "SQL", nivel: 50, desc: "Procedures and queries" },
          { nome: "Database Design", nivel: 30, desc: "Modeling" },
          { nome: "Performance Tuning", nivel: 40, desc: "Optimization" }
        ],

        devops: [
          { nome: "Git/GitHub/Bitbucket", nivel: 90, desc: "Version control" },
          { nome: "CI/CD", nivel: 70, desc: "Pipelines and deployments" },
          { nome: "Scrum", nivel: 60, desc: "Agile methodology" },
          { nome: "Clean Code", nivel: 85, desc: "Best practices" },
          { nome: "SOLID", nivel: 70, desc: "Principles" },
          { nome: "GitFlow", nivel: 85, desc: "Organization" },
          { nome: "Code Review", nivel: 85, desc: "Quality" }
        ]
      },

      // projetos mantidos (nomes próprios)
      projetos: [
        "OFICIAL FARMA", "SEVEN", "H2", "ACR", "MACCHU-PICCHU BRASIL", "GOLDPLAT",
        "PAULA TORRES", "RENATA FRANÇA", "E-NUTRI", "QUADRACRED", "VPORTEC", "BRMOTORS",
        "SENHA - SEGURA", "VIAINVEST", "X9", "WW - CATALOG", "WW - REGISTER", "GRAU E CORTE",
        "BOLAO RIO PARDO", "BR MOTOS", "MELVER", "TROUSSEAU", "SEGUE FINANCEIRA", "APS",
        "PRIME", "CASA DE APOSTA", "FF SOLUTIONS", "BANCO BV"
      ]
    }
  }
};

/* =========================================================
   UTILITÁRIOS DE I18N
========================================================= */
let currentLang = localStorage.getItem("idioma") || "pt";

// aplica textos estáticos (HTML data-i18n)
function applyStaticTranslations(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const val = translations[lang]?.static?.[key];
    if (val !== undefined) {
      // usar innerHTML para permitir tags (<strong>) nas strings
      el.innerHTML = val;
    }
  });

  // marcar botões de idioma (ativo)
  document.querySelectorAll(".idiomas .btn-lang").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  // ajustar atributo lang do html
  document.documentElement.lang = (lang === "pt") ? "pt-BR" : "en";
}

// carrega dados dinâmicos (substitui detalhes, habilidadesData, projetos, titulo animado)
let dynamicData = {
  tituloAnimado: [],
  detalhes: {},
  habilidadesData: {},
  projetos: []
};

function loadDynamicData(lang) {
  const dyn = translations[lang].dynamic;
  dynamicData.tituloAnimado = dyn.tituloAnimado.slice();
  dynamicData.detalhes = JSON.parse(JSON.stringify(dyn.detalhes)); // cópia
  dynamicData.habilidadesData = JSON.parse(JSON.stringify(dyn.habilidadesData));
  dynamicData.projetos = dyn.projetos.slice();
}

/* =========================================================
   PARTICLES JS (mantido)
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
   TÍTULO ANIMADO (usa dynamicData.tituloAnimado)
========================================================= */
let tituloInterval;
let tituloIndex = 0;

function startTituloAnimado() {
  const tituloEl = document.getElementById("titulo-animado");
  if (!tituloEl) return;

  // limpar intervalo anterior
  if (tituloInterval) clearInterval(tituloInterval);
  tituloIndex = 0;
  tituloEl.textContent = dynamicData.tituloAnimado[tituloIndex] || "";

  tituloInterval = setInterval(() => {
    tituloEl.classList.add("bounce");
    setTimeout(() => {
      tituloIndex = (tituloIndex + 1) % dynamicData.tituloAnimado.length;
      tituloEl.textContent = dynamicData.tituloAnimado[tituloIndex];
    }, 300);

    setTimeout(() => {
      tituloEl.classList.remove("bounce");
    }, 600);
  }, 2000);
}

/* =========================================================
   DADOS DINÂMICOS ORIGINAIS (serão substituídos por loadDynamicData)
   — mas declarações abaixo mantidas para inicialização
========================================================= */
// declararemos xpItems, xpContainer etc após o DOM carregar

/* =========================================================
   RENDERIZAÇÃO DE EXPERIÊNCIAS (usa dynamicData.detalhes)
========================================================= */
function setupXpSystem() {
  const xpItems = document.querySelectorAll(".xp-item");
  const xpContainer = document.getElementById("xp-detalhes");
  if (!xpContainer) return;

  // inicializar com dukotech (mesma escolha original)
  xpContainer.innerHTML = dynamicData.detalhes.dukotech || "";
  xpContainer.classList.add("show");
  animarLinhas();

  // configurar listeners (reutilizáveis)
  xpItems.forEach(item => {
    item.removeEventListener("click", item._xpHandler); // remove se existente
    const handler = () => {
      document.querySelector(".xp-item.ativo")?.classList.remove("ativo");
      item.classList.add("ativo");

      xpContainer.classList.remove("show");

      setTimeout(() => {
        const key = item.dataset.xp;
        xpContainer.innerHTML = dynamicData.detalhes[key] || "";
        xpContainer.classList.add("show");
        animarLinhas();
      }, 200);
    };
    item._xpHandler = handler;
    item.addEventListener("click", handler);
  });
}

function animarLinhas() {
  const xpContainer = document.getElementById("xp-detalhes");
  if (!xpContainer) return;
  [...xpContainer.children].forEach((el, i) => {
    el.classList.add("linha-animada");
    el.style.animationDelay = `${i * 0.05}s`;
  });
}

/* =========================================================
   HABILIDADES — renderHabilidades (usa dynamicData.habilidadesData)
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
  const habilidadesSource = (dynamicData.habilidadesData && dynamicData.habilidadesData[categoria]) || [];

  container.classList.remove("fade-in");
  container.classList.add("fade-out");

  setTimeout(() => {
    container.innerHTML = "";

    habilidadesSource.forEach((skill, idx) => {
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

/* =========================================================
   PROJETOS — renderização (usa dynamicData.projetos)
========================================================= */
function renderProjetos() {
  const containerProjetos = document.getElementById("projetos-container");
  if (!containerProjetos) return;

  containerProjetos.innerHTML = "";

  const cores = [
    "var(--grad-piece-1)", "var(--grad-piece-2)",
    "var(--grad-piece-3)", "var(--grad-piece-4)",
    "var(--grad-piece-5)"
  ];

  dynamicData.projetos.forEach((nome, idx) => {
    const div = document.createElement("div");

    div.setAttribute("data-aos", "fade-up");
    div.setAttribute("data-aos-delay", `${idx * 50}`);

    div.classList.add("col-auto", "puzzle-piece", "hidden");
    div.style.background = cores[idx % cores.length];

    div.innerHTML = `<div class="puzzle-content"><h5>${nome}</h5></div>`;

    containerProjetos.appendChild(div);
  });

  // re-aplicar hover effects
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
}

/* =========================================================
   INICIALIZAÇÃO GERAL - aplica idioma e inicia tudo
========================================================= */
function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("idioma", lang);

  // 1) aplicar textos estáticos
  applyStaticTranslations(lang);

  // 2) carregar dados dinâmicos
  loadDynamicData(lang);

  // 3) iniciar título animado com os textos traduzidos
  startTituloAnimado();

  // 4) re-render dinâmicos
  setupXpSystem();
  renderProjetos();

  // 5) re-render habilidades (manter categoria ativo ou padrão 'salesforce')
  const activeFiltro = document.querySelector(".filtro-btn.ativo");
  const categoria = activeFiltro ? activeFiltro.dataset.categoria : "salesforce";
  renderHabilidades(categoria);
}

/* =========================================================
   LISTENERS (botões de idioma e filtros)
========================================================= */
document.addEventListener("DOMContentLoaded", () => {

  const saved = localStorage.getItem("idioma") || "pt";
  applyLanguage(saved);

  document.querySelectorAll(".idiomas .btn-lang").forEach(btn => {
    btn.addEventListener("click", () => {
      const lang = btn.dataset.lang;
      applyLanguage(lang);
    });
  });

  const botoes = document.querySelectorAll(".filtro-btn");
  botoes.forEach(btn => {
    btn.addEventListener("click", () => {
      botoes.forEach(b => b.classList.remove("ativo"));
      btn.classList.add("ativo");
      renderHabilidades(btn.dataset.categoria);
    });
  });

});

