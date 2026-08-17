/* ==========================================================================
   CYBERSEC.PRO / PERSIDE DEGBE — BILINGUAL (FR / EN) & INTERACTIVE APP
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initPreloader();
  initLanguageSwitcher();
  initThemeToggle();
  initScrollSpy();
  initStickyNavbar();
  initMobileNav();
  initSOCTerminal();
  initLabFiltering();
  initModals();
  initTestimonialSlider();
  initScrollReveal();
  initContactForm();
});

/* --------------------------------------------------------------------------
   0. Preloader Screen Handler
   -------------------------------------------------------------------------- */
function initPreloader() {
  const preloader = document.getElementById('cyberPreloader');
  const bar = document.getElementById('preloaderBar');

  if (!preloader) return;

  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.floor(Math.random() * 25) + 15;
    if (progress > 100) progress = 100;
    
    if (bar) bar.style.width = `${progress}%`;

    if (progress >= 100) {
      clearInterval(interval);
      setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => {
          preloader.style.display = 'none';
        }, 600);
      }, 250);
    }
  }, 90);
}

/* --------------------------------------------------------------------------
   1. Bilingual Internationalization (FR / EN Dictionary & Switcher)
   -------------------------------------------------------------------------- */
let currentLang = localStorage.getItem('lang') || 'fr';

const translations = {
  fr: {
    // Nav
    nav_about: "À propos",
    nav_expertise: "Expertise",
    nav_labs: "Labs",
    nav_credentials: "Diplômes & Certifs",
    btn_cv: "Demander le CV",
    btn_talk: "Me Contacter",

    // Hero
    hero_badge: "Disponible pour Opportunités SOC & AppSec",
    hero_title_name: "DEGBE",
    hero_tagline: "Analyste Cybersécurité · SOC · Sécurité Applicative",
    hero_statement: '"Je sécurise les systèmes en comprenant comment ils peuvent être attaqués." Alliance d\'expertise pratique en analyse de menaces (Zeek, MITRE ATT&CK), développement sécurisé (PHP/HTML/SQL) et durcissement d\'infrastructures.',
    hero_cta_labs: "Explorer mes Labs",
    hero_cta_cv: "Demander le CV",
    hero_cta_talk: "Discutons",
    hero_spec_soc: "SOC / SIEM",
    hero_spec_appsec: "AppSec",
    hero_spec_pentest: "Pentest",
    hero_spec_risk: "Cadre de Risque",

    // About
    about_tag: "Positionnement Professionnel",
    about_title: "Sécurité + Développement + Ingénierie Système",
    about_p1: "Titulaire d'une Licence en Informatique de Gestion (Mention Bien) de l'Institut Universitaire de Technologie (IUT) de l'Université de Parakou et formée à l'École des Métiers du Numérique (EMN), Perside fait le pont entre la découverte offensive de vulnérabilités et le développement logiciel sécurisé.",
    about_p2: "Actuellement Analyste Cybersécurité Stagiaire chez Moov Africa (Direction Générale), elle effectue le tri des événements SIEM, applique le durcissement des baselines de sécurité, audite le code web (OWASP Top 10) et cartographie les risques avec la méthode EBIOS RM de l'ANSSI.",
    about_triad1_title: "Sécurité Défensive",
    about_triad1_desc: "Tri SIEM, surveillance de flux Zeek, analyse MITRE ATT&CK.",
    about_triad2_title: "AppSec & Code",
    about_triad2_desc: "Protection OWASP Top 10, assainissement SQLi & XSS (PHP/SQL).",
    about_triad3_title: "Infrastructures",
    about_triad3_desc: "Durcissement Linux & Windows Server, gestion des patchs.",

    // Stats
    stat1_val: "2+",
    stat1_label: "Années d'Expérience",
    stat1_sub: "Stages Télécom & Entreprise",
    stat2_val: "20+",
    stat2_label: "Labs & Audits de Sécurité",
    stat2_sub: "SOC, Pentest & AppSec",
    stat3_val: "5+",
    stat3_label: "Certifications & Diplômes",
    stat3_sub: "Licence (Bien), Cisco, EBIOS",
    stat4_val: "100%",
    stat4_label: "Focus Défensif",
    stat4_sub: "Remédiation Systémique",

    // Expertise
    exp_tag: "Domaines Cœur",
    exp_title: "Expertise Technique & Piliers Défensifs",
    exp_subtitle: "Une approche rigoureuse combinant surveillance continue des menaces, protection du code applicatif, tests d'intrusion offensifs et durcissement des infrastructures.",
    exp1_title: "Opérations SOC & Détection de Menaces",
    exp1_desc: "Surveillance télémétrique en temps réel, analyse de logs et capture de paquets réseau (Zeek, Wireshark). Classification des TTPs d'attaques avec la matrice MITRE ATT&CK et tri des flux d'événements SIEM.",
    exp2_title: "Sécurité Applicative (AppSec)",
    exp2_desc: "Audit statique (SAST) et dynamique (DAST) du code source, filtrage des payloads SQLi et XSS, développement PHP/HTML sécurisé et protection contre les vulnérabilités OWASP Top 10.",
    exp3_title: "Tests d'Intrusion & Audits de Vulnérabilités",
    exp3_desc: "Simulations offensives en environnement contrôlé (Kioptrix), énumération de ports (Nmap), vérification d'exploits (Metasploit), escalade de privilèges et rapports de remédiation.",
    exp4_title: "Durcissement Système & Risque EBIOS RM",
    exp4_desc: "Durcissement des baselines de configuration sous Linux et Windows Server, workflows de suivi des correctifs et cartographie des risques cybersécurité avec la méthode EBIOS RM (ANSSI).",

    // Labs / Case Studies
    labs_tag: "Portfolio Technique",
    labs_title: "Labs de Sécurité & Études de Cas",
    filter_all: "Tous les Labs",
    filter_soc: "SOC & Défense",
    filter_appsec: "AppSec & Code",
    filter_risk: "Risque & Pentest",
    btn_case_study: "Explorer l'Étude de Cas",

    // Timeline / Experience
    timeline_tag: "Parcours Professionnel",
    timeline_title: "Expériences & Stages",
    exp1_date: "2026 — PRÉSENT",
    exp1_status: "POSTE ACTUEL",
    exp1_role: "Stagiaire Analyste Cybersécurité",
    exp1_company: "Moov Africa · Direction Générale",
    exp1_desc: "Engagement opérationnel au sein du périmètre cybersécurité télécom :",
    exp1_bullet1: "Surveillance des flux télémétriques et tri des alertes de détection SIEM.",
    exp1_bullet2: "Résolution d'anomalies de périmètre et durcissement des configurations système.",
    exp1_bullet3: "Participation aux procédures de réponse aux incidents et rédactions de playbooks.",

    exp2_date: "AVR 2025 — JUL 2025",
    exp2_role: "Stagiaire Sécurité Informatique & Systèmes",
    exp2_company: "Université de Parakou",
    exp2_desc: "Maintenance des équipements réseau, diagnostics des postes de travail, déploiement des mises à jour de durcissement et soutien aux projets de digitalisation interne.",

    exp3_date: "JUIN 2024 — SEP 2024",
    exp3_role: "Stagiaire Développement Web & Base de Données",
    exp3_company: "OMEGA-TECH",
    exp3_desc: "Intégration de maquettes Figma vers des architectures WordPress réactives et sécurisation des requêtes de base de données SQL contre les injections.",

    // Certifications
    certs_tag: "Certifications Vérifiées",
    certs_title: "Diplômes Acquis & Certifications",
    certs_subtitle: "Cliquez sur n'importe quel certificat pour visualiser le document en aperçu modale sécurisée.",
    cert1_tag: "Diplôme Académique",
    cert1_title: "Licence en Informatique de Gestion (MIS)",
    cert1_school: "Université de Parakou (IUT) · Mention Bien",
    cert1_desc: "Diplôme national obtenu suite à la validation du cursus à l'Institut Universitaire de Technologie (IUT). Spécialisation Informatique de Gestion.",
    cert2_tag: "Parcours SOC Analyst",
    cert2_title: "Examen Cybersecurity Defense Analyst Pathway",
    cert2_school: "Cybastion IT Academy / Cisco",
    cert2_desc: "Validation des compétences avancées en surveillance réseau, réponse aux incidents et stratégies de remédiation en centre SOC.",
    cert3_tag: "Gouvernance des Risques",
    cert3_title: "Certification Risk Manager Club EBIOS",
    cert3_school: "Club EBIOS / ANSSI (Paris)",
    cert3_desc: "Validation officielle de l'expertise de la méthode EBIOS Risk Manager soutenue par l'ANSSI pour la cartographie des risques numériques.",
    cert4_tag: "Développement Web",
    cert4_title: "Attestation Programme DCLIC — Développement Web",
    cert4_school: "Organisation internationale de la Francophonie (OIF)",
    cert4_desc: "Certification attestant la maîtrise de l'architecture HTML5/CSS3, la programmation JavaScript et la sécurisation des échanges web.",
    cert_ongoing_title: "Certifications en Cours (Objectif 2026)",
    cert_ongoing_desc: "Cisco CCNA 1 (Introduction aux Réseaux) & Cisco Certified CyberOps Associate",
    btn_view_pdf: "Consulter PDF",

    // Skills Matrix
    skills_tag: "Matrice Technique",
    skills_title: "Compétences Techniques & Stack Sécurité",
    skill_cat1: "Sécurité Opérationnelle & AppSec",
    skill_cat2: "Réseaux & Développement",
    skill_cat3: "Systèmes & Outils",

    // Testimonials
    test_tag: "Recommandations",
    test_title: "Soutien Académique & Professionnel",

    // Contact
    contact_tag: "Prendre Contact",
    contact_title: "Sécurisons Vos Infrastructures Ensemble.",
    contact_desc: "Vous recherchez une analyste cybersécurité rigoureuse, du soutien en sécurité applicative ou une développeuse axée sur la sécurité ? Contactez-moi directement.",
    contact_email_lbl: "Email Professionnel",
    contact_wa_lbl: "Discussion WhatsApp Directe",
    contact_loc_lbl: "Localisation Opérationnelle",
    contact_loc_val: "Cotonou, Bénin · Disponible en Télétravail",
    form_name_lbl: "Votre Nom complet",
    form_email_lbl: "Adresse Email",
    form_msg_lbl: "Objectif / Détails de votre projet",
    form_submit_btn: "Envoyer le Message",
    form_success_title: "Message Transmis avec Succès",
    form_success_desc: "Merci. Perside étudiera votre demande et vous répondra sous 24 à 48h.",

    // Footer
    footer_copy: "© 2026 Perside DEGBE. Tous droits réservés. Vérifié GitHub Pages."
  },

  en: {
    // Nav
    nav_about: "About",
    nav_expertise: "Expertise",
    nav_labs: "Labs",
    nav_credentials: "Credentials",
    btn_cv: "Request CV",
    btn_talk: "Let's Talk",

    // Hero
    hero_badge: "Available for SOC & AppSec Opportunities",
    hero_title_name: "DEGBE",
    hero_tagline: "Cybersecurity Analyst · SOC · Application Security",
    hero_statement: '"I secure systems by understanding how they can be attacked." Combining practical experience in threat analysis (Zeek, MITRE ATT&CK), secure application development (PHP/HTML/SQL), and system hardening to protect corporate digital infrastructure.',
    hero_cta_labs: "View Security Labs",
    hero_cta_cv: "Request CV",
    hero_cta_talk: "Let's Talk",
    hero_spec_soc: "SOC / SIEM",
    hero_spec_appsec: "AppSec",
    hero_spec_pentest: "Pentesting",
    hero_spec_risk: "Risk Framework",

    // About
    about_tag: "Professional Positioning",
    about_title: "Security + Development + Infrastructure Engineering",
    about_p1: "Graduated with a Bachelor's Degree in Management Information Systems (Honors) from the Institut Universitaire de Technologie (IUT), University of Parakou, and trained at the École des Métiers du Numérique (EMN), Perside bridges the gap between offensive vulnerability discovery and defensive software engineering.",
    about_p2: "Currently operating as a Cybersecurity Analyst Intern at Moov Africa (Executive Management), she actively triages SIEM events, enforces security baseline configurations, audits web application code against OWASP Top 10 vulnerabilities, and performs structural threat risk assessments using ANSSI's EBIOS RM methodology.",
    about_triad1_title: "Defensive Security",
    about_triad1_desc: "SIEM triage, Zeek stream monitoring, MITRE ATT&CK analysis.",
    about_triad2_title: "AppSec & Code",
    about_triad2_desc: "OWASP Top 10 mitigation, SQLi & XSS sanitization in PHP/SQL.",
    about_triad3_title: "Infrastructure",
    about_triad3_desc: "Linux & Windows OS hardening, patch management & auditing.",

    // Stats
    stat1_val: "2+",
    stat1_label: "Years Experience",
    stat1_sub: "Telecom & Corporate Internships",
    stat2_val: "20+",
    stat2_label: "Security Labs & Audits",
    stat2_sub: "SOC, Pentest & AppSec",
    stat3_val: "5+",
    stat3_label: "Certifications & Diplomas",
    stat3_sub: "Degree (Honors), Cisco, EBIOS",
    stat4_val: "100%",
    stat4_label: "Defensive Focus",
    stat4_sub: "Systemic Threat Remediation",

    // Expertise
    exp_tag: "Core Domains",
    exp_title: "Technical Expertise & Defensive Pillars",
    exp_subtitle: "A disciplined approach combining continuous threat monitoring, application code shielding, offensive vulnerability testing, and secure infrastructure provision.",
    exp1_title: "SOC Operations & Threat Detection",
    exp1_desc: "Real-time security telemetry monitoring, log analysis, and network packet capture parsing (Zeek, Wireshark). Classifying attack TTPs using the MITRE ATT&CK framework and triaging SIEM event streams.",
    exp2_title: "Application Security (AppSec)",
    exp2_desc: "Static (SAST) and dynamic (DAST) source code auditing, SQL Injection and XSS payload filtration, secure PHP/HTML development, and shielding web applications against active OWASP Top 10 exploits.",
    exp3_title: "Penetration Testing & Vulnerability Assessment",
    exp3_desc: "Offensive security simulations executed in lab environments (Kioptrix), port enumeration (Nmap), exploit verification (Metasploit), privilege escalation path analysis, and detailed remediation reporting.",
    exp4_title: "Infrastructure Hardening & EBIOS RM Risk",
    exp4_desc: "Linux & Windows system baseline configuration hardening, patch tracking workflows, and strategic organizational cyber risk mapping using the ANSSI-certified EBIOS Risk Manager methodology.",

    // Labs / Case Studies
    labs_tag: "Technical Portfolio",
    labs_title: "Security Labs & Case Studies",
    filter_all: "All Labs",
    filter_soc: "SOC & DefOps",
    filter_appsec: "AppSec & Code",
    filter_risk: "Risk & Pentest",
    btn_case_study: "Explore Case Study",

    // Timeline / Experience
    timeline_tag: "Career Journey",
    timeline_title: "Professional Experience & Internships",
    exp1_date: "2026 — PRESENT",
    exp1_status: "CURRENT POSITION",
    exp1_role: "Cybersecurity Analyst Intern",
    exp1_company: "Moov Africa · Executive Corporate Security Management",
    exp1_desc: "Active operational engagement within the corporate telecommunications cybersecurity perimeter. Responsibilities include:",
    exp1_bullet1: "Monitoring real-time telemetry feeds and triaging incoming SIEM detection alerts.",
    exp1_bullet2: "Resolving architectural perimeter anomalies and enforcing baseline OS hardening controls.",
    exp1_bullet3: "Assisting in network incident triage and defensive threat mitigation playbooks.",

    exp2_date: "APR 2025 — JUL 2025",
    exp2_role: "IT & Systems Security Intern",
    exp2_company: "University of Parakou",
    exp2_desc: "Maintained infrastructure endpoints, conducted workstation diagnostics, deployed system hardening updates, and collaborated on internal digitization initiatives across departments.",

    exp3_date: "JUN 2024 — SEP 2024",
    exp3_role: "Web Development & Database Intern",
    exp3_company: "OMEGA-TECH",
    exp3_desc: "Engineered corporate web application layouts translating Figma blueprints into responsive WordPress environments. Hardened database layers using structured SQL input controls and sanitized backend application workflows.",

    // Certifications
    certs_tag: "Verified Credentials",
    certs_title: "Certifications & Academic Degrees",
    certs_subtitle: "Click on any official certificate card to view the document in a secure modal preview.",
    cert1_tag: "Academic Degree",
    cert1_title: "Bachelor's Degree in Management Information Systems",
    cert1_school: "Université de Parakou (IUT) · Graduated with Honors (Bien)",
    cert1_desc: "Official national degree awarded following successful curriculum completion at the Institut Universitaire de Technologie (IUT). Specialization in Informatique de Gestion (MIS).",
    cert2_tag: "SOC Analyst Path",
    cert2_title: "Cybersecurity Defense Analyst Pathway Exam",
    cert2_school: "Cybastion IT Academy / Cisco",
    cert2_desc: "Validation of advanced competencies in network security monitoring, incident response workflows, traffic data analysis, and mitigation strategies within a SOC ecosystem.",
    cert3_tag: "Risk Governance",
    cert3_title: "Club EBIOS Risk Manager Certification",
    cert3_school: "Club EBIOS / ANSSI (Paris)",
    cert3_desc: "Official validation of expertise regarding the EBIOS Risk Manager methodology supported by ANSSI. Attests operational capabilities in organizational risk mapping and governance.",
    cert4_tag: "Development",
    cert4_title: "DCLIC Program Attestation — Web Development",
    cert4_school: "Organisation internationale de la Francophonie (OIF)",
    cert4_desc: "Validates technical capabilities in semantic HTML5/CSS3 styling, core JavaScript programming, and web protocol fundamentals.",
    cert_ongoing_title: "Ongoing Certifications (Target 2026)",
    cert_ongoing_desc: "Cisco CCNA 1 (Introduction to Networks) & Cisco Certified CyberOps Associate",
    btn_view_pdf: "Modal PDF Preview",

    // Skills Matrix
    skills_tag: "Technical Matrix",
    skills_title: "Technical Skills & Security Stack",
    skill_cat1: "Security Ops & AppSec",
    skill_cat2: "Network & Development",
    skill_cat3: "Systems & Tools",

    // Testimonials
    test_tag: "Endorsements",
    test_title: "Academic & Professional Support",

    // Contact
    contact_tag: "Initiate Contact",
    contact_title: "Let's Secure Something Together.",
    contact_desc: "Looking for a cybersecurity analyst, application security support, or a security-minded developer for your organization? Reach out directly via email or secure chat.",
    contact_email_lbl: "Professional Email",
    contact_wa_lbl: "Direct WhatsApp Chat",
    contact_loc_lbl: "Operational Location",
    contact_loc_val: "Cotonou, Benin · Remote Availability",
    form_name_lbl: "Your Full Name",
    form_email_lbl: "Email Address",
    form_msg_lbl: "Project Objective / Inquiry Details",
    form_submit_btn: "Send Message",
    form_success_title: "Message Transmitted Successfully",
    form_success_desc: "Thank you. Perside will review your inquiry and respond within 24 to 48 business hours.",

    // Footer
    footer_copy: "© 2026 Perside DEGBE. All rights reserved. GitHub Pages Verified."
  }
};

function initLanguageSwitcher() {
  const langBtns = document.querySelectorAll('.lang-toggle-btn');
  setLanguage(currentLang);

  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      currentLang = currentLang === 'fr' ? 'en' : 'fr';
      setLanguage(currentLang);
    });
  });
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  const dict = translations[lang];

  document.querySelectorAll('.lang-toggle-btn').forEach(btn => {
    btn.innerHTML = `<span class="material-symbols-outlined text-sm" translate="no">language</span> <span class="font-mono text-xs font-bold tracking-wider">${lang === 'fr' ? '🌐 FR' : '🌐 EN'}</span>`;
    btn.setAttribute('title', lang === 'fr' ? 'Passer en Anglais (EN)' : 'Switch to French (FR)');
  });

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = dict[key];
      } else {
        el.innerHTML = dict[key];
      }
    }
  });

  document.documentElement.setAttribute('lang', lang);
}

/* --------------------------------------------------------------------------
   2. Theme Switching (White Light / Black Dark Mode)
   -------------------------------------------------------------------------- */
function initThemeToggle() {
  const toggleBtns = document.querySelectorAll('.theme-toggle-btn:not(.lang-toggle-btn)');
  
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme === 'light' || (!savedTheme && !prefersDark)) {
    setTheme('light');
  } else {
    setTheme('dark');
  }

  toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const isDark = document.documentElement.classList.contains('dark');
      setTheme(isDark ? 'light' : 'dark');
    });
  });
}

function setTheme(theme) {
  const toggleBtns = document.querySelectorAll('.theme-toggle-btn:not(.lang-toggle-btn)');
  
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    toggleBtns.forEach(btn => {
      btn.innerHTML = `<span class="material-symbols-outlined text-xl" translate="no">light_mode</span>`;
      btn.setAttribute('title', 'Switch to White Light Mode');
    });
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
    toggleBtns.forEach(btn => {
      btn.innerHTML = `<span class="material-symbols-outlined text-xl" translate="no">dark_mode</span>`;
      btn.setAttribute('title', 'Switch to Black Dark Mode');
    });
  }
}

/* --------------------------------------------------------------------------
   3. Scroll Spy & Navbar Behavior
   -------------------------------------------------------------------------- */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        current = sectionId;
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

function initStickyNavbar() {
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

function initMobileNav() {
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (toggleBtn && mobileMenu) {
    toggleBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      toggleBtn.classList.toggle('active');
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        toggleBtn.classList.remove('active');
      });
    });
  }
}

/* --------------------------------------------------------------------------
   4. SOC Telemetry Live Terminal Simulator
   -------------------------------------------------------------------------- */
function initSOCTerminal() {
  const terminalBody = document.getElementById('terminalLogs');
  if (!terminalBody) return;

  const logs = [
    { type: 'info', text: 'SOC Node Cotonou-01 telemetry stream active' },
    { type: 'success', text: 'Zeek Network Sensor live on eth0 [SPAN port 443]' },
    { type: 'info', text: 'Parsing traffic telemetry with MITRE ATT&CK heuristics' },
    { type: 'warn', text: 'Anomaly detected: Inbound payload check on /api/v1/telemed' },
    { type: 'success', text: 'AppSec Shield: SQLi & XSS payload sanitized successfully' },
    { type: 'info', text: 'EBIOS RM Risk Matrix status: COMPLIANT [ANSSI-2026]' },
    { type: 'success', text: 'Moov Africa Executive Perimeter: Baseline Hardened' },
    { type: 'info', text: 'System load nominal | Threat Level: LOW | Zero Breaches' }
  ];

  let index = 0;

  function appendLog() {
    const log = logs[index % logs.length];
    const timestamp = new Date().toLocaleTimeString('en-GB', { hour12: false });
    
    const line = document.createElement('div');
    line.className = 'log-line';
    line.innerHTML = `
      <span class="log-time">[${timestamp}]</span>
      <span class="log-tag ${log.type}">[${log.type.toUpperCase()}]</span>
      <span>${log.text}</span>
    `;

    terminalBody.appendChild(line);
    terminalBody.scrollTop = terminalBody.scrollHeight;

    if (terminalBody.children.length > 12) {
      terminalBody.removeChild(terminalBody.firstChild);
    }

    index++;
  }

  for (let i = 0; i < 4; i++) appendLog();
  setInterval(appendLog, 3500);
}

/* --------------------------------------------------------------------------
   5. Security Labs Filter
   -------------------------------------------------------------------------- */
function initLabFiltering() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.lab-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px) scale(0.95)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   6. Case Study & Certificate Modals (Bilingual & Embedded PDF Support)
   -------------------------------------------------------------------------- */
const caseStudyDataModal = {
  emn: {
    fr: {
      title: "EMN Machine : Simulation SOC & Détection Défensive",
      category: "Opérations SOC & Détection de Menaces",
      tools: ["Zeek SIEM", "Wireshark", "MITRE ATT&CK", "Durcissement Linux"],
      problem: "La détection de menaces en temps réel dans des réseaux non segmentés génère un bruit important qui peut masquer des mouvements latéraux d'attaquants.",
      investigation: "Déploiement de capteurs de flux Zeek sur les ports miroir (SPAN). Analyse des captures brutes pcap avec Wireshark pour isoler les balises de serveurs C2.",
      approach: "Cartographie des anomalies détectées sur la matrice MITRE ATT&CK (T1071 Protocoles Applicatifs). Conception de filtres d'alertes automatisés et durcissement des nœuds Linux.",
      result: "100% de taux de détection sur les séquences d'attaque simulées et rédaction de playbooks de réponse aux incidents."
    },
    en: {
      title: "EMN Machine: Defensive SOC Threat Monitoring",
      category: "SOC Operations & Threat Detection",
      tools: ["Zeek SIEM", "Wireshark", "MITRE ATT&CK", "Linux Hardening"],
      problem: "Real-time threat detection in unsegmented network environments often generates noise, masking stealth lateral movement and data exfiltration.",
      investigation: "Deployed Zeek stream sensors across subnet span ports. Analyzed raw pcap captures with Wireshark to map C2 beacon signatures.",
      approach: "Mapped detected anomalies to the MITRE ATT&CK matrix (T1071 Application Layer Protocol). Engineered automated alert filters and hardened Linux endpoints.",
      result: "Achieved 100% anomaly detection accuracy during simulated attack sequences and drafted standard incident response playbooks."
    }
  },
  telemed: {
    fr: {
      title: "Plateforme Télémédecine Sécurisée",
      category: "Sécurité Applicative & Protection OWASP",
      tools: ["HTML5", "PHP", "MySQL", "OWASP Top 10", "Filtrage des Entrées"],
      problem: "Les applications web de santé gérant des dossiers médicaux requièrent une protection maximale contre les injections SQL, XSS et le contrôle d'accès défaillant.",
      investigation: "Réalisation d'audits dynamiques (DAST) pour identifier les faiblesses dans le traitement des formulaires et les requêtes SQL.",
      approach: "Refactorisation du code avec des requêtes SQL préparées, intégration de jetons de sécurité CSRF, assainissement HTML et chiffrement des sessions.",
      result: "Zéro vulnérabilité critique ou élevée OWASP détectée lors des tests de contrôle; conformité et protection de la confidentialité des patients."
    },
    en: {
      title: "Secure Telemedicine Management Platform",
      category: "Application Security & OWASP Shielding",
      tools: ["HTML5", "PHP", "MySQL", "OWASP Top 10", "Input Sanitization"],
      problem: "Healthcare web applications handling sensitive patient medical records require robust defense against SQL Injection, XSS, and broken access controls.",
      investigation: "Performed dynamic application testing (DAST) to discover vulnerabilities in legacy web form submission handlers and database queries.",
      approach: "Refactored code using prepared SQL statements, implemented CSRF security tokens, added HTML input sanitization, and enforced session token encryption.",
      result: "Zero high or critical OWASP vulnerabilities identified during audit tests; successfully secured patient data privacy compliance."
    }
  },
  kioptrix: {
    fr: {
      title: "Kioptrix : Audit d'Intrusion & Escalade de Privilèges",
      category: "Tests d'Intrusion & Audit de Vulnérabilités",
      tools: ["Nmap", "Metasploit", "ExploitDB", "Linux", "Scripts PrivEsc"],
      problem: "Les serveurs avec des services non mis à jour représentent des points d'entrée privilégiés pour des intrusions non autorisées.",
      investigation: "Énumération complète avec Nmap identifiant des démons Apache/Samba vulnérables. Recherche de failles dans le noyau Linux.",
      approach: "Exécution de payloads contrôlés via Metasploit, obtention d'un accès shell bas privilège et exploitation locale du noyau pour obtenir l'accès root.",
      result: "Captures réussies des flags root et rédaction d'un rapport technique détaillé proposant un plan de correctifs et de durcissement."
    },
    en: {
      title: "Kioptrix Penetration Audit & Privilege Escalation",
      category: "Penetration Testing & Vulnerability Assessment",
      tools: ["Nmap", "Metasploit", "ExploitDB", "Linux", "PrivEsc Scripting"],
      problem: "Legacy web servers with outdated service daemons represent entry points for unauthorized network penetration and privilege escalation.",
      investigation: "Ran comprehensive Nmap service enumeration, identifying vulnerable Apache/Samba services. Explored local Linux kernel exploit pathways.",
      approach: "Executed controlled exploit payloads via Metasploit, obtained initial low-privilege shell access, and leveraged kernel exploits to escalate to root privileges.",
      result: "Successfully captured target root flags and delivered a detailed mitigation report detailing patch requirements and service hardening steps."
    }
  },
  ebios: {
    fr: {
      title: "Cartographie des Risques Cybersécurité EBIOS RM",
      category: "Gestion des Risques & Gouvernance",
      tools: ["EBIOS Risk Manager", "Méthode ANSSI", "Gouvernance SMSI"],
      problem: "Les projets de transformation numérique des entreprises manquent souvent d'une cartographie structurée des scénarios de menaces.",
      investigation: "Identification des valeurs métier fondamentales, des biens supports essentiels et analyse de la motivation des sources de risques.",
      approach: "Élaboration de scénarios stratégiques selon la méthode EBIOS RM de l'ANSSI, évaluation de la vraisemblance/impact et conception d'une matrice de mesures de sécurité.",
      result: "Feuille de route opérationnelle de remédiation alignant le système d'information avec les exigences nationales de cybersécurité."
    },
    en: {
      title: "EBIOS RM Cyber Risk Blueprint",
      category: "Risk Management & Security Governance",
      tools: ["EBIOS Risk Manager", "ANSSI Framework", "ISMS Governance"],
      problem: "Enterprise digital transformation initiatives face complex threat actors without structured risk scenario mapping.",
      investigation: "Identified core organizational business values, essential asset dependencies, and potential adversary motivation profiles.",
      approach: "Formulated strategic risk scenarios based on the French ANSSI EBIOS RM methodology, evaluated risk impact likelihoods, and designed security control matrices.",
      result: "Delivered an actionable organizational risk roadmap aligning IT operations with national cybersecurity compliance standards."
    }
  }
};

/* Certificate Modal Previews Data */
const certDataModal = {
  bac: {
    fr: {
      title: "Licence en Informatique de Gestion (MIS)",
      school: "Université de Parakou (IUT) · Mention Bien",
      date: "15 FÉV 2026",
      pdf: "assets/docs/Diplome_Bac_Perside_DEGBE.pdf"
    },
    en: {
      title: "Bachelor's Degree in Management Information Systems",
      school: "Université de Parakou (IUT) · Graduated with Honors (Bien)",
      date: "FEB 15, 2026",
      pdf: "assets/docs/Diplome_Bac_Perside_DEGBE.pdf"
    }
  },
  cisco: {
    fr: {
      title: "Examen Cybersecurity Defense Analyst Pathway",
      school: "Cybastion IT Academy / Cisco",
      date: "08 JUIN 2026",
      id: "857a2a27-0c94-4d87-ac26-ecd22ec8e2ce",
      pdf: "assets/docs/Certificat_Cisco_Cybersecurity_Defense_Analyst.pdf"
    },
    en: {
      title: "Cybersecurity Defense Analyst Pathway Exam",
      school: "Cybastion IT Academy / Cisco",
      date: "JUN 08, 2026",
      id: "857a2a27-0c94-4d87-ac26-ecd22ec8e2ce",
      pdf: "assets/docs/Certificat_Cisco_Cybersecurity_Defense_Analyst.pdf"
    }
  },
  ebios: {
    fr: {
      title: "Certification Risk Manager Club EBIOS",
      school: "Club EBIOS / ANSSI (Paris)",
      date: "13 JUIL 2026",
      pdf: "assets/docs/Certificat_Club_Ebios.pdf"
    },
    en: {
      title: "Club EBIOS Risk Manager Certification",
      school: "Club EBIOS / ANSSI (Paris)",
      date: "JUL 13, 2026",
      pdf: "assets/docs/Certificat_Club_Ebios.pdf"
    }
  },
  dclic: {
    fr: {
      title: "Attestation Programme DCLIC — Développement Web",
      school: "Organisation internationale de la Francophonie (OIF)",
      date: "17 SEP 2025",
      id: "rA9IF8O44k",
      pdf: "assets/docs/Attestation_DCLIC_OIF.pdf"
    },
    en: {
      title: "DCLIC Program Attestation — Web Development",
      school: "Organisation internationale de la Francophonie (OIF)",
      date: "SEP 17, 2025",
      id: "rA9IF8O44k",
      pdf: "assets/docs/Attestation_DCLIC_OIF.pdf"
    }
  }
};

function initModals() {
  const modalBackdrop = document.getElementById('caseStudyModal');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const modalBody = document.getElementById('modalBody');

  // Case Study Triggers
  document.querySelectorAll('[data-case-study]').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const id = trigger.getAttribute('data-case-study');
      const item = caseStudyDataModal[id];
      const data = item ? item[currentLang] : null;

      if (data && modalBackdrop && modalBody) {
        modalBody.innerHTML = `
          <div class="p-6 md:p-8 space-y-6">
            <div class="flex items-center justify-between border-b border-[var(--border-subtle)] pb-4">
              <div>
                <span class="text-xs font-mono uppercase tracking-widest text-[var(--cyan-primary)] font-bold">${data.category}</span>
                <h3 class="text-2xl font-bold mt-1 text-[var(--text-primary)]">${data.title}</h3>
              </div>
            </div>

            <div class="flex flex-wrap gap-2">
              ${data.tools.map(tool => `<span class="px-3 py-1 bg-blue-500/10 text-[var(--cyan-primary)] text-xs font-mono rounded-full border border-blue-500/20">${tool}</span>`).join('')}
            </div>

            <div class="space-y-4 text-sm leading-relaxed text-[var(--text-secondary)]">
              <div class="cyber-card p-4">
                <h4 class="text-xs font-bold uppercase tracking-wider text-rose-500 mb-1">01. ${currentLang === 'fr' ? 'Problématique' : 'Problem Statement'}</h4>
                <p>${data.problem}</p>
              </div>

              <div class="cyber-card p-4">
                <h4 class="text-xs font-bold uppercase tracking-wider text-amber-500 mb-1">02. ${currentLang === 'fr' ? 'Investigation & Analyse' : 'Investigation & Analysis'}</h4>
                <p>${data.investigation}</p>
              </div>

              <div class="cyber-card p-4">
                <h4 class="text-xs font-bold uppercase tracking-wider text-blue-500 mb-1">03. ${currentLang === 'fr' ? 'Approche Technique' : 'Technical Approach'}</h4>
                <p>${data.approach}</p>
              </div>

              <div class="cyber-card p-4">
                <h4 class="text-xs font-bold uppercase tracking-wider text-emerald-500 mb-1">04. ${currentLang === 'fr' ? 'Résultats & Impact' : 'Key Results & Impact'}</h4>
                <p>${data.result}</p>
              </div>
            </div>
          </div>
        `;

        modalBackdrop.classList.add('open');
      }
    });
  });

  // Certificate Modal Preview Triggers
  document.querySelectorAll('[data-cert-preview]').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const id = trigger.getAttribute('data-cert-preview');
      const item = certDataModal[id];
      const data = item ? item[currentLang] : null;

      if (data && modalBackdrop && modalBody) {
        modalBody.innerHTML = `
          <div class="p-6 md:p-8 space-y-6">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[var(--border-subtle)] pb-4">
              <div>
                <span class="status-badge emerald text-[10px] mb-2"><span class="status-pulse"></span> ${currentLang === 'fr' ? 'CERTIFICAT VÉRIFIÉ' : 'VERIFIED CREDENTIAL'}</span>
                <h3 class="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mt-1">${data.title}</h3>
                <p class="text-xs font-mono text-[var(--cyan-primary)] mt-1">${data.school} &middot; ${data.date}</p>
                ${data.id ? `<div class="text-[11px] font-mono text-[var(--text-muted)] mt-1">ID: ${data.id}</div>` : ''}
              </div>

              <a href="${data.pdf}" download class="btn-primary text-xs self-start sm:self-auto">
                <span class="material-symbols-outlined text-base" translate="no">download</span> ${currentLang === 'fr' ? 'Télécharger PDF' : 'Download PDF'}
              </a>
            </div>

            <!-- Security & Anti-Forgery Notice -->
            <div class="p-3 bg-amber-500/10 border border-amber-500/30 rounded-lg text-amber-300 text-xs flex items-center gap-2">
              <span class="material-symbols-outlined text-base flex-shrink-0" translate="no">security</span>
              <span>${currentLang === 'fr' 
                ? 'Document sous filigrane numérique à titre de spécimen. Toute contrefaçon, altération ou réemploi visuel est strictement interdit.' 
                : 'Digitally watermarked specimen document. Unauthorised copying, alteration or visual reuse is strictly prohibited.'}</span>
            </div>

            <!-- Embedded PDF Viewer -->
            <div class="w-full rounded-xl overflow-hidden border border-[var(--border-subtle)] bg-slate-900 shadow-2xl">
              <iframe src="${data.pdf}" class="w-full h-[60vh] sm:h-[68vh]" title="${data.title}"></iframe>
            </div>
          </div>
        `;

        modalBackdrop.classList.add('open');
      }
    });
  });

  if (closeModalBtn && modalBackdrop) {
    closeModalBtn.addEventListener('click', () => {
      modalBackdrop.classList.remove('open');
    });

    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        modalBackdrop.classList.remove('open');
      }
    });
  }
}

/* --------------------------------------------------------------------------
   7. Testimonial Slider
   -------------------------------------------------------------------------- */
function initTestimonialSlider() {
  const track = document.getElementById('testimonialTrack');
  const prevBtn = document.getElementById('prevTestimonial');
  const nextBtn = document.getElementById('nextTestimonial');

  if (!track || !prevBtn || !nextBtn) return;

  let currentIdx = 0;

  function updateSlide() {
    const cardWidth = track.firstElementChild.offsetWidth + 24;
    track.style.transform = `translateX(-${currentIdx * cardWidth}px)`;
  }

  nextBtn.addEventListener('click', () => {
    const maxIdx = track.children.length - (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1);
    if (currentIdx < maxIdx) {
      currentIdx++;
      updateSlide();
    }
  });

  prevBtn.addEventListener('click', () => {
    if (currentIdx > 0) {
      currentIdx--;
      updateSlide();
    }
  });

  window.addEventListener('resize', () => {
    currentIdx = 0;
    updateSlide();
  });
}

/* --------------------------------------------------------------------------
   8. Premium Scroll Reveal Observer
   -------------------------------------------------------------------------- */
function initScrollReveal() {
  const reveals = document.querySelectorAll('[data-reveal]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  reveals.forEach(el => observer.observe(el));
}

/* --------------------------------------------------------------------------
   9. Contact Form Handling
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const successMsg = document.getElementById('contactSuccess');

  if (form && successMsg) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Anti-bot honeypot check
      const honeypot = document.getElementById('contact_honeypot')?.value;
      if (honeypot) {
        // Silently reject bot submission
        console.warn('Bot submission blocked via honeypot.');
        return;
      }

      const name = document.getElementById('contactName').value.trim();
      const email = document.getElementById('contactEmail').value.trim();
      const message = document.getElementById('contactMessage').value.trim();

      if (name && email && message) {
        form.classList.add('hidden');
        successMsg.classList.remove('hidden');
      }
    });
  }
}
