"use client";

import Image from "next/image";

export default function Home() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <main className="page">
        <div className="bg-orb orb-1" />
        <div className="bg-orb orb-2" />
        <div className="bg-orb orb-3" />

        <header className="header">
          <div className="container nav">
            <div>
              <div className="logo">PAPA AMATH BODIAN</div>
              <div className="subtitle">Portfolio personnel premium</div>
            </div>

            <nav className="nav-links">
              <button onClick={() => scrollToSection("apropos")}>À propos</button>
              <button onClick={() => scrollToSection("parcours")}>Parcours</button>
              <button onClick={() => scrollToSection("competences")}>Compétences</button>
              <button onClick={() => scrollToSection("ambitions")}>Ambitions</button>
              <button onClick={() => scrollToSection("contact")}>Contact</button>
            </nav>
          </div>
        </header>

        <section className="hero container">
          <div className="hero-text">
            <div className="badge">Étudiant en informatique • Site premium</div>

            <h1>
              Bonjour, je suis{" "}
              <span className="gradient-text">Papa Amath Bodian</span>
            </h1>

            <p className="hero-description">
              Je suis étudiant en informatique, passionné par la technologie,
              l’apprentissage, les défis et la construction d’un avenir
              professionnel solide. Ce site présente mon profil, mes ambitions,
              mes compétences et la vision que j’ai pour mon futur.
            </p>

            <div className="hero-actions">
              <button
                className="btn btn-primary"
                onClick={() => scrollToSection("apropos")}
              >
                Me découvrir
              </button>

              <button
                className="btn btn-secondary"
                onClick={() => scrollToSection("contact")}
              >
                Me contacter
              </button>
            </div>

            <div className="stats">
              <div className="stat-card">
                <h3>L3</h3>
                <p>Informatique</p>
              </div>
              <div className="stat-card">
                <h3>Tech</h3>
                <p>Passion & progression</p>
              </div>
              <div className="stat-card">
                <h3>Vision</h3>
                <p>Avenir professionnel</p>
              </div>
            </div>
          </div>

          <div className="hero-side">
            <div className="photo-card">
              <div className="photo-frame">
                <Image
                  src="/photo.jpg"
                  alt="Photo de Papa Amath Bodian"
                  fill
                  className="photo"
                  priority
                />
              </div>
              <div className="photo-glow" />
            </div>

            <div className="profile-card">
              <p className="small-label">Profil</p>
              <h2>Papa Amath Bodian</h2>
              <p className="availability">Disponible pour évoluer</p>

              <div className="mini-block">
                <h3>Parcours académique</h3>
                <p>
                  Étudiant en informatique avec une forte volonté de progresser,
                  d’apprendre et d’exceller.
                </p>
              </div>

              <div className="mini-block">
                <h3>Centres d’intérêt</h3>
                <p>
                  Programmation, cybersécurité, algorithmique, bases de données
                  et développement web.
                </p>
              </div>

              <div className="mini-block">
                <h3>Objectif</h3>
                <p>
                  Construire un profil solide, sérieux et prêt à saisir de
                  grandes opportunités.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="apropos" className="section container">
          <div className="section-heading">
            <span>À propos</span>
            <h2>Un profil construit avec sérieux, ambition et discipline</h2>
          </div>

          <div className="glass-card">
            <p>
              Je suis une personne ambitieuse, motivée et tournée vers la
              réussite. J’aime apprendre, évoluer et développer des compétences
              solides dans le domaine de l’informatique. Mon objectif est de
              construire un avenir professionnel fort, inspirant et basé sur le
              travail, la rigueur et la progression.
            </p>
          </div>
        </section>

        <section id="parcours" className="section container">
          <div className="section-heading">
            <span>Parcours</span>
            <h2>Les bases de mon évolution</h2>
          </div>

          <div className="grid three">
            <div className="glass-card hover-card">
              <h3>Parcours académique</h3>
              <p>
                Mon parcours universitaire en informatique me permet de
                développer mes connaissances, ma logique et ma capacité
                d’analyse.
              </p>
            </div>

            <div className="glass-card hover-card">
              <h3>Construction professionnelle</h3>
              <p>
                Je travaille à bâtir un profil sérieux, compétent et crédible
                pour préparer mon avenir dans le monde professionnel.
              </p>
            </div>

            <div className="glass-card hover-card">
              <h3>Vision personnelle</h3>
              <p>
                Je veux avancer avec confiance, représenter mon potentiel et
                transformer mes ambitions en réalisations concrètes.
              </p>
            </div>
          </div>
        </section>

        <section id="competences" className="section container">
          <div className="section-heading">
            <span>Compétences</span>
            <h2>Des compétences techniques et humaines en progression</h2>
          </div>

          <div className="grid skills-grid">
            <div className="skill">Programmation</div>
            <div className="skill">Développement web</div>
            <div className="skill">Algorithmique</div>
            <div className="skill">Bases de données</div>
            <div className="skill">Cybersécurité</div>
            <div className="skill">Analyse</div>
            <div className="skill">Rigueur</div>
            <div className="skill">Travail en équipe</div>
          </div>

          <div className="qualities">
            <span>Discipline</span>
            <span>Persévérance</span>
            <span>Curiosité</span>
            <span>Ambition</span>
            <span>Vision</span>
            <span>Respect</span>
          </div>
        </section>

        <section id="ambitions" className="section container">
          <div className="section-heading">
            <span>Ambitions</span>
            <h2>Là où je veux aller</h2>
          </div>

          <div className="grid four">
            <div className="glass-card hover-card">
              <h3>Réussir en informatique</h3>
              <p>
                Construire une carrière sérieuse et solide dans le domaine de la
                technologie.
              </p>
            </div>

            <div className="glass-card hover-card">
              <h3>Développer une expertise</h3>
              <p>
                Approfondir mes compétences dans les domaines techniques
                d’avenir.
              </p>
            </div>

            <div className="glass-card hover-card">
              <h3>Inspirer le respect</h3>
              <p>
                Avoir un profil professionnel crédible, fort et respecté.
              </p>
            </div>

            <div className="glass-card hover-card">
              <h3>Aller plus loin</h3>
              <p>
                Transformer mon potentiel en résultats visibles grâce au travail
                et à la discipline.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="section container">
          <div className="contact-box">
            <div>
              <span className="contact-label">Contact</span>
              <h2>Envie d’en savoir plus sur moi ?</h2>
              <p>
                Ce portfolio peut encore être enrichi avec mon CV, mes projets
                réels, mon GitHub, mon LinkedIn et mes vraies coordonnées.
              </p>
            </div>

            <div className="contact-card">
              <p className="contact-title">Mes informations</p>
              <p>
                <strong>Nom :</strong> Papa Amath Bodian
              </p>
              <p>
                <strong>Email :</strong> tonadresse@email.com
              </p>
              <button className="btn btn-primary full-btn">
                Ajouter mes vraies infos
              </button>
            </div>
          </div>
        </section>
      </main>

      <style jsx>{`
        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
        }

        .page {
          min-height: 100vh;
          color: white;
          font-family: Arial, sans-serif;
          background:
            radial-gradient(circle at top left, rgba(34, 211, 238, 0.16), transparent 28%),
            radial-gradient(circle at bottom right, rgba(59, 130, 246, 0.16), transparent 30%),
            linear-gradient(180deg, #020617 0%, #081120 40%, #020617 100%);
          position: relative;
          overflow-x: hidden;
        }

        .bg-orb {
          position: fixed;
          border-radius: 999px;
          filter: blur(100px);
          z-index: 0;
          pointer-events: none;
        }

        .orb-1 {
          width: 260px;
          height: 260px;
          background: rgba(34, 211, 238, 0.14);
          top: 80px;
          left: -50px;
        }

        .orb-2 {
          width: 320px;
          height: 320px;
          background: rgba(59, 130, 246, 0.12);
          top: 35%;
          right: -100px;
        }

        .orb-3 {
          width: 260px;
          height: 260px;
          background: rgba(255, 255, 255, 0.05);
          bottom: 80px;
          left: 28%;
        }

        .container {
          width: 100%;
          max-width: 1180px;
          margin: 0 auto;
          padding-left: 20px;
          padding-right: 20px;
          position: relative;
          z-index: 1;
        }

        .header {
          position: sticky;
          top: 0;
          z-index: 50;
          background: rgba(2, 6, 23, 0.7);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding-top: 18px;
          padding-bottom: 18px;
          flex-wrap: wrap;
        }

        .logo {
          font-size: 22px;
          font-weight: 800;
          letter-spacing: 0.04em;
        }

        .subtitle {
          color: #94a3b8;
          font-size: 13px;
          margin-top: 4px;
        }

        .nav-links {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }

        .nav-links button {
          background: transparent;
          border: none;
          color: #cbd5e1;
          cursor: pointer;
          font-size: 15px;
          transition: 0.25s ease;
        }

        .nav-links button:hover {
          color: white;
          transform: translateY(-1px);
        }

        .hero {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 48px;
          align-items: center;
          min-height: 92vh;
          padding-top: 70px;
          padding-bottom: 60px;
        }

        .badge {
          display: inline-block;
          padding: 10px 18px;
          border-radius: 999px;
          background: rgba(34, 211, 238, 0.12);
          border: 1px solid rgba(34, 211, 238, 0.25);
          color: #a5f3fc;
          font-size: 14px;
          margin-bottom: 22px;
          box-shadow: 0 0 30px rgba(34, 211, 238, 0.08);
        }

        h1 {
          font-size: clamp(44px, 7vw, 82px);
          line-height: 1.03;
          margin: 0 0 22px;
          font-weight: 800;
          letter-spacing: -0.04em;
        }

        .gradient-text {
          background: linear-gradient(90deg, #67e8f9, #60a5fa, #93c5fd);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-description {
          font-size: 20px;
          color: #cbd5e1;
          line-height: 1.9;
          max-width: 720px;
          margin: 0;
        }

        .hero-actions {
          display: flex;
          gap: 14px;
          margin-top: 30px;
          flex-wrap: wrap;
        }

        .btn {
          padding: 14px 24px;
          border-radius: 16px;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          transition: 0.25s ease;
        }

        .btn:hover {
          transform: translateY(-2px);
        }

        .btn-primary {
          background: linear-gradient(90deg, #67e8f9, #38bdf8);
          color: #082f49;
          border: none;
          box-shadow: 0 12px 32px rgba(56, 189, 248, 0.22);
        }

        .btn-secondary {
          background: rgba(255, 255, 255, 0.05);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(10px);
        }

        .full-btn {
          width: 100%;
          margin-top: 18px;
        }

        .stats {
          margin-top: 34px;
          display: grid;
          grid-template-columns: repeat(3, minmax(120px, 1fr));
          gap: 14px;
          max-width: 640px;
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 24px;
          padding: 22px;
          backdrop-filter: blur(12px);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.04);
        }

        .stat-card h3 {
          font-size: 28px;
          margin: 0 0 8px;
        }

        .stat-card p {
          margin: 0;
          color: #94a3b8;
          font-size: 14px;
        }

        .hero-side {
          display: flex;
          flex-direction: column;
          gap: 22px;
        }

        .photo-card {
          position: relative;
          width: 100%;
          display: flex;
          justify-content: center;
        }

        .photo-frame {
          position: relative;
          width: 320px;
          height: 380px;
          border-radius: 32px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(255,255,255,0.04);
          box-shadow:
            0 30px 60px rgba(0,0,0,0.35),
            inset 0 1px 0 rgba(255,255,255,0.05);
          z-index: 2;
        }

        .photo {
          object-fit: cover;
        }

        .photo-glow {
          position: absolute;
          width: 240px;
          height: 240px;
          background: rgba(34, 211, 238, 0.18);
          filter: blur(70px);
          bottom: -20px;
          z-index: 1;
        }

        .profile-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 32px;
          padding: 30px;
          backdrop-filter: blur(18px);
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.3);
        }

        .small-label {
          color: #94a3b8;
          font-size: 14px;
          margin: 0 0 6px;
        }

        .profile-card h2 {
          margin: 0;
          font-size: 32px;
        }

        .availability {
          display: inline-block;
          margin-top: 14px;
          margin-bottom: 18px;
          padding: 10px 14px;
          border-radius: 999px;
          color: #a5f3fc;
          background: rgba(34, 211, 238, 0.12);
          border: 1px solid rgba(34, 211, 238, 0.22);
          font-size: 14px;
        }

        .mini-block {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          padding: 18px;
          margin-top: 14px;
        }

        .mini-block h3 {
          margin: 0 0 8px;
          font-size: 18px;
        }

        .mini-block p {
          margin: 0;
          color: #cbd5e1;
          line-height: 1.7;
        }

        .section {
          padding-top: 44px;
          padding-bottom: 44px;
        }

        .section-heading {
          max-width: 760px;
          margin-bottom: 24px;
        }

        .section-heading span,
        .contact-label {
          display: inline-block;
          color: #67e8f9;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        .section-heading h2,
        .contact-box h2 {
          font-size: clamp(30px, 4vw, 52px);
          margin: 0;
          line-height: 1.12;
          letter-spacing: -0.03em;
        }

        .glass-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 26px;
          padding: 26px;
          backdrop-filter: blur(14px);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.04);
        }

        .glass-card p {
          margin: 0;
          color: #cbd5e1;
          line-height: 1.9;
          font-size: 17px;
        }

        .glass-card h3 {
          margin-top: 0;
          margin-bottom: 10px;
          font-size: 21px;
        }

        .hover-card {
          transition: 0.25s ease;
        }

        .hover-card:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.07);
          box-shadow: 0 18px 36px rgba(0,0,0,0.2);
        }

        .grid {
          display: grid;
          gap: 20px;
        }

        .three {
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        }

        .four {
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        }

        .skills-grid {
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
        }

        .skill {
          padding: 18px;
          text-align: center;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #e2e8f0;
          font-weight: 700;
          transition: 0.25s ease;
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.03);
        }

        .skill:hover {
          transform: translateY(-3px);
          background: rgba(255, 255, 255, 0.07);
        }

        .qualities {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 22px;
        }

        .qualities span {
          padding: 10px 16px;
          border-radius: 999px;
          background: rgba(34, 211, 238, 0.1);
          border: 1px solid rgba(34, 211, 238, 0.2);
          color: #cffafe;
          font-size: 14px;
        }

        .contact-box {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 24px;
          padding: 30px;
          border-radius: 34px;
          background: linear-gradient(
            135deg,
            rgba(34, 211, 238, 0.08),
            rgba(255, 255, 255, 0.04),
            rgba(59, 130, 246, 0.08)
          );
          border: 1px solid rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(16px);
        }

        .contact-box p {
          color: #cbd5e1;
          line-height: 1.8;
          font-size: 17px;
        }

        .contact-card {
          background: rgba(2, 6, 23, 0.45);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 26px;
          padding: 24px;
        }

        .contact-title {
          color: white !important;
          font-weight: 700;
          margin-top: 0;
        }

        @media (max-width: 980px) {
          .hero {
            grid-template-columns: 1fr;
          }

          .hero-side {
            order: -1;
          }

          .photo-frame {
            width: 280px;
            height: 330px;
          }

          .contact-box {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 700px) {
          .nav {
            justify-content: center;
            text-align: center;
          }

          .nav-links {
            justify-content: center;
          }

          .hero {
            padding-top: 40px;
          }

          .profile-card {
            padding: 24px;
          }

          .stats {
            grid-template-columns: 1fr;
          }

          .photo-frame {
            width: 240px;
            height: 290px;
          }
        }
      `}</style>
    </>
  );
}