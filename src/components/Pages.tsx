import { Link } from "@tanstack/react-router";
import { aboutParagraphs, services } from "../content";
import { booking, email, phone } from "../site";
import { PhoneIcon } from "./Layout";
import {
  container,
  darkButton,
  h1,
  h2,
  heading,
  inlineLink,
  lead,
  prose,
  whiteButton,
} from "./styles";
const image = (name: string) => `/images/${name}`;
export function HomePage() {
  return (
    <>
      <section className="px-5 xl:px-[30px]">
        <div className="rounded-3xl bg-teal px-2.5 py-[30px]">
          <div className={`${container} flex items-center gap-10 xl:gap-[95px] max-lg:flex-col`}>
            <div className="flex min-w-0 flex-1 flex-col items-start gap-10 xl:gap-[60px] max-xl:flex-[1.4] max-lg:w-full max-lg:max-w-[590px] max-lg:flex-none max-lg:items-center max-lg:text-center">
              <div className="flex flex-col gap-5">
                <h1
                  className={`${heading} text-[32px] tracking-[-1px] text-white xl:text-[40px] max-xl:max-w-[400px] max-lg:mx-auto`}
                >
                  Accompagnement thérapeutique bienveillant et sécurisant
                </h1>
                <p className={`${lead} text-white`}>
                  Une rencontre thérapeutique dans le respect de votre rythme et de vos objectifs
                </p>
              </div>
              <Link to="/a-propos" className={whiteButton}>
                En savoir plus
              </Link>
            </div>
            <div
              className="flex min-w-0 flex-1 items-center gap-4 max-lg:order-first max-lg:w-full max-lg:max-w-[440px] max-lg:flex-none"
              aria-label="Nature, lumière et sérénité"
            >
              <div className="flex min-w-0 flex-1 flex-col gap-4">
                <img
                  src={image("pEsC21yTuEIvcjctpRjxP8s3njo.jpg")}
                  alt="Paysage de montagne"
                  className="aspect-[1.2381] w-full rounded-xl object-cover"
                />
                <img
                  src={image("72wvKCpJNrUXs9Lzmbzkl1uyhE.jpg")}
                  alt="Végétation et lumière naturelle"
                  className="aspect-[0.787879] w-full rounded-xl object-cover"
                />
              </div>
              <div className="flex min-w-0 flex-1 flex-col gap-4">
                <img
                  src={image("WTaSV5KmpYwF0wvvTnvDdcrEd4.jpeg")}
                  alt="Instant de sérénité"
                  className="aspect-[0.87] w-full rounded-xl object-cover"
                />
                <img
                  src={image("49rDYShSM2Ena2vOFa2GV0aRpo.jpg")}
                  alt="Une vue apaisante"
                  className="aspect-[1.45] w-full rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-[100px] max-lg:py-[60px]">
        <div className={container}>
          <div className="grid grid-cols-2 gap-x-10 gap-y-20 py-[21px] xl:gap-x-[50px] max-lg:flex max-lg:flex-wrap max-lg:justify-center max-lg:gap-10">
            {services.map((service) => (
              <Link
                key={service.slug}
                to="/accompagnement/$service"
                params={{ service: service.slug }}
                className="group flex flex-col items-center gap-5 text-center tracking-[-0.16px] max-lg:min-w-[280px] max-lg:max-w-[360px] max-lg:flex-1"
              >
                <h2
                  className={`${heading} max-w-[230px] text-[22px] tracking-normal text-teal transition-[color] duration-200 ease-[ease] group-hover:text-[#608661]`}
                >
                  {service.title}
                </h2>
                <p className="tracking-[-0.16px]">{service.intro}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="pb-[51px] max-xl:pb-[100px] max-lg:pb-20">
        <div
          className={`${container} flex items-center gap-[80px] max-xl:gap-[60px] max-lg:flex-col max-lg:gap-10`}
        >
          <img
            className="h-[540px] w-full min-w-0 flex-1 rounded-xl object-cover object-[left_bottom] max-lg:aspect-[1.01471] max-lg:h-auto max-lg:max-w-[510px] max-lg:flex-none"
            src={image("aRkLXlxz9Gb3W7ozj5hZ1ToYKc.jpg")}
            alt="Camille Paquot"
          />
          <div className="min-w-0 flex-1 max-lg:w-full max-lg:flex-none max-lg:text-center">
            <h2 className={`${h2} mb-5 text-teal`}>Camille Paquot</h2>
            <p className={lead}>Psychologue Clinicienne Agréée</p>
            <p className={`${lead} mt-2.5`}>
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
      <section className="relative [background:linear-gradient(#00000080,#00000080),linear-gradient(#163c3d1a,#163c3d1a),url(/images/4QAleyr95FQ6Zs0TRVPpaNgc.jpeg)_center/cover_no-repeat] py-[120px] text-white max-xl:py-[100px] max-lg:py-20">
        <div
          className={`${container} flex items-center gap-20 max-xl:gap-5 max-lg:max-w-[550px] max-lg:flex-col max-lg:items-start`}
        >
          <h1
            className={`${h1} text-white whitespace-nowrap max-xl:max-w-[400px] max-xl:whitespace-normal`}
          >
            Qui suis-je ?
          </h1>
          <div className="flex flex-1 flex-col gap-2.5">
            <p className="text-[24px]">Camille Paquot</p>
            <p className="text-[18px]">Psychologue Clinicienne Agréée</p>
            <p>
              Passionnée par le contact et la rencontre avec autrui, j’accompagne toute personne
              désirant réaliser un travail thérapeutique. Nous avançons ensemble, à votre rythme et
              votre temporalité dans un cadre bienveillant, sécurisant et non-jugeant.
            </p>
          </div>
        </div>
      </section>
      <section className="py-[82px] max-xl:py-[100px] max-lg:py-20">
        <div
          className={`${container} flex items-center justify-between max-lg:flex-col max-lg:gap-10`}
        >
          <div className={`${prose} w-1/2 max-xl:w-[55%] max-lg:w-full`}>
            {aboutParagraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <Link to="/formation-continue" className={`${inlineLink} mt-5 block`}>
              En savoir plus
            </Link>
          </div>
          <aside className="w-[44%] rounded-[33px] bg-teal px-[50px] py-[34px] text-white max-xl:px-[30px] max-lg:w-full max-lg:max-w-[500px] max-lg:px-5">
            <h2
              className={`${heading} mb-[30px] text-[26px] tracking-normal text-white md:text-[30px]`}
            >
              Ce que j'apporte
            </h2>
            <ul className="flex list-disc flex-col gap-3 pl-5">
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
      <section
        className={`${container} flex gap-5 pb-[7px] max-xl:grid max-xl:grid-cols-2 max-xl:pb-[100px] max-lg:gap-x-2.5 max-lg:gap-y-[30px] max-lg:pb-20 max-md:flex max-md:flex-col`}
      >
        {[
          "Membre de la Commission Belge des Psychologues",
          "Titulaire du visa et de l’agrément",
          "Respect du code de déontologie",
          "Respect du secret professionnel",
        ].map((x) => (
          <p
            key={x}
            className="flex-1 rounded-lg bg-sage p-4 text-[20px] leading-normal max-md:w-full"
          >
            {x}
          </p>
        ))}
      </section>
    </>
  );
}
export function ServiceCard({ service }: { service: (typeof services)[number] }) {
  return (
    <article className="flex min-w-0 flex-col gap-[30px]">
      <Link
        to="/accompagnement/$service"
        params={{ service: service.slug }}
        className="group block overflow-hidden rounded-xl"
      >
        <img
          className="h-[300px] w-full object-cover object-top transition-[transform] duration-500 ease-[ease] group-hover:[transform:scale(1.035)]"
          src={image(service.thumbnail)}
          alt={service.title}
          loading="lazy"
        />
      </Link>
      <div className="flex flex-col gap-2.5">
        <h3 className={`${heading} text-[26px] text-inherit md:text-[28px] xl:text-[30px]`}>
          <Link to="/accompagnement/$service" params={{ service: service.slug }}>
            {service.title}
          </Link>
        </h3>
        <p className="tracking-[-0.16px]">{service.intro}</p>
      </div>
      <Link
        to="/accompagnement/$service"
        params={{ service: service.slug }}
        className="group flex w-max items-center gap-4 font-medium text-inherit"
      >
        En savoir plus{" "}
        <span
          className="transition-[transform] duration-200 ease-[ease] group-hover:[transform:translateX(5px)]"
          aria-hidden="true"
        >
          →
        </span>
      </Link>
    </article>
  );
}
export function ServicesPage() {
  return (
    <>
      <section className={`${container} py-[60px] text-center`}>
        <h1 className={`${h1} mb-5 text-teal`}>Accompagnement thérapeutique</h1>
        <p className={lead}>
          Ensemble, explorons le champ des possibles afin de trouver un apaisement psychique et
          physique
        </p>
      </section>
      <section className={`${container} pb-[60px]`}>
        <div className="flex flex-col items-center gap-10 rounded-xl bg-sage px-5 py-10 lg:px-[50px]">
          <h2 className={`${h2} text-teal`}>Ce que j'apporte</h2>
          <ul className="grid w-full list-disc grid-cols-3 gap-[25px] pl-5 text-teal max-xl:grid-cols-2 max-lg:flex max-lg:flex-wrap max-lg:gap-x-[30px] max-lg:gap-y-2.5 max-md:text-[14px]">
            {[
              "Un accueil chaleureux et humain",
              "Une écoute active et empathique",
              "Un cadre sécurisant et bienveillant",
              "Une approche adaptée à vos besoins",
              "Une approche intégrative",
              "Une approche psycho-corporelle",
            ].map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </div>
      </section>
      <section className="bg-teal pt-[60px] pb-[120px] text-white max-lg:pb-20">
        <div className={`${container} grid grid-cols-2 gap-10 max-lg:grid-cols-1`}>
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
      <section className="bg-teal py-[120px] text-white max-xl:py-[100px] max-lg:py-20">
        <div
          className={`${container} flex items-center gap-20 max-xl:gap-[60px] max-lg:flex-col max-lg:gap-10`}
        >
          <div className="flex min-w-0 flex-1 flex-col gap-5 max-lg:w-full max-lg:max-w-[630px] max-lg:text-center">
            <h1 className={`${h1} text-white`}>{service.title}</h1>
            <p className={lead}>{service.intro}</p>
          </div>
          <img
            className="h-[260px] w-[490px] rounded-xl object-cover max-xl:w-[370px] max-lg:order-first max-lg:h-[340px] max-lg:w-full"
            src={image(service.thumbnail)}
            alt={service.title}
          />
        </div>
      </section>
      <section className="py-[100px] max-lg:py-20">
        <div className={`${container} flex items-start gap-[60px] max-xl:gap-10 max-lg:flex-col`}>
          <div className={`${prose} min-w-0 flex-1 max-lg:w-full`}>
            {service.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <img
              className={`mt-[34px] h-auto w-full rounded-xl object-cover ${["enfants-adolescents", "parentalite"].includes(service.slug) ? "aspect-[4/3]" : "aspect-[3/2]"}`}
              src={image(service.image)}
              alt={service.title}
              loading="lazy"
            />
          </div>
          <aside className="sticky top-[120px] flex w-[31%] flex-col gap-[30px] max-xl:w-[35%] max-lg:relative max-lg:top-auto max-lg:w-full">
            <div className="flex flex-col gap-[30px] rounded-xl bg-sage p-[30px] max-lg:items-center">
              <h2 className={`${heading} text-[22px] tracking-normal text-teal`}>
                Questions supplémentaires ?
              </h2>
              <a
                className="flex items-center gap-[15px] text-[14px] [overflow-wrap:anywhere] max-lg:text-base [&_svg]:flex-none"
                href={phone.href}
              >
                <PhoneIcon /> {phone.display}
              </a>
              <a
                className="flex items-center gap-[15px] text-[14px] [overflow-wrap:anywhere] max-lg:text-base"
                href={`mailto:${email}`}
              >
                <span aria-hidden="true">✉</span> {email}
              </a>
              <a
                href={booking}
                className={`${inlineLink} flex items-center gap-[15px] text-[14px] [overflow-wrap:anywhere] max-lg:text-base`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Pour prendre rendez-vous
              </a>
            </div>
            <div className="flex flex-col gap-4 rounded-xl bg-sage p-[30px]">
              <h2 className={`${heading} text-[22px] tracking-normal text-teal`}>Cabinets</h2>
              <p>Informations à venir</p>
            </div>
          </aside>
        </div>
      </section>
      <section className="bg-sage py-[120px] max-xl:py-[100px] max-lg:py-20">
        <div className={container}>
          <h2 className={`${h2} mb-[60px] text-teal max-lg:mb-10 max-lg:text-center`}>
            D'autres options
          </h2>
          <div className="grid grid-cols-2 gap-[30px] max-lg:grid-cols-1">
            {otherServices.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
          <Link to="/accompagnement" className={`${darkButton} mt-[60px] max-lg:mt-10`}>
            Tous les accompagnements
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
      <section className="bg-sage px-10 py-[60px] text-center max-lg:px-5 max-lg:py-10">
        <div className="mx-auto max-w-[1200px]">
          <h1 className={`${h1} mb-4 text-teal`}>Formation continue</h1>
          <p className={lead}>Me former en continu est une priorité</p>
        </div>
      </section>
      <section className="max-w-[1280px] px-10 pt-10 pb-[60px] max-lg:p-10 max-lg:px-5">
        <ul className="flex list-none flex-col gap-8 p-0">
          {trainings.map(([title, dates, ongoing]) => (
            <li
              key={title}
              className="flex items-start gap-4 before:size-2 before:flex-none before:rounded-full before:bg-teal before:content-['']"
            >
              <div className="flex min-w-0 flex-col items-start gap-2.5">
                <h2 className={`${heading} text-[28px] tracking-normal text-teal lg:text-[33px]`}>
                  {title}
                </h2>
                <p>{dates}</p>
                {ongoing && (
                  <span className="rounded-[100px] bg-teal px-4 py-1.5 text-[14px] text-white">
                    En cours
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
