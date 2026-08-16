# 🛡️ CYBERSEC.PRO — Portfolio Perside DEGBE

> **Analyste Cybersécurité | Spécialiste SOC & Sécurité Applicative (AppSec)**

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Langues](https://img.shields.io/badge/Langues-FR%20%7C%20EN-blue?style=for-the-badge)
![Statut](https://img.shields.io/badge/Statut-Actif-emerald?style=for-the-badge)

---

## 📌 À Propos du Projet

**CYBERSEC.PRO** est le portfolio professionnel et interactif de **Perside DEGBE**, Analyste Cybersécurité spécialisée dans les **Opérations SOC**, la **Sécurité Applicative (AppSec)**, les **Tests d'Intrusion** et l'analyse de risques avec la méthode **EBIOS RM (ANSSI)**.

Conçu avec une esthétique Cyber moderne (dark/light theme, effets néon, télémétrie interactive), ce site met en avant ses compétences théoriques et pratiques, ses études de cas d'ingénierie, ainsi que ses diplômes et certifications téléchargeables.

🌐 **Site Web / Déploiement :** [https://perside18.github.io/portfolio/](https://perside18.github.io/portfolio/)

---

## ✨ Fonctionnalités Clés

* **💻 Terminal Télémétrique SOC Interactif :** Simulation en direct d'un flux de logs de détection SOC/SIEM (Zeek, règles MITRE ATT&CK, assainissement de requêtes OWASP).
* **🌐 Système Bilingue (FR / EN) :** Moteur d'internationalisation côté client léger en JavaScript avec sauvegarde de la préférence linguistique via `localStorage`.
* **🌓 Thème Dynamique (Sombre Cyber / Clair) :** Bascule instantanée entre un mode sombre haute lisibilité et un mode clair épuré grâce aux variables CSS dynamiques.
* **🔬 Catalogue de Labs & Études de Cas :** Filtrage dynamique par catégorie (*Tous*, *SOC & Défense*, *AppSec & Code*, *Risque & Pentest*) avec ouverture de modales d'études de cas détaillées.
* **📜 Visionneuse de Diplômes & Certifications :** Fenêtres modales interactives permettant de consulter les aperçus certifiés des diplômes académiques et attestations techniques.
* **📱 Conception Fully Responsive & Accessible :** Menu hamburger animé personnalisé, navigation fluide (*scroll-smooth*) et animations d'apparition progressive (*scroll reveal*).
* **✉️ Formulaire de Contact avec Validation :** Interface de prise de contact directe et téléchargement du CV au format PDF.

---

## 🛠️ Stack Technique & Architecture

### **Technologies Frontend**
* **HTML5 Semantic & SEO Meta Tags** : Structure optimisée pour les moteurs de recherche et balises OpenGraph.
* **Tailwind CSS (via CDN) & Custom CSS (`style.css`, `responsive.css`, `animations.css`)** : Système de design propriétaire basé sur des tokens de couleurs HSL/HEX.
* **Vanilla JavaScript ES6+** : Gestion des interactions sans dépendance externe lourde (`app.js`, `animations.js`, `navigation.js`, `main.js`).
* **Typographies & Iconographie** : Fonts Google (*Outfit*, *Inter*, *Fira Code*) et *Material Symbols Outlined*.

### **Compétences & Outils Cybersécurité Présentés**
* **SOC & Détection de Menaces :** Zeek, Wireshark, SIEM Log Analysis, Matrice MITRE ATT&CK.
* **Sécurité Applicative (AppSec) :** Audits OWASP Top 10, assainissement SQLi & XSS, développement sécurisé (PHP / SQL / HTML).
* **Audit & Pentest :** Nmap, Kioptrix Labs, Metasploit, Escalade de Privilèges, Rédaction de Rapports de Remédiation.
* **Gestion des Risques & Durcissement :** Méthodologie EBIOS RM (ANSSI), Baselines de Sécurité Linux & Windows Server, Gestion des Correctifs.

---

## 📁 Structure du Répertoire

```text
portfolio/
├── index.html                # Page principale du portfolio (Structure & Contenu FR/EN)
├── css/
│   ├── animations.css        # Animations CSS (Glow, Pulse, Modales)
│   ├── responsive.css        # Adaptations media queries pour tous écrans
│   └── style.css             # Design System principal & Variables de Thème
├── js/
│   ├── animations.js        # Gestion des animations d'apparition au défilement
│   ├── app.js               # Logique applicative (Terminal SOC, i18n, Modales, Filtres)
│   ├── main.js              # Point d'entrée principal
│   └── navigation.js        # Contrôle de la barre de navigation & menu mobile
├── assets/
│   ├── docs/                # Attestations et CV téléchargeables (PDF)
│   │   ├── CV_Perside_DEGBE.pdf
│   │   ├── Certificat_Cisco_Cybersecurity_Defense_Analyst.pdf
│   │   ├── Certificat_Club_Ebios.pdf
│   │   ├── Attestation_DCLIC_OIF.pdf
│   │   └── Diplome_Bac_Perside_DEGBE.pdf
│   └── images/              # Images de profil, aperçus des certifs et illustrations de labs
├── robots.txt                # Directive pour les robots d'indexation
└── sitemap.xml               # Plan du site pour l'optimisation SEO
```

---

## 🚀 Installation & Lancement Local

Ce projet ne nécessite aucune étape de compilation lourde (*zero build step*). Il s'exécute directement dans n'importe quel navigateur web moderne.

### **Méthode 1 : Avec Live Server (VS Code)**
1. Clonez le dépôt git :
   ```bash
   git clone https://github.com/perside18/portfolio.git
   ```
2. Ouvrez le dossier `portfolio` dans VS Code.
3. Faites un clic droit sur `index.html` et sélectionnez **Open with Live Server**.

### **Méthode 2 : Avec Python (HTTP Server)**
```bash
git clone https://github.com/perside18/portfolio.git
cd portfolio
python -m http.server 8000
```
Puis ouvrez votre navigateur à l'adresse : `http://localhost:8000`

### **Méthode 3 : Avec Node.js (`npx serve`)**
```bash
cd portfolio
npx serve .
```

---

## 🎓 Diplômes & Certifications Présentés

* 🎓 **Licence en Informatique de Gestion (Mention Bien)** — *IUT de l'Université de Parakou*
* 🛡️ **Cisco Cybersecurity Defense Analyst** — *Cisco Networking Academy*
* 📋 **Méthode EBIOS Risk Manager (ANSSI)** — *Club EBIOS*
* 💻 **Certificat D-CLIC Numérique** — *Organisation Internationale de la Francophonie (OIF)*

---

## 👤 Auteur & Contacts

**Perside DEGBE**
* **Rôle :** Analyste Cybersécurité & Spécialiste SOC
* **GitHub :** [@perside18](https://github.com/perside18)
* **LinkedIn :** [Perside DEGBE](https://linkedin.com/in/perside-degbe)
* **Portfolio en ligne :** [perside18.github.io/portfolio](https://perside18.github.io/portfolio/)

---

*© 2026 Perside DEGBE. Tous droits réservés. Développé avec passion pour la Cybersécurité.*
