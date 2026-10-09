import { Sections, Footer } from "@/components/sections";
import { ScrollReveal } from "@/components/scroll-reveal";
import Image from "next/image";
import { MapPin, ArrowDown, HeartHandshake, Clock3, Smile } from "lucide-react";
import { Header } from "@/components/header";
import { Eyebrow, WhatsAppLink } from "@/components/ui";
import { clinic } from "@/lib/clinic";
export default function Home() {
  return (
    <>
      <Header />
      <main id="conteudo">
        <section id="inicio" className="hero container">
          <div className="hero-copy">
            <Eyebrow>ODONTOLOGIA COM UM OLHAR HUMANO</Eyebrow>
            <h1>
              Seu sorriso merece cuidado <span>em cada detalhe.</span>
            </h1>
            <p className="hero-description">
              Na Oral 360, unimos atendimento humanizado, profissionais
              qualificados e uma estrutura moderna para cuidar da saúde do seu
              sorriso.
            </p>
            <div className="hero-actions">
              <WhatsAppLink>Agendar pelo WhatsApp</WhatsAppLink>
              <a className="text-link" href="#sobre">
                Conhecer a Oral 360 <ArrowDown size={17} />
              </a>
            </div>
            <p className="hero-location">
              <MapPin size={18} aria-hidden="true" />
              <span>Unidades na Tijuca, Copacabana e Nova Iguaçu.</span>
            </p>
          </div>
          <div className="hero-visual">
            <div className="hero-photo">
              <Image
                src={clinic.images.hero}
                alt="Fotografia ilustrativa de uma dentista conversando com uma paciente em um consultório"
                fill
                preload
                sizes="(max-width: 767px) 92vw, 48vw"
              />
              <div className="photo-caption">
                <span className="caption-icon">
                  <HeartHandshake size={26} />
                </span>
                <div>
                  <strong>O cuidado começa ao acolher.</strong>
                  <span>Você no centro de cada atendimento.</span>
                </div>
              </div>
            </div>
            <span className="image-index">
              ORAL 360 <span>SAÚDE. CUIDADO. BEM-ESTAR.</span>
            </span>
          </div>
        </section>
        <div className="trust-strip">
          <div className="container trust-inner">
            <p>
              <HeartHandshake />
              Atendimento humanizado
            </p>
            <p>
              <Smile />
              Cuidado completo com seu sorriso
            </p>
            <p>
              <Clock3 />
              De segunda a sábado
            </p>
          </div>
        </div>
        <Sections />
      </main>
      <Footer />
      <ScrollReveal />
    </>
  );
}
