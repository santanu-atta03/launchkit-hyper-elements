import { useMemo, useState } from "react";
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Code2,
  Download,
  FileImage,
  FileText,
  GitFork,
  Globe2,
  Layers3,
  Mail,
  Menu,
  PackageOpen,
  Play,
  Search,
  Sparkles,
  X,
} from "lucide-react";
import "./App.css";

const categories = ["All", "Website", "Email", "PDF", "Social"];

const templates = [
  {
    id: "website",
    category: "Website",
    title: "Launch page",
    description: "A conversion-ready product page for ambitious launches.",
    format: "HTML",
    icon: Globe2,
    accent: "violet",
    output: "launchkit-preview.html",
  },
  {
    id: "email",
    category: "Email",
    title: "Welcome email",
    description: "A warm, polished first touch that turns signups into users.",
    format: "HTML",
    icon: Mail,
    accent: "blue",
    output: "welcome-email.html",
  },
  {
    id: "invoice",
    category: "PDF",
    title: "Studio invoice",
    description: "A clear, print-ready invoice for modern creative teams.",
    format: "PDF",
    icon: FileText,
    accent: "amber",
    output: "out/launchkit-invoice.pdf",
  },
  {
    id: "social",
    category: "Social",
    title: "Social card",
    description: "A high-impact announcement graphic built for sharing.",
    format: "PNG",
    icon: FileImage,
    accent: "pink",
    output: "out/launchkit-social.png",
  },
];

const featureItems = [
  {
    icon: Layers3,
    title: "One source of truth",
    description: "Share tokens, patterns and components across every surface.",
  },
  {
    icon: Sparkles,
    title: "Designed to ship",
    description:
      "Start from a thoughtful foundation instead of a blank canvas.",
  },
  {
    icon: Code2,
    title: "React-native workflow",
    description:
      "Keep your templates close to the code, with JSX you already know.",
  },
];

function Logo({ compact = false }) {
  return (
    <a className="brand" href="#top" aria-label="LaunchKit home">
      <span className="brand-mark" aria-hidden="true">
        <span />
        <span />
        <span />
      </span>
      {!compact && <span>LaunchKit</span>}
    </a>
  );
}

function FormatIcon({ template }) {
  const Icon = template.icon;
  return (
    <span className={`format-icon format-icon-${template.accent}`}>
      <Icon size={18} strokeWidth={2.2} aria-hidden="true" />
    </span>
  );
}

function PreviewVisual({ template }) {
  if (template.id === "website") {
    return (
      <div className="preview-visual preview-website">
        <div className="preview-window-bar">
          <i />
          <i />
          <i />
        </div>
        <div className="preview-site-nav">
          <b>LaunchKit.</b>
          <span />
          <span />
        </div>
        <div className="preview-site-hero">
          <small>THE TEMPLATE STUDIO</small>
          <strong>
            One design.
            <br />
            Four possibilities.
          </strong>
          <em />
        </div>
        <div className="preview-site-cards">
          <span />
          <span />
          <span />
        </div>
      </div>
    );
  }
  if (template.id === "email") {
    return (
      <div className="preview-visual preview-email">
        <div className="preview-email-top">
          <b>LaunchKit.</b>
          <span>WELCOME ABOARD</span>
        </div>
        <div className="preview-email-body">
          <small>WELCOME ABOARD!</small>
          <strong>
            Make every format
            <br />
            feel on-brand.
          </strong>
          <span />
          <i />
        </div>
      </div>
    );
  }
  if (template.id === "invoice") {
    return (
      <div className="preview-visual preview-invoice">
        <div className="invoice-line invoice-title">
          <b>LaunchKit.</b>
          <strong>INVOICE</strong>
        </div>
        <div className="invoice-line">
          <span />
          <span />
        </div>
        <div className="invoice-block">
          <i />
          <i />
          <i />
          <i />
        </div>
        <div className="invoice-total">
          <span />
          <b />
        </div>
      </div>
    );
  }
  return (
    <div className="preview-visual preview-social">
      <small>THE FUTURE OF TEMPLATES</small>
      <strong>
        Create once.
        <br />
        <em>Publish everywhere.</em>
      </strong>
      <span>EMAIL &nbsp; WEB &nbsp; PDF &nbsp; IMAGE</span>
    </div>
  );
}

function TemplateCard({ template, onPreview }) {
  return (
    <article className="template-card">
      <button
        className="template-preview-button"
        type="button"
        onClick={() => onPreview(template)}
      >
        <PreviewVisual template={template} />
        <span className="preview-overlay">
          <Play size={16} fill="currentColor" /> Preview template
        </span>
      </button>
      <div className="template-card-body">
        <div className="template-card-heading">
          <div className="template-card-title">
            <FormatIcon template={template} />
            <div>
              <h3>{template.title}</h3>
              <span>{template.category}</span>
            </div>
          </div>
          <span className="format-badge">{template.format}</span>
        </div>
        <p>{template.description}</p>
        <a
          href={`/${template.output}`}
          target="_blank"
          rel="noreferrer"
          className="text-link"
        >
          Open output <ArrowUpRight size={15} />
        </a>
      </div>
    </article>
  );
}

function App() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const filteredTemplates = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return templates.filter((template) => {
      const matchesCategory =
        activeCategory === "All" || template.category === activeCategory;
      const matchesQuery =
        !normalizedQuery ||
        `${template.title} ${template.description} ${template.category}`
          .toLowerCase()
          .includes(normalizedQuery);
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  return (
    <div id="top" className="app-shell">
      <header className="site-header">
        <div className="container header-inner">
          <Logo />
          <button
            className="mobile-menu-button"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <nav
            className={`main-nav ${menuOpen ? "is-open" : ""}`}
            aria-label="Main navigation"
          >
            <a href="#templates" onClick={() => setMenuOpen(false)}>
              Templates
            </a>
            <a href="#how-it-works" onClick={() => setMenuOpen(false)}>
              How it works
            </a>
            <a href="#architecture" onClick={() => setMenuOpen(false)}>
              Architecture
            </a>
            <a
              href="https://github.com/santanu-atta03/launchkit-hyper-elements"
              target="_blank"
              rel="noreferrer"
              onClick={() => setMenuOpen(false)}
            >
              GitHub <ArrowUpRight size={14} />
            </a>
          </nav>
          <a className="header-cta" href="#templates">
            Explore templates <ArrowUpRight size={15} />
          </a>
        </div>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-glow hero-glow-one" />
          <div className="hero-glow hero-glow-two" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">
                <span className="eyebrow-dot" /> Open-source template studio
              </div>
              <h1>
                One design.
                <br />
                <span>Four possibilities.</span>
              </h1>
              <p className="hero-lede">
                LaunchKit turns one shared React design system into beautiful
                websites, emails, PDFs and social graphics — ready to ship.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#templates">
                  Explore the collection <ArrowUpRight size={17} />
                </a>
                <a
                  className="button button-secondary"
                  href="https://github.com/santanu-atta03/launchkit-hyper-elements"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitFork size={17} /> View on GitHub
                </a>
              </div>
              <div className="hero-proof">
                <span className="avatar-stack">
                  <i>R</i>
                  <i>A</i>
                  <i>M</i>
                </span>
                <span>Built for makers who care about the details</span>
              </div>
            </div>
            <div
              className="hero-stage"
              aria-label="Four output formats preview"
            >
              <div className="stage-orbit orbit-one" />
              <div className="stage-orbit orbit-two" />
              <div className="stage-center">
                <span className="brand-mark large">
                  <span />
                  <span />
                  <span />
                </span>
                <strong>One system</strong>
                <small>four outputs</small>
              </div>
              <div className="orbit-rotation" aria-hidden="true">
                <div className="stage-card stage-card-website">
                  <Globe2 size={16} />
                  <b>Website</b>
                  <span>HTML</span>
                  <em />
                </div>
                <div className="stage-card stage-card-email">
                  <Mail size={16} />
                  <b>Email</b>
                  <span>HTML</span>
                  <em />
                </div>
                <div className="stage-card stage-card-pdf">
                  <FileText size={16} />
                  <b>Document</b>
                  <span>PDF</span>
                  <em />
                </div>
                <div className="stage-card stage-card-social">
                  <FileImage size={16} />
                  <b>Social</b>
                  <span>PNG</span>
                  <em />
                </div>
              </div>
            </div>
          </div>
          <div className="hero-bottom container">
            <span>Built with</span>
            <b>React</b>
            <b>Hyper Elements</b>
            <b>Vite</b>
            <span className="scroll-cue">
              Scroll to explore <ChevronDown size={16} />
            </span>
          </div>
        </section>

        <section className="formats-section section-pad">
          <div className="container">
            <div className="section-intro centered">
              <div className="eyebrow eyebrow-dark">The format advantage</div>
              <h2>
                Design once.
                <br />
                <span>Show up everywhere.</span>
              </h2>
              <p>
                A single visual language creates a more memorable brand — no
                matter where your audience meets you.
              </p>
            </div>
            <div className="format-strip">
              {templates.map((template, index) => (
                <div
                  className={`format-item format-item-${template.accent}`}
                  key={template.id}
                >
                  <span className="format-index">0{index + 1}</span>
                  <FormatIcon template={template} />
                  <div>
                    <h3>{template.category}</h3>
                    <p>{template.format} output</p>
                  </div>
                  <ArrowUpRight size={18} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="templates" className="templates-section section-pad">
          <div className="container">
            <div className="section-heading-row">
              <div>
                <div className="eyebrow eyebrow-dark">The collection</div>
                <h2>
                  Templates with <span>momentum.</span>
                </h2>
                <p>
                  Real, production-ready examples you can inspect, remix and
                  build on.
                </p>
              </div>
              <a
                className="button button-dark"
                href="https://github.com/santanu-atta03/launchkit-hyper-elements"
                target="_blank"
                rel="noreferrer"
              >
                Browse the source <GitFork size={16} />
              </a>
            </div>
            <div className="gallery-toolbar">
              <div
                className="filter-tabs"
                role="tablist"
                aria-label="Template categories"
              >
                {categories.map((category) => (
                  <button
                    key={category}
                    className={activeCategory === category ? "is-active" : ""}
                    type="button"
                    role="tab"
                    aria-selected={activeCategory === category}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
              <label className="search-field">
                <Search size={17} />
                <input
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search templates"
                  aria-label="Search templates"
                />
              </label>
            </div>
            {filteredTemplates.length ? (
              <div className="template-grid">
                {filteredTemplates.map((template) => (
                  <TemplateCard
                    key={template.id}
                    template={template}
                    onPreview={setSelectedTemplate}
                  />
                ))}
              </div>
            ) : (
              <div className="empty-state">
                <PackageOpen size={30} />
                <h3>No templates found</h3>
                <p>Try a different search or reset your filters.</p>
                <button
                  className="button button-secondary"
                  type="button"
                  onClick={() => {
                    setQuery("");
                    setActiveCategory("All");
                  }}
                >
                  Reset filters
                </button>
              </div>
            )}
          </div>
        </section>

        <section id="how-it-works" className="steps-section section-pad">
          <div className="container steps-grid">
            <div className="section-intro">
              <div className="eyebrow">The workflow</div>
              <h2>
                From idea to
                <br />
                <span>everywhere.</span>
              </h2>
              <p>
                LaunchKit keeps the creative work connected to the code, so
                every output stays consistent as your product evolves.
              </p>
              <a
                className="text-link light-link"
                href="https://github.com/santanu-atta03/launchkit-hyper-elements"
                target="_blank"
                rel="noreferrer"
              >
                Read the architecture <ArrowUpRight size={15} />
              </a>
            </div>
            <div className="steps-list">
              <div className="step-item">
                <span>01</span>
                <div>
                  <h3>Compose with primitives</h3>
                  <p>
                    Build with familiar React components and Hyper Elements
                    primitives.
                  </p>
                </div>
              </div>
              <div className="step-item">
                <span>02</span>
                <div>
                  <h3>Share the system</h3>
                  <p>
                    Carry your theme, tokens and visual decisions across every
                    format.
                  </p>
                </div>
              </div>
              <div className="step-item">
                <span>03</span>
                <div>
                  <h3>Render and ship</h3>
                  <p>
                    Generate HTML, PDF and PNG outputs with deterministic
                    scripts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="architecture" className="architecture-section section-pad">
          <div className="container">
            <div className="section-intro centered">
              <div className="eyebrow eyebrow-dark">Under the hood</div>
              <h2>
                Small system.
                <br />
                <span>Big surface area.</span>
              </h2>
              <p>
                LaunchKit is intentionally simple to understand and easy to
                extend.
              </p>
            </div>
            <div className="architecture-grid">
              <div className="architecture-card architecture-code">
                <div className="code-header">
                  <span />
                  <span />
                  <span />
                  <b>launchkit-theme.js</b>
                </div>
                <pre>
                  <code>
                    <span>const</span> launchkitTheme = <span>defineTheme</span>
                    ({"{"}
                    <br /> colors: {"{"}
                    <br /> primary: <em>&quot;#0066cc&quot;</em>,<br />{" "}
                    foreground: <em>&quot;#1d1d1f&quot;</em>,<br /> {"}"},<br />
                    {"}"});
                  </code>
                </pre>
              </div>
              {featureItems.map(({ icon: Icon, title, description }) => (
                <div className="architecture-card feature-card" key={title}>
                  <span className="feature-icon">
                    <Icon size={20} />
                  </span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <Check size={18} className="feature-check" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container cta-inner">
            <div>
              <div className="eyebrow">Make it yours</div>
              <h2>
                Build your next
                <br />
                <span>great thing.</span>
              </h2>
              <p>
                Fork LaunchKit, make it your own and ship a more consistent
                brand everywhere.
              </p>
            </div>
            <div className="cta-actions">
              <a
                className="button button-primary"
                href="https://github.com/santanu-atta03/launchkit-hyper-elements"
                target="_blank"
                rel="noreferrer"
              >
                <GitFork size={17} /> Start on GitHub
              </a>
              <a className="text-link light-link" href="#templates">
                Explore templates <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-main">
          <div>
            <Logo />
            <p>
              A shared design system for every way
              <br />
              your product shows up.
            </p>
          </div>
          <div className="footer-links">
            <div>
              <b>Explore</b>
              <a href="#templates">Templates</a>
              <a href="#how-it-works">How it works</a>
              <a href="#architecture">Architecture</a>
            </div>
            <div>
              <b>Project</b>
              <a
                href="https://github.com/santanu-atta03/launchkit-hyper-elements"
                target="_blank"
                rel="noreferrer"
              >
                GitHub <ArrowUpRight size={13} />
              </a>
              <a
                href="https://hyper-elements.dev/"
                target="_blank"
                rel="noreferrer"
              >
                Hyper Elements <ArrowUpRight size={13} />
              </a>
              <a href="https://vite.dev/" target="_blank" rel="noreferrer">
                Vite <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 LaunchKit. Open source under MIT.</span>
          <span>Designed for the Hyper Elements Template Challenge.</span>
        </div>
      </footer>

      {selectedTemplate && (
        <div
          className="modal-backdrop"
          role="presentation"
          onClick={() => setSelectedTemplate(null)}
        >
          <div
            className="preview-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="preview-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close"
              type="button"
              aria-label="Close preview"
              onClick={() => setSelectedTemplate(null)}
            >
              <X size={19} />
            </button>
            <div className="modal-preview">
              <PreviewVisual template={selectedTemplate} />
            </div>
            <div className="modal-content">
              <div className="eyebrow eyebrow-dark">
                {selectedTemplate.category} template
              </div>
              <h2 id="preview-title">{selectedTemplate.title}</h2>
              <p>{selectedTemplate.description}</p>
              <a
                className="button button-primary"
                href={`/${selectedTemplate.output}`}
                target="_blank"
                rel="noreferrer"
              >
                <Download size={16} /> Open generated output
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
