'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('theme');
      if (saved) setDark(saved === 'dark');
      else if (window.matchMedia('(prefers-color-scheme: dark)').matches) setDark(true);
    } catch (e) {}
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    try { localStorage.setItem('theme', dark ? 'dark' : 'light'); } catch (e) {}
  }, [dark]);

  const skills = [
    "HTML", "CSS", "JavaScript", "PHP", "Python",
    "React", "Node.js", "Bootstrap", "Tailwind CSS",
    "MongoDB", "MySQL", "Flutter (notions)",
    "Java", "Sage", "Visual Studio Code", "Thonny",
    "Docker", "Docker Compose", "Backstage", "GitHub",
    "CI/CD", "Linux"
  ];

  const projects = [
    {
      number: "01",
      title: "Application de gestion des stages",
      type: "PROJET DE FIN D'ÉTUDES · TUNISIAR · 2025",
      description: "Conception et développement d'une application web pour gérer le processus de recrutement des stagiaires.",
      details: [
        "Demande de stage et gestion RH",
        "QCM, entretien et affectation d'un encadrant",
        "Notifications automatiques par e-mail",
        "Messagerie et simulation d'attestations électroniques"
      ],
      tags: ["React", "Node.js", "MySQL"]
    },
    {
      number: "02",
      title: "Application de gestion des congés",
      type: "STAGE DE PERFECTIONNEMENT · 2024",
      description: "Développement d'une application permettant aux collaborateurs de soumettre et suivre leurs demandes de congé.",
      details: [
        "Soumission des demandes par PNC et DRA",
        "Validation ou refus par l'administrateur",
        "Notifications par e-mail"
      ],
      tags: ["React", "Node.js", "MongoDB"]
    },
    {
      number: "03",
      title: "Portfolio personnel avec Backstage",
      type: "PROJET ACADÉMIQUE · DEVOPS",
      description: "Création d'un portail développeur pour automatiser la génération et l'industrialisation d'un portfolio Next.js.",
      details: [
        "Template de création de projet",
        "Intégration GitHub et Docker",
        "Automatisation CI/CD"
      ],
      tags: ["Next.js", "Backstage", "Docker", "GitHub Actions"]
    },
    {
      number: "04",
      title: "Conteneurisation d'application",
      type: "PROJET ACADÉMIQUE · DEVOPS",
      description: "Travail sur la conteneurisation et le déploiement d'applications web.",
      details: [
        "Création d'images Docker",
        "Configuration Docker Compose",
        "Préparation du déploiement"
      ],
      tags: ["Docker", "Docker Compose", "Linux"]
    }
  ];

  const experiences = [
    {
      date: "FÉVRIER – MAI 2025",
      title: "Stage PFE — Tunisiar",
      description: "Développement d'une application web de gestion des stages et des stagiaires avec React, Node.js et MySQL."
    },
    {
      date: "2024 · 1 MOIS",
      title: "Stage de perfectionnement — Tunisiar",
      description: "Développement d'une application de gestion des congés avec React, Node.js et MongoDB."
    },
    {
      date: "STAGE D'INITIATION",
      title: "Stage d'initiation — Telecom",
      description: "Découverte de l'environnement professionnel et du domaine des télécommunications."
    }
  ];

  const certifications = [
    "Digital Oasien Tourism",
    "Marketing Digital",
    "Design Thinking",
    "Hackathon",
    "Techniques de Communication",
    "Entrepreneuriat Féminin"
  ];

  return (
    <main>
      <style jsx global>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body {
          margin: 0;
          background: #fff7f9;
          color: #54243f;
          font-family: Georgia, 'Times New Roman', serif;
        }
        a { color: inherit; text-decoration: none; }
        button { font-family: inherit; }
        .wrap { width: min(1160px, 90%); margin: auto; }

        .nav {
          min-height: 86px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          position: relative;
          z-index: 5;
        }
        .brand {
          font-family: Georgia, serif;
          font-size: 35px;
          font-style: italic;
          color: #963e6b;
          white-space: nowrap;
          letter-spacing: -3px;
        }
        .brand small {
          font-size: 17px;
          vertical-align: top;
          margin-left: 3px;
        }
        .links {
          display: flex;
          gap: 25px;
          flex-wrap: wrap;
          justify-content: center;
          color: #633d54;
          font-size: 14px;
        }
        .links a:hover { color: #d15e91; }
        .nav-btn, .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          border-radius: 40px;
          padding: 14px 23px;
          background: #d96f9b;
          color: white;
          font-size: 14px;
          border: 1px solid #d96f9b;
          box-shadow: 0 8px 22px #d96f9b30;
          transition: .25s;
        }
        .nav-btn:hover, .btn:hover {
          transform: translateY(-3px);
          background: #bd527f;
        }

        .hero {
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(ellipse at 85% 45%, #f8d9e6 0%, transparent 40%),
            radial-gradient(ellipse at 10% 15%, #fbe2eb 0%, transparent 40%),
            linear-gradient(120deg, #fff5f8, #fffafb 55%, #fce7ef);
          min-height: 570px;
          padding: 55px 0 75px;
          border-radius: 0 0 35px 35px;
        }
        .hero:before {
          content: '';
          position: absolute;
          width: 700px;
          height: 240px;
          right: -120px;
          bottom: -150px;
          border-radius: 50%;
          background: #f5cbdc80;
          transform: rotate(-12deg);
        }
        .hero:after {
          content: '✿';
          position: absolute;
          right: 5%;
          bottom: 35px;
          color: #d77da3;
          font-size: 95px;
          opacity: .45;
        }
        .hero-grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1.15fr .85fr;
          align-items: center;
          gap: 55px;
        }
        .hello {
          display: inline-block;
          padding: 13px 23px;
          background: #f9e0e9;
          border-radius: 35px;
          box-shadow: 0 8px 20px #c77d9b25;
          font-size: 18px;
          margin-bottom: 18px;
        }
        .hero h1 {
          font-size: clamp(48px, 7vw, 82px);
          line-height: 1.05;
          letter-spacing: -3px;
          margin: 10px 0;
          color: #54213e;
        }
        .hero h1 span { color: #d46d98; }
        .hero h2 {
          font-size: clamp(25px, 3vw, 36px);
          margin: 15px 0 20px;
          color: #63324d;
        }
        .hero-description {
          font-size: 23px;
          font-style: italic;
          line-height: 1.65;
          color: #985477;
          max-width: 570px;
        }
        .hero-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
          margin-top: 28px;
        }
        .btn-outline {
          background: transparent;
          color: #783d5b;
          border: 1px solid #d96f9b;
          box-shadow: none;
        }
        .btn-outline:hover { color: white; }
        .photo-area {
          position: relative;
          width: min(350px, 100%);
          margin: auto;
        }
        .portrait {
          width: 100%;
          height: 430px;
          border: 7px solid white;
          border-radius: 100px 100px 65px 65px;
          overflow: hidden;
          box-shadow: 0 18px 50px #a64e7730;
          background: #f4dce6;
          transform: rotate(1deg);
        }
        .portrait img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
        }
        .photo-flower {
          position: absolute;
          z-index: 2;
          color: #d46d98;
          font-size: 65px;
          right: -38px;
          top: 30px;
        }
        .photo-note {
          position: absolute;
          bottom: -20px;
          left: 15%;
          padding: 14px 20px;
          background: #fffafd;
          border-radius: 30px;
          box-shadow: 0 8px 25px #a64e7725;
          font-size: 13px;
          white-space: nowrap;
        }
        .photo-note span { color: #55ad78; margin-right: 7px; }

        .section {
          padding: 78px 0;
          scroll-margin-top: 20px;
        }
        .section-title { text-align: center; margin-bottom: 38px; }
        .eyebrow {
          color: #c46b91;
          font-size: 12px;
          font-weight: bold;
          letter-spacing: 2px;
          text-transform: uppercase;
        }
        .section-title h2 {
          font-size: clamp(31px, 4vw, 43px);
          margin: 10px 0;
          color: #642d4b;
        }
        .section-title p {
          color: #927187;
          font-size: 16px;
          line-height: 1.7;
        }
        .about-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }
        .about-card {
          background: linear-gradient(135deg, #fffafd, #f9e9f0);
          border: 1px solid #f1dce6;
          padding: 25px;
          border-radius: 28px;
          display: flex;
          align-items: center;
          gap: 17px;
          min-height: 115px;
          box-shadow: 0 8px 25px #b96c8c0b;
        }
        .about-icon {
          flex-shrink: 0;
          width: 58px;
          height: 58px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: #f6dce7;
          color: #a94775;
          font-size: 26px;
        }
        .about-card p { line-height: 1.6; margin: 0; }
        .about-text {
          max-width: 850px;
          margin: 0 auto 30px;
          text-align: center;
          color: #806579;
          line-height: 1.9;
          font-size: 16px;
        }

        .skills {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px;
        }
        .skill {
          background: #fffafd;
          color: #854563;
          border: 1px solid #edcbd9;
          border-radius: 30px;
          padding: 13px 19px;
          font-size: 14px;
          box-shadow: 0 5px 15px #c77d9b10;
          transition: .2s;
        }
        .skill:hover {
          background: #d96f9b;
          color: white;
          transform: translateY(-3px);
        }

        .projects {
          background: #fffafd;
          border-radius: 35px;
        }
        .project-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        .project {
          padding: 28px;
          border-radius: 25px;
          border: 1px solid #f0dce5;
          background: linear-gradient(145deg, #fff, #fff5f8);
          box-shadow: 0 10px 30px #b96c8c0c;
          transition: .25s;
        }
        .project:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px #b96c8c20;
          border-color: #d995b1;
        }
        .project-no { color: #d16b96; font-size: 25px; font-style: italic; }
        .project-type {
          color: #b16e8c;
          font-size: 10px;
          letter-spacing: 1.2px;
          margin-top: 15px;
        }
        .project h3 { font-size: 22px; color: #63304d; }
        .project p, .project li {
          color: #806b79;
          font-size: 14px;
          line-height: 1.8;
        }
        .project ul { padding-left: 20px; }
        .tags { display: flex; flex-wrap: wrap; gap: 7px; margin-top: 18px; }
        .tag {
          color: #a04d75;
          background: #f7e3ec;
          border-radius: 20px;
          padding: 7px 12px;
          font-size: 11px;
        }

        .timeline {
          max-width: 820px;
          margin: auto;
          border-left: 2px solid #e9bfd0;
          padding-left: 30px;
        }
        .item { position: relative; padding: 0 0 32px; }
        .item:before {
          content: '✿';
          position: absolute;
          left: -43px;
          top: -4px;
          color: #d16b96;
          font-size: 20px;
        }
        .item-date {
          color: #bd648c;
          font-size: 12px;
          font-weight: bold;
          letter-spacing: 1px;
        }
        .item h3 { color: #63304d; font-size: 21px; margin: 9px 0; }
        .item p { color: #806b79; line-height: 1.8; font-size: 14px; }

        .cert-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }
        .cert {
          padding: 22px;
          background: #fffafd;
          border: 1px solid #efd6e1;
          border-radius: 20px;
          color: #78445f;
          text-align: center;
          box-shadow: 0 7px 20px #b96c8c0b;
        }
        .cert span { display: block; color: #d16b96; font-size: 24px; margin-bottom: 9px; }

        .languages {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 15px;
        }
        .language {
          padding: 23px;
          text-align: center;
          background: #fffafd;
          border: 1px solid #efd6e1;
          border-radius: 20px;
        }
        .language strong { display: block; margin-bottom: 8px; color: #713d58; }
        .language span { color: #9a7b8c; font-size: 13px; }

        .contact-box {
          padding: 45px;
          text-align: center;
          background: linear-gradient(120deg, #f9e2eb, #fff5f8, #f5dce7);
          border: 1px solid #edcfdd;
          border-radius: 30px;
        }
        .contact-box h2 { font-size: 35px; color: #642d4b; }
        .contact-box p { color: #806579; line-height: 1.8; }
        .contact-list {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 15px 25px;
          margin: 25px 0;
          color: #75445e;
          font-size: 14px;
        }
        footer {
          padding: 30px 0;
          text-align: center;
          color: #a17e91;
          font-size: 12px;
        }

        .theme-toggle {
          background: transparent;
          color: #783d5b;
          border: 1px solid #d96f9b;
          border-radius: 30px;
          padding: 8px 16px;
          font-size: 13px;
          cursor: pointer;
          transition: .2s;
        }
        .theme-toggle:hover { background: #d96f9b; color: white; }

        html.dark body { background: #1b1220; color: #f1dce8; }
        html.dark .brand { color: #f0a3c4; }
        html.dark .links { color: #e6c3d4; }
        html.dark .theme-toggle { color: #f0b3cf; }
        html.dark .theme-toggle:hover { color: white; }
        html.dark .hero {
          background:
            radial-gradient(ellipse at 85% 45%, #3a1f33 0%, transparent 40%),
            radial-gradient(ellipse at 10% 15%, #2e1829 0%, transparent 40%),
            linear-gradient(120deg, #1b1220, #21142a 55%, #2a1730);
        }
        html.dark .hero:before { background: #4a2a4580; }
        html.dark .hero h1, html.dark .hero h2, html.dark .section-title h2,
        html.dark .contact-box h2, html.dark .project h3, html.dark .item h3 { color: #fbe6f0; }
        html.dark .hero-description, html.dark .section-title p, html.dark .about-text,
        html.dark .project p, html.dark .project li, html.dark .item p,
        html.dark .contact-box p, html.dark .contact-list, html.dark footer { color: #cfa9bc; }
        html.dark .hello, html.dark .tag, html.dark .about-icon { background: #3a2036; color: #f0b3cf; }
        html.dark .about-card, html.dark .skill, html.dark .project, html.dark .cert,
        html.dark .language, html.dark .projects, html.dark .photo-note {
          background: #26172c;
          border-color: #43284a;
          color: #eed3e0;
        }
        html.dark .project-type, html.dark .language span { color: #c68aa8; }
        html.dark .language strong { color: #f0d3e1; }
        html.dark .contact-box {
          background: linear-gradient(120deg, #2b1832, #21142a, #2f1b36);
          border-color: #4a2c52;
        }
        html.dark .timeline { border-left-color: #5a3560; }
        html.dark .btn-outline { color: #f0b3cf; }
        html.dark .btn-outline:hover { color: white; }

        @media(max-width: 850px) {
          .nav { flex-wrap: wrap; padding: 18px 0; }
          .links { order: 3; width: 100%; gap: 15px; }
          .hero-grid { grid-template-columns: 1fr; text-align: center; }
          .hero-description { margin-left: auto; margin-right: auto; }
          .hero-buttons { justify-content: center; }
          .photo-area { margin-top: 25px; }
          .about-grid { grid-template-columns: 1fr; }
          .project-grid { grid-template-columns: 1fr; }
          .cert-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media(max-width: 520px) {
          .nav-btn { padding: 11px 14px; font-size: 12px; }
          .links { font-size: 12px; gap: 12px; }
          .hero { padding-top: 35px; }
          .portrait { height: 350px; }
          .hero-description { font-size: 19px; }
          .cert-grid, .languages { grid-template-columns: 1fr; }
          .contact-box { padding: 25px 17px; }
          .photo-note { left: 2%; font-size: 11px; }
        }
      `}</style>

      <header className="wrap nav">
        <a className="brand" href="#home">HF<small>🎀</small></a>
        <nav className="links">
          <a href="#about">À propos</a>
          <a href="#skills">Compétences</a>
          <a href="#projects">Projets</a>
          <a href="#devops">DevOps &amp; Cloud</a>
          <a href="#experience">Expériences</a>
          <a href="#certificates">Certifications</a>
          <a href="#languages">Langues</a>
          <a href="#contact">Contact</a>
          <button type="button" className="theme-toggle" onClick={() => setDark(!dark)}>
            {dark ? 'Mode clair' : 'Mode sombre'}
          </button>
        </nav>
        <a className="nav-btn" href="/CV_Hyba_Farhat.pdf" download>↓ Télécharger CV</a>
      </header>

      <section className="hero" id="home">
        <div className="wrap hero-grid">
          <div>
            <p className="eyebrow">Master en DevOps · Tozeur · Tunisie</p>
            <h1>Hyba Farhat<br /><span>Future DevOps Engineer.</span></h1>
            <p className="hero-description">
              Diplômée en Technologie de l&apos;Informatique, spécialité Développement
              des Systèmes d&apos;Information, et actuellement étudiante en Master DevOps.
              Passionnée par le développement web, l&apos;automatisation, les systèmes
              et les technologies Cloud.
            </p>
            <div className="hero-buttons">
              <a className="btn" href="#projects">Découvrir mes projets ↗</a>
              <a className="btn btn-outline" href="/CV_Hyba_Farhat.pdf" target="_blank">Consulter mon CV</a>
            </div>
          </div>
          <div className="photo-area">
            <div className="photo-flower">♡</div>
            <div className="portrait">
              <img src="/hyba.jpg" alt="Photo de Hyba Farhat" />
            </div>
            <div className="photo-note"><span>●</span> Disponible pour un nouveau projet</div>
          </div>
        </div>
      </section>

      <section className="section" id="about">
        <div className="wrap">
          <div className="section-title">
            <div className="eyebrow">✿ QUI SUIS-JE ? ✿</div>
            <h2>À propos de moi</h2>
            <p>Une développeuse motivée, créative et toujours curieuse d’apprendre.</p>
          </div>
          <p className="about-text">
            Je suis Hyba Farhat, diplômée en Technologie de l’Informatique,
            spécialité Développement des Systèmes d’Information, et actuellement
            étudiante en Master DevOps à Tozeur. Passionnée par le développement
            web et les nouvelles technologies, j’aime apprendre, relever des défis
            et concevoir des solutions utiles et innovantes.
          </p>
          <div className="about-grid">
            <div className="about-card"><div className="about-icon">🎓</div><p>Étudiante en<br /><strong>Master DevOps</strong></p></div>
            <div className="about-card"><div className="about-icon">⌘</div><p>Passionnée par<br /><strong>le développement web</strong></p></div>
            <div className="about-card"><div className="about-icon">✧</div><p>Toujours en quête<br /><strong>de nouveaux défis</strong></p></div>
          </div>
        </div>
      </section>

      <section className="section" id="education">
        <div className="wrap">
          <div className="section-title">
            <div className="eyebrow">✿ MON PARCOURS ✿</div>
            <h2>Formation</h2>
          </div>
          <div className="timeline">
            <div className="item">
              <span className="item-date">EN COURS</span>
              <h3>Master en DevOps — Tozeur</h3>
              <p>Formation orientée vers le développement, l&apos;automatisation et les pratiques DevOps.</p>
            </div>
            <div className="item">
              <span className="item-date">JUIN 2025</span>
              <h3>Licence en Technologie de l’Informatique</h3>
              <p>Spécialité Développement des Systèmes d’Information.</p>
            </div>
            <div className="item">
              <span className="item-date">2022</span>
              <h3>Baccalauréat — Sciences Informatiques</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="skills">
        <div className="wrap">
          <div className="section-title">
            <div className="eyebrow">✿ CE QUE JE SAIS FAIRE ✿</div>
            <h2>Mes compétences</h2>
            <p>Des outils et technologies que j&apos;utilise dans mes projets.</p>
          </div>
          <div className="skills">
            {skills.map((skill) => <span className="skill" key={skill}>{skill}</span>)}
          </div>
        </div>
      </section>

      <section className="section projects" id="projects">
        <div className="wrap">
          <div className="section-title">
            <div className="eyebrow">✿ MES RÉALISATIONS ✿</div>
            <h2>Projets</h2>
            <p>Quelques projets réalisés durant mon parcours académique et professionnel.</p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project" key={project.number}>
                <div className="project-no">{project.number} ✿</div>
                <div className="project-type">{project.type}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul>{project.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
                <div className="tags">{project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section projects" id="devops">
        <div className="wrap">
          <div className="section-title">
            <div className="eyebrow">DEVOPS &amp; CLOUD</div>
            <h2>Projets DevOps &amp; Cloud</h2>
            <p>Automatisation, conteneurisation et d&eacute;ploiement continu.</p>
          </div>
          <div className="project-grid">
            <article className="project">
              <div className="project-no">01</div>
              <div className="project-type">PLATFORM ENGINEERING &middot; BACKSTAGE</div>
              <h3>Portail d&eacute;veloppeur avec Backstage</h3>
              <p>Un portail unique pour cr&eacute;er, construire, publier et d&eacute;ployer le portfolio sans commande manuelle.</p>
              <ul>
                <li>Software Template pour g&eacute;n&eacute;rer le projet Next.js</li>
                <li>Cr&eacute;ation du d&eacute;p&ocirc;t GitHub et enregistrement dans le catalogue</li>
                <li>D&eacute;clenchement du workflow de livraison depuis Backstage</li>
              </ul>
              <div className="tags">
                <span className="tag">Backstage</span>
                <span className="tag">Next.js</span>
                <span className="tag">GitHub</span>
              </div>
            </article>
            <article className="project">
              <div className="project-no">02</div>
              <div className="project-type">CI/CD &middot; DOCKER &middot; D&Eacute;PLOIEMENT</div>
              <h3>Pipeline de livraison continue</h3>
              <p>Cha&icirc;ne automatis&eacute;e du code jusqu&apos;au service en ligne, avec versionnement des images.</p>
              <ul>
                <li>Build et push de l&apos;image sur Docker Hub (v1, v2...)</li>
                <li>D&eacute;ploiement local avec Docker Compose sur un runner GitHub Actions</li>
                <li>V&eacute;rification de sant&eacute; de l&apos;application apr&egrave;s d&eacute;ploiement</li>
              </ul>
              <div className="tags">
                <span className="tag">GitHub Actions</span>
                <span className="tag">Docker</span>
                <span className="tag">Docker Compose</span>
                <span className="tag">Docker Hub</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section" id="experience">
        <div className="wrap">
          <div className="section-title">
            <div className="eyebrow">✿ PARCOURS PROFESSIONNEL ✿</div>
            <h2>Expériences professionnelles</h2>
          </div>
          <div className="timeline">
            {experiences.map((experience) => (
              <div className="item" key={experience.title}>
                <span className="item-date">{experience.date}</span>
                <h3>{experience.title}</h3>
                <p>{experience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="certificates">
        <div className="wrap">
          <div className="section-title">
            <div className="eyebrow">✿ MES DISTINCTIONS ✿</div>
            <h2>Certifications &amp; distinctions</h2>
          </div>
          <div className="cert-grid">
            {certifications.map((cert) => <div className="cert" key={cert}><span>✿</span>{cert}</div>)}
          </div>
        </div>
      </section>

      <section className="section" id="languages">
        <div className="wrap">
          <div className="section-title">
            <div className="eyebrow">✿ COMMUNICATION ✿</div>
            <h2>Langues</h2>
          </div>
          <div className="languages">
            <div className="language"><strong>Arabe</strong><span>Langue maternelle</span></div>
            <div className="language"><strong>Français</strong><span>Niveau intermédiaire</span></div>
            <div className="language"><strong>Anglais</strong><span>Notions de base</span></div>
          </div>
        </div>
      </section>

      <section className="section" id="contact">
        <div className="wrap">
          <div className="contact-box">
            <div className="eyebrow">✿ RESTONS EN CONTACT ✿</div>
            <h2>Parlons de votre projet !</h2>
            <p>Vous avez une idée ou une opportunité ? Je serais ravie d’échanger avec vous.</p>
            <div className="contact-list">
              <span>✉ hibafarhat350@gmail.com</span>
              <span>☎ 99 859 865</span>
              <span>⌖ Ras Jebel, Bizerte</span>
            </div>
            <a className="btn" href="mailto:hibafarhat350@gmail.com">M&apos;envoyer un e-mail →</a>
            <a className="btn btn-outline" href="https://github.com/hyybaafarhat-bit" target="_blank" rel="noreferrer" style={{marginLeft: 10}}>GitHub ↗</a>
          </div>
        </div>
      </section>

      <footer>Fait avec ♡ par Hyba Farhat · 2026</footer>
    </main>
  );
}


