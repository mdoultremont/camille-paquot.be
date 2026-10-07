import { Link } from "@tanstack/react-router";
import { aboutParagraphs, services } from "../content";
import { booking, email, PhoneIcon } from "./Layout";
const image = (name: string) => `/images/${name}`;
export function HomePage() {
  return (
    <>
      <section className="home-hero">
        <div className="home-hero-panel">
          <div className="container home-hero-inner">
            <div className="home-hero-copy">
              <div>
                <h1>Accompagnement thérapeutique bienveillant et sécurisant</h1>
                <p className="lead">
                  Une rencontre thérapeutique dans le respect de votre rythme et de vos objectifs
                </p>
              </div>
              <Link to="/a-propos" className="button button-white">
                En savoir plus
              </Link>
            </div>
            <div className="hero-collage" aria-label="Nature, lumière et sérénité">
              <div>
                <img
                  src={image("pEsC21yTuEIvcjctpRjxP8s3njo.jpg")}
                  alt="Paysage de montagne"
                  className="collage-one"
                />
                <img
                  src={image("72wvKCpJNrUXs9Lzmbzkl1uyhE.jpg")}
                  alt="Végétation et lumière naturelle"
                  className="collage-two"
                />
              </div>
              <div>
                <img
                  src={image("WTaSV5KmpYwF0wvvTnvDdcrEd4.jpeg")}
                  alt="Instant de sérénité"
                  className="collage-three"
                />
                <img
                  src={image("49rDYShSM2Ena2vOFa2GV0aRpo.jpg")}
                  alt="Une vue apaisante"
                  className="collage-four"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-services">
        <div className="container">
          <div className="home-service-grid">
            {services.map((service) => (
              <Link
                key={service.slug}
                to="/accompagnement/$service"
                params={{ service: service.slug }}
                className="home-service"
              >
                <h2>{service.title}</h2>
                <p>{service.intro}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="home-about">
        <div className="container home-about-inner">
          <img src={image("aRkLXlxz9Gb3W7ozj5hZ1ToYKc.jpg")} alt="Camille Paquot" />
          <div>
            <h2>Camille Paquot</h2>
            <p className="lead">Psychologue Clinicienne Agréée</p>
            <p className="lead">
              Passionnée par le contact et la rencontre avec autrui, j’accompagne toute personne
              désirant réaliser un travail thérapeutique. Nous avançons ensemble, à votre rythme et
              votre temporalité dans un cadre bienveillant, sécurisant et non-jugeant
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
export function AboutPage() {
  return (
    <>
      <section className="about-banner">
        <div className="container about-banner-inner">
          <h1>Qui je suis ?</h1>
          <div>
            <p className="about-name">Camille Paquot</p>
            <p className="about-job">Psychologue Clinicienne Agréée</p>
            <p>
              Passionnée par la rencontre à l’autre, j’accompagne toute personne désirant réaliser
              un travail thérapeutique. Nous avançons ensemble, à votre rythme et votre temporalité
              dans un cadre bienveillant, sécurisant et non-jugeant.
            </p>
          </div>
        </div>
      </section>
      <section className="about-body">
        <div className="container about-body-inner">
          <div className="about-prose">
            {aboutParagraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <Link to="/formation-continue" className="inline-link">
              En savoir plus
            </Link>
          </div>
          <aside className="about-benefits">
            <h2>Ce que j'apporte</h2>
            <ul>
              {[
                "Une écoute active et empathique",
                "Un cadre sécurisant et bienveillant",
                "Approche psycho-corporelle",
                "Yoga-Thérapeutique",
                "Approche s'adaptant à vos besoins",
              ].map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
      <section className="qualifications container">
        {[
          "Membre de la Commission Belge des Psychologues",
          "Titulaire du visa et de l’agrément",
          "Respect du code de déontologie",
          "Respect du secret professionnel",
        ].map((x) => (
          <p key={x}>{x}</p>
        ))}
      </section>
    </>
  );
}
export function ServiceCard({ service }: { service: (typeof services)[number] }) {
  return (
    <article className="service-card">
      <Link
        to="/accompagnement/$service"
        params={{ service: service.slug }}
        className="service-image"
      >
        <img src={image(service.thumbnail)} alt={service.title} loading="lazy" />
      </Link>
      <div className="service-card-copy">
        <h3>
          <Link to="/accompagnement/$service" params={{ service: service.slug }}>
            {service.title}
          </Link>
        </h3>
        <p>{service.intro}</p>
      </div>
      <Link to="/accompagnement/$service" params={{ service: service.slug }} className="learn-link">
        En savoir plus <span aria-hidden="true">→</span>
      </Link>
    </article>
  );
}
export function ServicesPage() {
  return (
    <>
      <section className="services-intro container">
        <h1>Accompagnement thérapeutique</h1>
        <p className="lead">
          Ensemble, explorons le champ des possibles afin de trouver un apaisement psychique et
          physique
        </p>
      </section>
      <section className="services-benefits container">
        <div>
          <h2>Ce que j'apporte</h2>
          <ul>
            {[
              "Un accueil chaleureux et humain",
              "Une écoute active et empathique",
              "Un cadre sécuriant et bienveillant",
              "Une approche adaptée à vos besoins",
              "Une approche intégrative",
              "Une approche psycho-corporelle",
            ].map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </div>
      </section>
      <section className="services-overview">
        <div className="container service-grid">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </section>
    </>
  );
}
export function ServicePage({ service }: { service: (typeof services)[number] }) {
  const otherServices = services.filter((s) => s.slug !== service.slug).slice(0, 2);
  return (
    <>
      <section className="detail-banner">
        <div className="container detail-banner-inner">
          <div>
            <h1>{service.title}</h1>
            <p className="lead">{service.intro}</p>
          </div>
          <img src={image(service.thumbnail)} alt={service.title} />
        </div>
      </section>
      <section className="detail-content">
        <div className="container detail-content-inner">
          <div className="detail-prose">
            {service.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <img
              className="detail-rich-image"
              src={image(service.image)}
              alt={service.title}
              loading="lazy"
            />
          </div>
          <aside className="service-sidebar">
            <div>
              <h2>Questions supplémentaires?</h2>
              <a href="tel:+32470386155">
                <PhoneIcon /> +32 (0) 470/38.61.55
              </a>
              <a href={`mailto:${email}`}>
                <span aria-hidden="true">✉</span> {email}
              </a>
              <a href={booking} className="inline-link" target="_blank" rel="noopener noreferrer">
                Pour prendre rendez-vous
              </a>
            </div>
            <div>
              <h2>Cabinets</h2>
              <p>Informations à venir</p>
            </div>
          </aside>
        </div>
      </section>
      <section className="other-services">
        <div className="container">
          <h2>D'autres options</h2>
          <div className="service-grid">
            {otherServices.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
          <Link to="/accompagnement" className="button button-dark all-services">
            All Services
          </Link>
        </div>
      </section>
    </>
  );
}
const trainings = [
  ["Formation — Professeure de Yoga et Yoga-thérapeutique", "Mitra ASBL · 2025–2029", true],
  [
    "Certificat universitaire — Accompagnement psychologique de la parentalité",
    "2026–2027 · Université Catholique de Louvain-la-Neuve",
    true,
  ],
  [
    "Congrès SOS Enfants — “Les nouveaux visages de la maltraitance”",
    "Octobre 2024 · Bruxelles",
    false,
  ],
  [
    "Formation — Prévention et intervention face au risque suicidaire",
    "2023 · Île de la Réunion, France",
    false,
  ],
  [
    "Master en psychologie clinique de l’enfant, de l’adolescent et de la famille",
    "Diplômée en juin 2021 · Université Catholique de Louvain-la-Neuve",
    false,
  ],
] as const;
export function TrainingPage() {
  return (
    <>
      <section className="training-banner">
        <div>
          <h1>Formation continue</h1>
          <p className="lead">Me former en continu est une priorité</p>
        </div>
      </section>
      <section className="training-list">
        <ul>
          {trainings.map(([title, dates, ongoing]) => (
            <li key={title}>
              <div>
                <h2>{title}</h2>
                <p>{dates}</p>
                {ongoing && <span className="ongoing">En cours</span>}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
