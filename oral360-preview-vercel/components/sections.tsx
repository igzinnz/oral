import Image from "next/image";
import {
  ArrowUpRight,
  HeartHandshake,
  BadgeCheck,
  Smile,
  Armchair,
  MessageCircle,
  Sparkles,
  MapPin,
  Clock3,
  Plus,
  ArrowRight,
} from "lucide-react";
import { Brand, Eyebrow, WhatsAppLink } from "./ui";
import { clinic, navigation, units, whatsappUrl } from "@/lib/clinic";
const benefits = [
  {
    icon: HeartHandshake,
    title: "Atendimento humanizado",
    text: "Cada paciente merece atenção, respeito e um atendimento acolhedor.",
  },
  {
    icon: BadgeCheck,
    title: "Profissionais qualificados",
    text: "Uma equipe preparada para oferecer cuidado e atenção à saúde bucal.",
  },
  {
    icon: Smile,
    title: "Tratamentos completos",
    text: "Cuidado odontológico com diferentes possibilidades de atendimento em um só lugar.",
  },
  {
    icon: Armchair,
    title: "Estrutura moderna",
    text: "Ambientes pensados para proporcionar conforto e tranquilidade.",
  },
  {
    icon: MessageCircle,
    title: "Atendimento facilitado",
    text: "Entre em contato pelo WhatsApp para esclarecer dúvidas e obter informações.",
  },
  {
    icon: Sparkles,
    title: "Cuidado em cada detalhe",
    text: "Uma experiência de atendimento que valoriza o bem-estar de cada paciente.",
  },
];
const questions = [
  [
    "Onde ficam as unidades da Oral 360?",
    "Temos unidades na Tijuca, em Copacabana e em Nova Iguaçu.",
  ],
  [
    "Como posso agendar um atendimento?",
    "Entre em contato com nossa equipe pelo WhatsApp.",
  ],
  [
    "A clínica atende aos sábados?",
    "Sim, a Oral 360 informa atendimento de segunda a sábado. Consulte os horários disponíveis.",
  ],
  [
    "Como saber quais tratamentos estão disponíveis?",
    "Nossa equipe pode fornecer informações sobre os tratamentos oferecidos e orientar sobre o atendimento.",
  ],
];
export function Sections() {
  return (
    <>
      <section
        id="sobre"
        className="section container about-grid"
        aria-labelledby="about-title"
        data-reveal
      >
        <div className="about-visual">
          <div className="about-photo">
            <Image
              src={clinic.images.about}
              alt="Fotografia ilustrativa de uma paciente sorrindo ao olhar o espelho no consultório"
              fill
              sizes="(max-width: 767px) 90vw, 42vw"
            />
          </div>
          <div className="about-note">
            <span>360°</span>
            <p>
              Um olhar completo.
              <br />
              Um cuidado próximo.
            </p>
          </div>
        </div>
        <div className="about-copy">
          <Eyebrow>CONHEÇA A ORAL 360</Eyebrow>
          <h2 id="about-title">
            Mais do que cuidar de sorrisos, <span>cuidamos de pessoas.</span>
          </h2>
          <p>
            Acreditamos que um bom atendimento começa com escuta, atenção e
            respeito. Por isso, cada pessoa que chega à Oral 360 encontra espaço
            para conversar, tirar dúvidas e se sentir acolhida.
          </p>
          <p>
            Unimos profissionais qualificados, uma estrutura moderna e cuidado
            individualizado para tornar a sua experiência mais tranquila, do
            primeiro contato a cada atendimento.
          </p>
          <div className="about-signoff">
            <span className="line-mark" />
            <p>Sorrisos com saúde o tempo todo.</p>
          </div>
          <a href="#diferenciais" className="text-link">
            Um jeito mais humano de cuidar{" "}
            <ArrowRight size={17} aria-hidden="true" />
          </a>
        </div>
      </section>
      <section
        id="diferenciais"
        className="section benefits-section"
        aria-labelledby="benefits-title"
      >
        <div className="container">
          <div className="section-heading" data-reveal>
            <div>
              <Eyebrow>NOSSO JEITO DE CUIDAR</Eyebrow>
              <h2 id="benefits-title">Por que escolher a Oral 360?</h2>
            </div>
            <p>
              O cuidado que você procura.
              <br />A atenção que você merece.
            </p>
          </div>
          <div className="benefits-grid">
            {benefits.map(({ icon: Icon, title, text }, index) => (
              <article className="benefit" key={title} data-reveal>
                <div className="benefit-top">
                  <Icon size={27} strokeWidth={1.5} aria-hidden="true" />
                  <span>0{index + 1}</span>
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section
        id="tratamentos"
        className="section container"
        aria-labelledby="treatments-title"
        data-reveal
      >
        <div className="treatments-panel">
          <div className="treatments-copy">
            <Eyebrow>TRATAMENTOS ODONTOLÓGICOS</Eyebrow>
            <h2 id="treatments-title">
              Cuidado completo
              <br />
              para o seu sorriso.
            </h2>
            <p>
              Cada sorriso tem suas necessidades. Na Oral 360, você encontra
              atenção individualizada e diferentes possibilidades de cuidado
              odontológico.
            </p>
            <p>
              Converse com nossa equipe para conhecer os tratamentos disponíveis
              e receber orientações sobre o atendimento.
            </p>
            <WhatsAppLink
              className="button-light"
              message="Olá! Conheci a Oral 360 pelo site e gostaria de saber quais tratamentos estão disponíveis."
            >
              Consulte nossos tratamentos pelo WhatsApp
            </WhatsAppLink>
          </div>
          <div className="care-orbit">
            <div className="orbit-mark" aria-hidden="true">
              <span>
                360<span className="orbit-degree">°</span>
              </span>
              <Smile size={31} strokeWidth={1.4} />
              <small>SEU SORRISO NO CENTRO</small>
            </div>
            <ol className="care-steps">
              <li>
                <span className="step-number">01</span>
                <div>
                  <strong>Escuta atenta</strong>
                  <span>Acolhemos você e suas dúvidas.</span>
                </div>
              </li>
              <li>
                <span className="step-number">02</span>
                <div>
                  <strong>Orientação próxima</strong>
                  <span>Conversamos sobre possibilidades de cuidado.</span>
                </div>
              </li>
              <li>
                <span className="step-number">03</span>
                <div>
                  <strong>Cuidado contínuo</strong>
                  <span>Atenção em cada etapa do atendimento.</span>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </section>
      <section
        id="unidades"
        className="section units-section"
        aria-labelledby="units-title"
      >
        <div className="container">
          <div className="section-heading" data-reveal>
            <div>
              <Eyebrow>TRÊS UNIDADES. O MESMO CUIDADO.</Eyebrow>
              <h2 id="units-title">Estamos perto de você.</h2>
            </div>
            <p>
              Escolha a unidade mais próxima e fale
              <br className="desktop-break" /> com a nossa equipe para saber
              mais.
            </p>
          </div>
          <div className="units-grid">
            {units.map((unit, index) => (
              <article key={unit.name} className="unit-card" data-reveal>
                <div className="unit-top">
                  <span className="unit-pin">
                    <MapPin size={23} strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <span>UNIDADE 0{index + 1}</span>
                </div>
                <p className="unit-brand">ORAL 360</p>
                <h3>{unit.name}</h3>
                <p className="unit-city">{unit.city}</p>
                {unit.address && <p>{unit.address}</p>}
                {unit.mapUrl && (
                  <a
                    href={unit.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link"
                  >
                    Ver mapa <ArrowUpRight size={16} />
                  </a>
                )}
                <p className="unit-hours">
                  <Clock3 size={15} aria-hidden="true" /> Segunda a sábado
                </p>
                <a
                  className="unit-link"
                  href={whatsappUrl(
                    `Olá! Conheci a Oral 360 pelo site e gostaria de informações sobre a unidade ${unit.name}, o endereço e os horários disponíveis.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Solicitar informações{" "}
                  <ArrowUpRight size={18} aria-hidden="true" />
                  <span className="sr-only">
                    {" "}
                    sobre a unidade {unit.name} (WhatsApp, nova aba)
                  </span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section
        id="contato"
        className="contact-section"
        aria-labelledby="contact-title"
      >
        <div className="container contact-inner" data-reveal>
          <div>
            <Eyebrow>VAMOS CONVERSAR?</Eyebrow>
            <h2 id="contact-title">
              Seu próximo sorriso começa com uma conversa.
            </h2>
            <p>
              Entre em contato com nossa equipe, tire suas dúvidas e saiba mais
              sobre os atendimentos disponíveis na Oral 360.
            </p>
          </div>
          <div className="contact-action">
            <WhatsAppLink>Conversar pelo WhatsApp</WhatsAppLink>
            <span>
              <Clock3 size={15} aria-hidden="true" /> Atendimento de segunda a
              sábado
            </span>
          </div>
        </div>
      </section>
      <section
        className="section container faq-grid"
        aria-labelledby="faq-title"
        data-reveal
      >
        <div>
          <Eyebrow>PODEMOS AJUDAR?</Eyebrow>
          <h2 id="faq-title">
            Suas dúvidas,
            <br />
            nosso cuidado.
          </h2>
          <p>
            Algumas respostas para você
            <br />
            dar o próximo passo com tranquilidade.
          </p>
          <a
            className="text-link"
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
          >
            Fale com a nossa equipe{" "}
            <ArrowUpRight size={17} aria-hidden="true" />
            <span className="sr-only"> (WhatsApp, nova aba)</span>
          </a>
        </div>
        <div className="faq-list">
          {questions.map(([question, answer], index) => (
            <details key={question} name="faq" className="faq-item">
              <summary>
                <span className="faq-number">0{index + 1}</span>
                <span>{question}</span>
                <Plus size={19} aria-hidden="true" />
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#inicio" aria-label="Oral 360 — voltar ao início">
              <Brand />
            </a>
            <p>
              Sorrisos com saúde
              <br />o tempo todo.
            </p>
          </div>
          <div>
            <h2>Explore</h2>
            <ul>
              {navigation
                .filter(([, id]) => id !== "inicio")
                .map(([label, id]) => (
                  <li key={id}>
                    <a href={`#${id}`}>{label}</a>
                  </li>
                ))}
            </ul>
          </div>
          <div>
            <h2>Nossas unidades</h2>
            <ul>
              {units.map((unit) => (
                <li key={unit.name}>
                  <a
                    href={whatsappUrl(
                      `Olá! Gostaria de informações sobre a unidade ${unit.name} da Oral 360.`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {unit.name}
                    <span className="sr-only"> (WhatsApp, nova aba)</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Vamos conversar</h2>
            <a
              className="footer-phone"
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
            >
              {clinic.phone} <ArrowUpRight size={16} />
              <span className="sr-only"> (WhatsApp, nova aba)</span>
            </a>
            <p>
              Segunda a sábado.
              <br />
              Consulte os horários disponíveis.
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Oral 360. Todos os direitos reservados.
          </span>
          <a href="#inicio">Voltar ao início ↑</a>
        </div>
        <p className="preview-notice">
          Prévia comercial independente, sem caráter de site oficial.
          Fotografias ilustrativas; não representam a equipe, os pacientes ou as
          instalações da Oral 360.
        </p>
      </div>
    </footer>
  );
}
