const heroSignals = [
  {
    title: "Offline-first inspection software",
    eyebrow: "Field Reliability",
    detail:
      "Delivered a .NET MAUI Blazor Hybrid platform trusted by 300+ technicians for dependable local capture and synchronization.",
  },
  {
    title: "Modernization without business drag",
    eyebrow: "Platform Modernization",
    detail:
      "Upgraded legacy .NET systems to modern Blazor and React experiences while improving performance and release velocity.",
  },
  {
    title: "Azure pipelines and secure integrations",
    eyebrow: "Operational Automation",
    detail:
      "Built microservices, ETL flows, and SQL automation that removed bottlenecks and improved reporting accuracy across the business.",
  },
];

const boardNodes = [
  {
    label: "Interface",
    value: "Blazor / React",
  },
  {
    label: "Platform",
    value: ".NET 10 / Azure",
  },
  {
    label: "Workflow",
    value: "Offline sync / SQL",
  },
];

const boardTags = [
  "Offline-first",
  ".NET 10",
  "Azure architecture",
  "Blazor Hybrid",
  "React",
  "Operational automation",
];

const impactCards = [
  {
    index: "01",
    title: "Software that holds up in the real world",
    body:
      "I build systems for environments where reliability matters more than novelty: field work, inspections, operations, payroll, reporting, and cross-team delivery.",
    points: [
      "Offline-first architecture",
      "High-trust workflow design",
      "Clear UI under pressure",
    ],
  },
  {
    index: "02",
    title: "Legacy stacks turned into modern products",
    body:
      "My best work usually starts where software is already important. I modernize established applications carefully, preserving trust while improving speed, maintainability, and user experience.",
    points: [
      ".NET Framework to .NET 10",
      "Blazor and React frontends",
      "Measured performance gains",
    ],
  },
  {
    index: "03",
    title: "Automation that gives time back",
    body:
      "From Azure Functions to SQL pipelines, I design integrations that reduce repeat work and make business-critical operations more dependable.",
    points: [
      "Azure Functions and Logic Apps",
      "ETL and reporting pipelines",
      "Salesforce and data integrations",
    ],
  },
];

const experience = [
  {
    years: "2020 - 2026",
    company: "Silco Fire & Security",
    role: "Lead Developer",
    summary:
      "Led modernization, mobile reliability, Azure architecture, DevOps workflow management, and engineering standards for internal inspection and operations platforms.",
  },
  {
    years: "2016 - Present",
    company: "Freelance",
    role: "Freelance Web Developer",
    summary:
      "Built compliance, broadcasting, e-commerce, and event-management platforms across ASP.NET Core, React, Azure App Service, Azure SQL, and Cosmos DB.",
  },
  {
    years: "2019 - 2020",
    company: "Robert Half Technology",
    role: "IT Consultant",
    summary:
      "Delivered multilingual .NET platform work, responsive web improvements, and secure international payment integrations for high-traffic products.",
  },
  {
    years: "2015 - 2019",
    company: "Clarke Fire Protection Products",
    role: "Software Developer",
    summary:
      "Built web, desktop, and mobile systems, including hardware-connected WPF tooling, Xamarin apps, and reporting migrations for global manufacturing workflows.",
  },
];

const stackGroups = [
  {
    label: "Application Engineering",
    value: ".NET, C#, React, Blazor, .NET MAUI, TypeScript, REST APIs",
  },
  {
    label: "Cloud and Data",
    value:
      "Azure App Service, Azure Functions, Azure SQL, Data Factory, Logic Apps, Entity Framework, SQL",
  },
  {
    label: "Delivery",
    value: "Azure DevOps, CI/CD, Agile delivery, code reviews, mentoring, AI-assisted development",
  },
];

const operatingPrinciples = [
  "Design for reliability before polish when the software supports real operational work.",
  "Modernize in a way that keeps business teams confident while the platform gets better.",
  "Reduce friction with architecture, automation, and clear interfaces instead of adding process.",
];

export default function Home() {
  return (
    <main className="page-shell">
      <div className="ambient ambient-left" />
      <div className="ambient ambient-right" />
      <div className="grid-wash" />

      <section className="hero-shell">
        <header className="masthead">
          <div className="brand-block">
            <span className="brand-mark">PB</span>
            <div className="brand-copy">
              <p className="brand-name">Peter Bengel</p>
              <p className="brand-role">Lead Software Developer</p>
            </div>
          </div>

          <nav className="nav-links" aria-label="Primary">
            <a href="#impact">Impact</a>
            <a href="#experience">Experience</a>
            <a href="#stack">Stack</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <section className="hero-panel">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Cincinnati based lead developer</p>
              <h1>Enterprise software with field-tested reliability.</h1>
              <p className="hero-text">
                I build modern .NET and Azure products for teams that depend on
                their software every day, with a focus on offline-first
                workflows, legacy modernization, secure integrations, and calm,
                professional interfaces.
              </p>

              <div className="hero-actions">
                <a className="button button-primary" href="mailto:bengel.peter@gmail.com">
                  bengel.peter@gmail.com
                </a>
                <a
                  className="button button-secondary"
                  href="/peter-bengel-resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resume PDF
                </a>
              </div>

              <div className="hero-meta">
                <a
                  href="https://www.linkedin.com/in/peter-bengel-8a56b4108/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
                <a href="https://github.com/bengelpeter" target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <span>Cincinnati, Ohio</span>
              </div>

              <div className="hero-facts">
                <div>
                  <p className="fact-label">Specialties</p>
                  <p className="fact-value">
                    .NET MAUI, Blazor, React, Azure, SQL, modernizing legacy
                    systems
                  </p>
                </div>
                <div>
                  <p className="fact-label">Best Fit</p>
                  <p className="fact-value">
                    Senior product, platform, and modernization work where
                    reliability is non-negotiable
                  </p>
                </div>
              </div>
            </div>

            <aside className="signal-board" aria-label="Selected work themes">
              <div className="board-header">
                <p className="eyebrow">Selected signals</p>
                <p className="board-summary">
                  The strongest themes across my work are durable field
                  software, careful modernization, and automation that removes
                  operational drag.
                </p>
              </div>

              <div className="board-topology">
                <div className="board-tags" aria-label="Core themes">
                  {boardTags.map((tag) => (
                    <span className="board-tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="board-route" aria-label="Architecture focus">
                  {boardNodes.map((node, index) => (
                    <article className="board-node" key={node.label}>
                      <p className="board-node-label">{node.label}</p>
                      <p className="board-node-value">{node.value}</p>
                      {index < boardNodes.length - 1 ? (
                        <span className="board-node-link" aria-hidden="true" />
                      ) : null}
                    </article>
                  ))}
                </div>
              </div>

              <div className="signal-list">
                {heroSignals.map((signal) => (
                  <article className="signal-card" key={signal.title}>
                    <p className="signal-eyebrow">{signal.eyebrow}</p>
                    <h2>{signal.title}</h2>
                    <p>{signal.detail}</p>
                  </article>
                ))}
              </div>
            </aside>
          </div>
        </section>
      </section>

      <section className="section section-intro">
        <p>
          Lead developer with deep experience in enterprise .NET, Azure
          architecture, operational automation, and building products that stay
          clear and dependable under real business pressure.
        </p>
      </section>

      <section className="section" id="impact">
        <div className="section-heading">
          <p className="eyebrow">What I bring</p>
          <h2>Technical depth, product judgment, and execution that scales beyond a single screen.</h2>
        </div>

        <div className="impact-grid">
          {impactCards.map((card) => (
            <article className={`impact-card impact-card-${card.index}`} key={card.title}>
              <p className="impact-index">{card.index}</p>
              <h3>{card.title}</h3>
              <p className="impact-body">{card.body}</p>
              <div className="impact-pills">
                {card.points.map((point) => (
                  <span className="impact-pill" key={point}>
                    {point}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section experience-section" id="experience">
        <div className="section-heading section-heading-wide">
          <p className="eyebrow">Experience</p>
          <h2>Built across internal product teams, consulting, and custom software delivery.</h2>
        </div>

        <div className="experience-rail">
          {experience.map((item) => (
            <article className="experience-row" key={`${item.company}-${item.years}`}>
              <div className="experience-year">{item.years}</div>
              <div className="experience-main">
                <div className="experience-head">
                  <h3>{item.company}</h3>
                  <p>{item.role}</p>
                </div>
                <p className="experience-summary">{item.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section stack-section" id="stack">
        <div className="stack-panel">
          <div className="section-heading stack-heading">
            <p className="eyebrow">Core stack</p>
            <h2>Comfortable at the intersection of application engineering, Azure systems, and delivery leadership.</h2>
          </div>

          <div className="stack-list">
            {stackGroups.map((group) => (
              <article className="stack-row" key={group.label}>
                <p className="stack-label">{group.label}</p>
                <p className="stack-value">{group.value}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section principles-section">
        <div className="section-heading">
          <p className="eyebrow">How I operate</p>
          <h2>My default approach is practical, calm, and built around trust.</h2>
        </div>

        <div className="principles-grid">
          {operatingPrinciples.map((principle, index) => (
            <article className="principle-card" key={principle}>
              <p className="principle-index">0{index + 1}</p>
              <p>{principle}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="contact-card">
          <p className="eyebrow">Contact</p>
          <h2>Available for senior engineering, modernization, and high-trust product work.</h2>
          <p>
            If you&apos;re building software that needs to be dependable in the
            real world, I&apos;d be glad to talk.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="mailto:bengel.peter@gmail.com">
              Email Peter
            </a>
            <a
              className="button button-secondary"
              href="https://github.com/bengelpeter"
              target="_blank"
              rel="noreferrer"
            >
              View GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
