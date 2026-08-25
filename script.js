:root {
  --bg-dark: #0b132b;
  --bg-surface: #1c2541;
  --text-main: #f8fafc;
  --text-muted: #94a3b8;
  --accent-cyan: #38bdf8;
  --accent-cyan-dark: #0284c7;
  --border-dark: #334155;
  --radius: 12px;
  --shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.5);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}

body {
  background-color: var(--bg-dark);
  color: var(--text-main);
  line-height: 1.6;
}

/* Navbar */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 8%;
  background: rgba(11, 19, 43, 0.95);
  border-bottom: 1px solid var(--border-dark);
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(8px);
}

.logo {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--text-main);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.badge-mini {
  background: rgba(56, 189, 248, 0.1);
  color: var(--accent-cyan);
  border: 1px solid rgba(56, 189, 248, 0.2);
  font-size: 0.75rem;
  padding: 2px 8px;
  border-radius: 12px;
  font-weight: 600;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 1.5rem;
  align-items: center;
}

.nav-links a {
  text-decoration: none;
  color: var(--text-muted);
  font-weight: 500;
  font-size: 0.9rem;
  transition: color 0.2s;
}

.nav-links a.active, .nav-links a:hover {
  color: var(--accent-cyan);
}

.page-content {
  display: none;
}

.page-content.active {
  display: block;
}

/* Headshot Frame & Blur Effect */
.profile-frame {
  position: relative;
  width: 170px;
  height: 170px;
  margin: 1.5rem auto 1.5rem;
}

.profile-bg-blur {
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  background: var(--accent-cyan);
  border-radius: 50%;
  filter: blur(20px);
  opacity: 0.35;
}

.profile-img {
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid var(--accent-cyan);
}

/* Containers */
.centered-container {
  max-width: 650px;
  margin: 0 auto;
  padding: 1rem 1rem 2rem;
}

.centered-container-wide {
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem 1rem 2rem;
}

/* About Card & Quotes */
.about-card, .project-card, .skills-box-card {
  background: var(--bg-surface);
  border: 1px solid var(--border-dark);
  border-radius: var(--radius);
  padding: 1.75rem;
  margin-bottom: 2rem;
  box-shadow: var(--shadow);
}

.about-card h3, .project-card h3 {
  color: var(--accent-cyan);
  margin-bottom: 0.75rem;
  font-size: 1.15rem;
}

.about-card p {
  color: var(--text-main);
  font-size: 1rem;
  line-height: 1.65;
  margin-bottom: 1rem;
}

.hobbies-line {
  color: var(--accent-cyan) !important;
  font-weight: 500;
}

.quote-box {
  border-left: 3px solid var(--accent-cyan);
  padding-left: 1rem;
  margin: 1.25rem 0 0.5rem;
  font-style: italic;
  color: var(--text-main);
  font-size: 1.05rem;
}

.quote-reflection {
  font-size: 0.95rem;
  color: var(--text-muted) !important;
}

/* REFERENCE LAYOUT: BUSINESS RELATED INTERNSHIPS GRID */
.internships-section {
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.section-blue-title {
  color: var(--accent-cyan);
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  letter-spacing: -0.01em;
}

.reference-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
  margin-bottom: 2rem;
}

@media (max-width: 600px) {
  .reference-grid {
    grid-template-columns: 1fr;
  }
}

.grid-card {
  background: var(--bg-surface);
  border: 2px solid var(--border-dark);
  border-radius: var(--radius);
  padding: 1.5rem 1.25rem;
  text-align: center;
  box-shadow: var(--shadow);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.grid-role {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text-main);
  line-height: 1.35;
  margin-bottom: 0.5rem;
}

.grid-company {
  font-size: 0.9rem;
  color: var(--accent-cyan);
  font-weight: 600;
}

.grid-date {
  font-size: 0.8rem;
  color: var(--text-muted);
  margin-bottom: 0.75rem;
}

.grid-desc {
  font-size: 0.9rem;
  color: var(--text-main);
  line-height: 1.45;
}

/* Nav CTA Prompt */
.nav-cta-wrapper {
  margin-top: 2rem;
  text-align: center;
}

.cta-text {
  font-size: 1.05rem;
  color: var(--text-main);
  margin-bottom: 0.75rem;
  font-weight: 500;
}

.cta-action {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
}

.cta-arrow {
  font-size: 1.8rem;
  color: var(--accent-cyan);
}

.cta-link-btn {
  font-size: 1.5rem !important;
  font-weight: 700 !important;
  color: var(--accent-cyan) !important;
  text-decoration: underline !important;
  cursor: pointer;
}

.cta-link-btn:hover {
  color: var(--accent-cyan-dark) !important;
}

/* Technical Skills Box */
.skills-box-card {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.skill-category-block h3 {
  font-size: 1.1rem;
  color: var(--accent-cyan);
  margin-bottom: 0.75rem;
  border-bottom: 1px solid var(--border-dark);
  padding-bottom: 0.4rem;
}

.pill-group {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.pill {
  background: var(--bg-dark);
  border: 1px solid var(--border-dark);
  color: var(--text-main);
  padding: 0.45rem 0.85rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
}

.pill.accent {
  border-color: var(--accent-cyan);
  color: var(--accent-cyan);
  background: rgba(56, 189, 248, 0.08);
}

/* REVAMPED EXPERIENCES FEED STYLING */
.experience-feed-container {
  background: var(--bg-surface);
  border: 1px solid var(--border-dark);
  border-radius: var(--radius);
  padding: 2.5rem;
  box-shadow: var(--shadow);
}

.feed-title {
  font-size: 1.75rem;
  color: var(--text-main);
  margin-bottom: 2rem;
  border-bottom: 1px solid var(--border-dark);
  padding-bottom: 0.75rem;
}

.linkedin-exp-item {
  display: flex;
  gap: 1.5rem;
  padding-bottom: 2rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid var(--border-dark);
}

.linkedin-exp-item:last-child {
  border-bottom: none;
  padding-bottom: 0;
  margin-bottom: 0;
}

.exp-logo-col {
  flex-shrink: 0;
}

.company-icon {
  width: 56px;
  height: 56px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.95rem;
  color: #ffffff;
  text-transform: uppercase;
}

.icon-grain { background: #e879f9; color: #4a044e; }
.icon-youth { background: #38bdf8; color: #0c4a6e; }
.icon-quay  { background: #ffffff; color: #0f172a; border: 1px solid #cbd5e1; }
.icon-macys { background: #000000; color: #ffffff; font-size: 1.75rem; font-family: serif; }
.icon-qbg   { background: #10b981; color: #064e3b; }

.exp-details-col {
  flex: 1;
}

.exp-title-large {
  font-size: 1.3rem;
  color: var(--text-main);
  font-weight: 700;
  margin-bottom: 0.2rem;
}

.exp-subtitle-large {
  font-size: 1.05rem;
  color: var(--accent-cyan);
  font-weight: 600;
}

.exp-meta-large {
  font-size: 0.9rem;
  color: var(--text-muted);
  margin-bottom: 0.85rem;
}

.exp-summary-text-large {
  font-size: 1.05rem;
  color: var(--text-main);
  margin-bottom: 1.25rem;
  line-height: 1.6;
}

/* Modals */
.modal {
  display: none; 
  position: fixed; 
  z-index: 1000; 
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  background-color: rgba(11, 19, 43, 0.85); 
  backdrop-filter: blur(6px);
}

.modal-content {
  background-color: var(--bg-surface);
  margin: 6% auto; 
  padding: 2.25rem;
  border: 1px solid var(--border-dark);
  border-radius: var(--radius);
  width: 90%;
  max-width: 650px;
  box-shadow: var(--shadow);
  color: var(--text-main);
}

.close-modal {
  color: var(--text-muted);
  float: right;
  font-size: 1.5rem;
  cursor: pointer;
}

.close-modal:hover {
  color: var(--accent-cyan);
}

.modal-divider {
  border: 0;
  border-top: 1px solid var(--border-dark);
  margin: 1rem 0;
}

.modal ul {
  padding-left: 1.25rem;
  color: var(--text-main);
  font-size: 1rem;
}

.modal li {
  margin-bottom: 0.65rem;
}

/* Buttons & Utilities */
.project-tag {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--accent-cyan);
  margin-bottom: 0.4rem;
}

.btn-primary, .btn-secondary {
  display: inline-block;
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-primary {
  background: var(--accent-cyan);
  color: var(--bg-dark) !important;
  border: 1px solid var(--accent-cyan);
}

.btn-primary:hover {
  background: var(--accent-cyan-dark);
  color: #ffffff !important;
}

.btn-secondary {
  background: var(--bg-dark);
  color: var(--text-main);
  border: 1px solid var(--border-dark);
}

.btn-secondary:hover {
  border-color: var(--accent-cyan);
  color: var(--accent-cyan);
}

.footer {
  text-align: center;
  padding: 3rem 8%;
  background: var(--bg-surface);
  border-top: 1px solid var(--border-dark);
}

.footer h2 {
  color: var(--text-main);
  margin-bottom: 0.5rem;
}

.footer p {
  color: var(--text-muted);
  margin-bottom: 1.5rem;
}

.text-center {
  text-align: center;
}

.text-left {
  text-align: left;
}

.copyright {
  font-size: 0.8rem;
  color: var(--text-muted);
}

.hidden {
  display: none !important;
}