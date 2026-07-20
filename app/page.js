const currentFocus = [
  "Leading software development and modernization projects from planning through delivery",
  "Building offline-first flows that do not panic when signal drops",
  "Improving operations with Azure, SQL, BI, and integration pipelines",
];

const scaleSignals = [
  {
    value: "1,000+",
    label: "franchise locations supported",
  },
  {
    value: "300+",
    label: "technicians using the mobile workflow",
  },
  {
    value: "High-Traffic",
    label: "career platform product work",
  },
  {
    value: "Global",
    label: "multilingual and international transaction support",
  },
  {
    value: "Process + BI",
    label: "reporting, payroll, and operational improvement work",
  },
];

const projects = [
  {
    id: "01",
    title: "Franchise-scale platforms, not small brochure apps",
    body:
      "I've built software that had to support broad distributed operations, including a multilingual franchise job posting platform built with .NET and Entity Framework Code-First that scaled across more than 1,000 franchise locations.",
    tags: ["1,000+ locations", "Multilingual", "Entity Framework"],
    tone: "lime",
  },
  {
    id: "02",
    title: "High-traffic web products that had to perform",
    body:
      "I've worked on high-traffic product surfaces too, including a career platform where I shipped search improvements, mobile-responsive layouts, and performance-focused updates that improved engagement and reduced page load time.",
    tags: ["High traffic", "Responsive UX", "Performance"],
    tone: "ink",
  },
  {
    id: "03",
    title: "Field mobile software used daily by real teams",
    body:
      "I've also led field-focused mobile work, including moving an inspection platform into .NET MAUI Blazor Hybrid for 300+ technicians with dependable local capture, synchronization, and offline-first workflows.",
    tags: ["300+ technicians", "Offline-first", ".NET MAUI"],
    tone: "orange",
  },
  {
    id: "04",
    title: "International payments and operational workflows",
    body:
      "Beyond user-facing apps, I've built secure payment processing with real-time currency conversion APIs and automation pipelines that removed repeat work from payroll, reporting, and HR operations.",
    tags: ["International payments", "Currency APIs", "Automation"],
    tone: "teal",
  },
];

const operationsImpact = [
  {
    number: "01",
    title: "Process improvement that saved real time",
    body:
      "I engineered C# and SQL workflows that automated weekly commission calculations and removed a full day of manual payroll work every week.",
  },
  {
    number: "02",
    title: "BI and reporting that made decisions easier",
    body:
      "I migrated legacy Access, FoxPro, and Crystal Reports processes into .NET, SSRS, and Power BI solutions so teams could work from clearer and more reliable reporting.",
  },
  {
    number: "03",
    title: "Operational models cleaned up at the source",
    body:
      "I rewrote a complex SQL cost allocation model to improve financial reporting accuracy and cut data processing time by an entire week per financial cycle.",
  },
];

const timeline = [
  {
    years: "2020 - 2026",
    company: "Silco Fire & Security",
    role: "Lead Developer",
    summary:
      "Led modernization, field-app reliability, Azure architecture, DevOps workflow management, operational automation, and engineering standards for internal software that people depended on every day.",
  },
  {
    years: "2016 - Present",
    company: "Freelance",
    role: "Solo Builder",
    summary:
      "Built compliance, broadcasting, e-commerce, and event-management products across ASP.NET Core, React, Azure App Service, Azure SQL, and Cosmos DB.",
  },
  {
    years: "2019 - 2020",
    company: "Robert Half Technology",
    role: "IT Consultant",
    summary:
      "Delivered multilingual .NET work, responsive product improvements, and secure payment integrations for high-traffic software with international transaction needs.",
  },
  {
    years: "2015 - 2019",
    company: "Clarke Fire Protection Products",
    role: "Software Developer",
    summary:
      "Built web, desktop, and mobile systems, including WPF tooling, Xamarin apps, and reporting migrations into SSRS and Power BI for manufacturing workflows.",
  },
];

const stack = [
  ".NET 10",
  "C#",
  "Blazor",
  "React",
  ".NET MAUI",
  "Azure",
  "Azure SQL",
  "Functions",
  "Logic Apps",
  "Power BI",
  "SSRS",
  "Entity Framework",
  "REST APIs",
  "TypeScript",
  "Offline-first",
  "Azure DevOps",
  "CI/CD",
  "SQL",
];

export default function Home() {
  return (
    <main className="site-shell">
      <div className="color-orb orb-left" />
      <div className="color-orb orb-right" />
      <div className="grain-lines" />

      <section className="hero-stage">
        <header className="topbar">
          <div className="brand">
            <span className="brand-mark">PB</span>
            <div>
              <p className="brand-name">Peter Bengel</p>
              <p className="brand-role">software development and project delivery</p>
            </div>
          </div>

          <nav className="topnav" aria-label="Primary">
            <a href="#work">Work</a>
            <a href="#story">Story</a>
            <a href="#stack">Stack</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Peter Bengel // Cincinnati // software development // project delivery</p>
            <h1>I lead software projects that hold up when the work gets real.</h1>
            <p className="hero-text">
              From franchise-scale platforms and high-traffic web products to
              field mobile apps, reporting, and process automation, I manage
              and build systems that scale, stay reliable, and make the work
              around them run better.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="mailto:bengel.peter@gmail.com">
                Let&apos;s build something
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

            <div className="hero-links">
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
          </div>

          <aside className="hero-board" aria-label="Current focus board">
            <div className="hero-badge">modernizing across web, cloud, and mobile</div>

            <article className="board-panel board-panel-main">
              <p className="board-label">Currently into</p>
              <ul className="board-list">
                {currentFocus.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <div className="board-notes">
              <article className="board-note board-note-a">
                <p className="board-label">Approach</p>
                <p>Keep software clear, practical, and easy for real teams to use.</p>
              </article>
              <article className="board-note board-note-b">
                <p className="board-label">Delivery style</p>
                <p>Lead modernization in a way that improves the system without disrupting the business.</p>
              </article>
            </div>
          </aside>
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="section-heading split-heading">
          <div>
            <p className="section-label">Scale and range</p>
            <h2>I have worked across franchise-scale platforms, high-traffic products, field mobile software, and operational systems.</h2>
          </div>
          <p className="section-side">
            The point is not one app. The pattern is that I&apos;ve shipped software
            in very different environments where scale, reliability, and real
            usage mattered.
          </p>
        </div>

        <div className="signal-strip" aria-label="Scale markers">
          {scaleSignals.map((signal) => (
            <article className="signal-chip" key={signal.label}>
              <p className="signal-value">{signal.value}</p>
              <p className="signal-label">{signal.label}</p>
            </article>
          ))}
        </div>

        <div className="project-layout">
          {projects.map((project) => (
            <article className={`project-card project-card-${project.tone}`} key={project.id}>
              <div className="project-head">
                <p className="project-id">{project.id}</p>
                <span className="project-line" />
              </div>
              <h3>{project.title}</h3>
              <p className="project-body">{project.body}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span className="project-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="reasons-section">
        <div className="section-heading">
          <p className="section-label">Operations impact</p>
          <h2>A lot of my strongest work sits where software, reporting, and day-to-day business operations meet.</h2>
        </div>

        <div className="reason-layout">
          {operationsImpact.map((reason) => (
            <article className="reason-card" key={reason.title}>
              <p className="reason-number">{reason.number}</p>
              <h3>{reason.title}</h3>
              <p>{reason.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="story-section" id="story">
        <div className="section-heading">
          <p className="section-label">Story</p>
          <h2>A timeline built around shipping, modernizing, fixing, and making software less painful to use.</h2>
        </div>

        <div className="timeline-shell">
          {timeline.map((item) => (
            <article className="timeline-item" key={`${item.company}-${item.years}`}>
              <div className="timeline-years">{item.years}</div>
              <div className="timeline-main">
                <div className="timeline-head">
                  <h3>{item.company}</h3>
                  <p>{item.role}</p>
                </div>
                <p className="timeline-text">{item.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="stack-section" id="stack">
        <div className="stack-shell">
          <div className="section-heading">
            <p className="section-label">Stack</p>
            <h2>The tools I keep reaching for when the software needs to last.</h2>
          </div>

          <div className="stack-cloud">
            {stack.map((item, index) => (
              <span className={`stack-chip stack-chip-${(index % 4) + 1}`} key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-shell">
          <div className="contact-copy">
            <p className="section-label">Contact</p>
            <h2>If you need somebody who likes the ugly middle of a project as much as the polished ending, that&apos;s me.</h2>
            <p>
              I like building software that people can actually trust once it
              ships, especially when the work involves messy realities, older
              systems, and real operational pressure.
            </p>
          </div>

          <div className="contact-actions">
            <a className="button button-primary" href="mailto:bengel.peter@gmail.com">
              bengel.peter@gmail.com
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
