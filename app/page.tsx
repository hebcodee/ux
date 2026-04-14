"use client";

import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaCode } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { IoLayersOutline } from "react-icons/io5";
import { SiSimpleanalytics } from "react-icons/si";

const metrics = [ 
  ["4+", "Anos de experiencia"],
  ["100+", "Projetos entregues"],
  ["ERP · PDV", "Sistemas complexos"],
  ["Impacto", "Conversao · Handoff"],
];

const projects = [
  {
    eyebrow: "01 / Giraffas",
    year: "2025",
    title: "Redesign da jornada de autoatendimento",
    description:
      "Redesenho do ecossistema de totens para rede de fast food, otimizando checkout e reduzindo carga cognitiva na escolha de itens.",
    tags: ["Kiosk", "Self-service", "Efficiency"],
    image:
      "https://res.cloudinary.com/ddhvxva1e/image/upload/v1776137380/capa-giraffas-RfXgYNDT_ihxace.jpg",
    caseImage:
      "https://res.cloudinary.com/ddhvxva1e/image/upload/v1776137380/Girafas-project_lzihg0.png",
  },
  {
    eyebrow: "02 / Burger King",
    year: "2024",
    title: "Arquitetura de informacao para fluxos de alta demanda",
    description:
      "Reestruturação do fluxo de pedido e pagamento, com foco em reduzir tempo médio de atendimento e abrir espaço para upsell contextual.",
    tags: ["Redesign", "PDV", "Self-service"],
    image:
      "https://res.cloudinary.com/ddhvxva1e/image/upload/v1776137380/capa-burger-king-Db8EE-gO_fj1dwf.jpg",
    caseImage:
      "https://res.cloudinary.com/ddhvxva1e/image/upload/v1776137380/bk-project_d4nugd.png",
  },
  {
    eyebrow: "03 / House Craft Burger",
    year: "2024",
    title: "Experiencia mobile orientada a conversao",
    description:
      "Interface para acelerar pedidos em dispositivos móveis, removendo fricções entre pagamento, preparo e integração com cozinha.",
    tags: ["Mobile", "UX writing", "B2C"],
    image:
      "https://res.cloudinary.com/ddhvxva1e/image/upload/v1776137381/capa-cardapio-mobile-DKd6_sba_lz2wzm.jpg",
  },
  {
    eyebrow: "04 / Banco Safra",
    year: "2023",
    title: "Redesign de interface para Super App Fintech",
    description:
      "Evolução de identidade digital bancária com foco em acessibilidade, clareza para dados financeiros e confiança do usuário.",
    tags: ["Fintech", "Super app", "Scalability"],
    image:
      "https://res.cloudinary.com/ddhvxva1e/image/upload/v1776137380/capa-safra-CG_SkeTg_lu6n9w.jpg",
    caseImage:
      "https://res.cloudinary.com/ddhvxva1e/image/upload/v1776137380/safra-project_n3z8gt.png",
  },
];

const process = [
  {
    title: "Descoberta & Contexto",
    description:
      "Analise de dados de uso, shadowing em ambiente operacional e imersao em regras de negocio complexas.",
    tags: ["User interviews", "Heatmaps", "Flow mapping", "Stakeholder alignment"],
  },
  {
    title: "Arquitetura & Decisao",
    description:
      "Hierarquia de informacao, priorizacao de funcionalidades e decisao documentada com criterio de produto.",
    tags: ["Card sorting", "Wireframes anotados", "Matriz de prioridade"],
  },
  {
    title: "Prototipagem & Validacao",
    description:
      "Prototipos funcionais testados com usuarios reais para iterar o produto com evidencias.",
    tags: ["Figma prototype", "Teste de usabilidade", "Heuristica Nielsen"],
  },
  {
    title: "Handoff & Acompanhamento",
    description:
      "Documentacao de componentes, estados de erro e tokens, acompanhando desenvolvimento e QA.",
    tags: ["Design System", "Design Tokens", "Dev Mode", "QA checklist"],
  },
];

const stack = [
  {
    label: "Discovery & Design",
    title: "Entendo o problema antes da interface.",
    text: "Valido hipoteses, mapeio jornadas e conecto cada decisao a uma dor real de negocio.",
    tags: ["Discovery & Research", "Jobs To Be Done", "Testes de Usabilidade", "Figma & FigJam"],
    icon: CiSearch,
  },
  {
    label: "Sistema & Escala",
    title: "Interfaces consistentes prontas para producao.",
    text: "Organizo componentes, estados, padroes e documentacao para reduzir duvida no desenvolvimento.",
    tags: ["Design System", "Tokens de Design", "Documentacao Tecnica"],
    icon: IoLayersOutline,
  },
  {
    label: "Produto & Metricas",
    title: "Decisoes orientadas por impacto real.",
    text: "Defino o que sera medido antes do layout e acompanho o pos-deploy para iterar com clareza.",
    tags: ["Discovery continuo", "Metricas de UX", "Mapeamento de Fluxos", "Experimentacao"],
    icon: SiSimpleanalytics,
  },
  {
    label: "Contexto Tecnico",
    title: "UX alinhado com a realidade tecnica.",
    text: "Conheco restricoes de front-end e APIs para desenhar solucoes viaveis sem perder qualidade.",
    tags: ["HTML / CSS", "REST APIs", "Git", "Limitacoes tecnicas"],
    icon: FaCode,
  },
];

const contactLinks = [
  ["Email", "herberth.ferreira6@gmail.com", "mailto:herberth.ferreira6@gmail.com"],
  ["LinkedIn", "linkedin.com/in/herberth-guimaraes", "https://linkedin.com/in/herberth-guimaraes"],
  [
    "WhatsApp",
    "(83) 99985-3630",
    "https://wa.me/5583999853630?text=Ola%2C%20vim%20pelo%20seu%20portfolio%20e%20gostaria%20de%20conversar.",
  ],
];

export default function Home() {
  const [activeProject, setActiveProject] = useState<(typeof projects)[number] | null>(null);

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Herberth Guimaraes">
          <img src="/favicon.ico" alt="" />
        </a>
        <nav className="nav-links" aria-label="Navegacao principal">
          <a href="#sobre">Sobre</a>
          <a href="#projetos">Projetos</a>
          <a href="#processo">Processo</a>
          <a href="#stack">Stack</a>
        </nav>
        <a className="button button-small" href="#contato">
        <MdOutlineEmail className="button-icon" />
          Fale comigo
        </a>
      </header>

      <main id="inicio">
        <section className="hero section">
          <div className="container hero-grid">
            <div className="hero-visual" aria-hidden="true">
              <img
                src="https://res.cloudinary.com/ddhvxva1e/image/upload/v1776136518/profile_ptrx3w.png"
                alt=""
              />
            </div>

            <div className="hero-copy">
              <p className="section-label hero-label">
                <span>Product Designer</span>
                <span>· Complexidade operacional transformada em eficiencia.</span>
              </p>
              <h1>
                Sistemas que escalam, <span>reduzem erros e aceleram decisoes.</span>
              </h1>
              <p className="hero-text">
                4 anos projetando para ERP, PDV e Fintech. Traduzo regras de negocio
                complexas em jornadas de alto desempenho, cobrindo todo o ciclo do discovery
                ao handoff tecnico.
              </p>
              <div className="hero-actions">
                <a className="button" href="#projetos">
                  Ver Projetos
                </a>
                <a className="button button-secondary" href="https://linkedin.com/in/herberth-guimaraes">
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="metrics container" aria-label="Indicadores">
          {metrics.map(([value, label]) => (
            <article className="metric-card" key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </article>
          ))}
        </section>

        <section id="sobre" className="section about-section">
          <div className="container about-grid">
            <aside className="about-aside" aria-label="Experiencia e especialidades">
              <div className="about-aside-group">
                <p>Experiencia</p>
                <a href="#sobre">Saurus Software</a>
                <a href="#sobre">SafraPay</a>
                <a href="#sobre">Cartao de TODOS</a>
                <a href="#sobre">Korpay</a>
              </div>

              <div className="about-aside-group">
                <p>Especialidades</p>
                <span>Autoatendimento</span>
                <span>ERP · PDV</span>
                <span>SaaS</span>
                <span>B2B · B2C</span>
              </div>

              <div className="about-aside-foot">
                <span>Brasil</span>
                <span>CLT · PJ · Freelance</span>
                <span>Sistemas Complexos</span>
              </div>
            </aside>

            <div className="about-content">
              <h2>
                Nao projeto telas. <span>Projeto decisoes.</span>
              </h2>
              <p>
                Atuo no design de sistemas complexos voltados para operação e escala há 4
                anos, com passagens por empresas como Saurus, SafraPay e Cartão de TODOS.
                Meu foco vai além da interface: é entender o ecossistema de negócio para
                reduzir fricções e transformar fluxos burocráticos em experiências eficientes.
              </p>
              <p>
                Trabalho próximo de desenvolvedores, QA e stakeholders, da descoberta ao
                handoff. Conheço os limites técnicos do produto e entrego documentação clara,
                fluxos estruturados e decisões orientadas à implementação.
              </p>
              <p>
                Minha experiência inclui o redesign de ERPs legados, fluxos de pagamento
                (NFC e SoftPOS) e sistemas operacionais críticos de alto volume. O objetivo é
                sempre o mesmo: menos cliques, menos erro e mais resultado.
              </p>
              <div className="pill-list">
                {["Visao de Produto", "Mapeamento de Fluxos", "Design System", "UX para ERP", "Handoff para Dev", "Validacao com QA", "Metricas de UX"].map(
                  (item) => (
                    <span className="pill" key={item}>
                      {item}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </section>

        <section id="projetos" className="section section-muted">
          <div className="container">
            <div className="section-heading">
              <p className="section-label">Projetos</p>
              <h2>Projetos em destaque.</h2>
              <p>Casos reais em sistemas complexos, ERP, PDV, fintech e autoatendimento.</p>
            </div>
            <div className="project-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.eyebrow}>
                  <img src={project.image} alt="" />
                  <div className="project-content">
                    <div className="project-meta">
                      <span>{project.eyebrow}</span>
                      <span>{project.year}</span>
                    </div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="pill-list">
                      {project.tags.map((tag) => (
                        <span className="pill" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    {project.caseImage ? (
                      <button className="case-link" type="button" onClick={() => setActiveProject(project)}>
                        Ver projeto
                      </button>
                    ) : (
                      <span className="case-muted">Case sob NDA</span>
                    )}
                  </div>
                </article>
              ))}
            </div>
            <p className="note">Cases com prototipos disponiveis sob NDA mediante solicitacao.</p>
          </div>
        </section>

        <section id="processo" className="section process-section">
          <div className="container process-layout">
            <div className="process-intro">
              <p className="section-label">Processo & Metodo</p>
              <h2>
                Do problema ao <span>deploy.</span>
              </h2>
              <p>
                Processo adaptável ao contexto: mais lean para validações rápidas, mais
                estruturado para sistemas críticos.
              </p>
            </div>
            <div className="process-list">
              {process.map((step, index) => (
                <article className="process-step" key={step.title}>
                  <span className="step-number">{String(index + 1).padStart(2, "0")}</span>
                  <div className="process-card">
                    <span className="process-ghost-number" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                    <div className="pill-list">
                      {step.tags.map((tag) => (
                        <span className="pill" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="stack" className="section stack-section">
          <div className="container">
            <div className="stack-head">
              <div>
                <p className="section-label">Stack & Diferenciais</p>
                <h2>
                  Como eu construo <span>produto.</span>
                </h2>
              </div>
              <div className="domain-strip">
                {["ERP · PDV", "Fintech · SaaS", "B2B · B2C", "Sistemas Complexos"].map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
            <div className="stack-grid">
              {stack.map((item) => {
                const Icon = item.icon;

                return (
                  <article className="stack-card" key={item.label}>
                    <span className="stack-icon" aria-hidden="true">
                      <Icon />
                    </span>
                    <Icon className="stack-corner-icon" aria-hidden="true" />
                    <p className="card-label">{item.label}</p>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                    <div className="pill-list">
                      {item.tags.map((tag) => (
                        <span className="pill" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
            <div className="stack-differentials">
              <article>
                <h3>Nao entrego so telas.</h3>
                <p>
                  Fluxo completo, estados de erro, loading e documentacao clara para um
                  desenvolvimento sem duvidas.
                </p>
              </article>
              <article>
                <h3>Falo a lingua do dev.</h3>
                <p>
                  Entendo restricoes tecnicas e proponho solucoes viaveis sem perder a
                  qualidade da experiencia.
                </p>
              </article>
              <article>
                <h3>Metricas antes do layout.</h3>
                <p>
                  Defino o que sera medido antes de comecar a desenhar. Para mim, design e
                  ferramenta de resultado.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="contato" className="section contact-section">
          <div className="container contact-grid">
            <div>
              <p className="section-label">Contato</p>
              <h2>
                Vamos conversar <span>sobre o seu produto.</span>
              </h2>
              <p className="contact-text">
                Prefiro começar entendendo o problema antes de qualquer proposta. Se você lida
                com fluxos complexos, sistemas legados ou onboarding difícil, talvez eu possa
                ajudar.
              </p>
              <div className="contact-links">
                {contactLinks.map(([label, value, href]) => (
                  <a href={href} key={label} target={label === "Email" ? undefined : "_blank"}>
                    <span>{label}</span>
                    <strong>{value}</strong>
                  </a>
                ))}
              </div>
            </div>

            <form className="contact-form">
              <div className="form-row">
                <label>
                  Nome
                  <input type="text" placeholder="Seu nome" />
                </label>
                <label>
                  Empresa
                  <input type="text" placeholder="Onde atua" />
                </label>
              </div>
              <label>
                E-mail
                <input type="email" placeholder="seu@email.com" />
              </label>
              <label>
                Tipo de projeto
                <select defaultValue="">
                  <option value="" disabled>
                    Selecione uma opcao
                  </option>
                  <option>Vaga CLT / PJ</option>
                  <option>Freelance</option>
                  <option>Consultoria</option>
                  <option>Outro</option>
                </select>
              </label>
              <label>
                Contexto
                <textarea rows={5} placeholder="Descreva o problema ou desafio em poucas linhas." />
              </label>
              <button className="button" type="submit">
                Enviar mensagem
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>© 2026 · Herberth Guimaraes · Product Designer</span>
        <span>Menos friccao, mais resultado.</span>
      </footer>

      {activeProject?.caseImage ? (
        <div className="image-viewer" role="dialog" aria-modal="true" aria-labelledby="case-viewer-title">
          <div className="viewer-shell">
            <div className="viewer-header">
              <div>
                <p className="section-label">Projeto expandido</p>
                <h2 id="case-viewer-title">
                  {activeProject.eyebrow} · {activeProject.year}
                </h2>
              </div>
              <button className="viewer-close" type="button" onClick={() => setActiveProject(null)}>
                Fechar
              </button>
            </div>
            <div className="viewer-scroll">
              <img src={activeProject.caseImage} alt={`Case expandido ${activeProject.eyebrow}`} />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
