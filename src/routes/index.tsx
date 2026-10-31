import { createFileRoute } from "@tanstack/react-router";
import heroImage from "@/assets/hero.jpg";
import najelaAsset from "../assets/najela-mauricio.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Arquitetura Interna® — Terapia, Assessoria e Arquitetura Executiva",
      },
      {
        name: "description",
        content:
          "O desenvolvimento humano transforma a maneira como pensamos, decidimos e construímos resultados. Terapia individual e de casal, assessoria executiva e Arquitetura Interna Executiva.",
      },
      {
        property: "og:title",
        content: "Arquitetura Interna® — Terapia, Assessoria e Arquitetura Executiva",
      },
      {
        property: "og:description",
        content:
          "O desenvolvimento humano transforma a maneira como pensamos, decidimos e construímos resultados.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://najelamauricio.lovable.app" },
    ],
    links: [{ rel: "canonical", href: "https://najelamauricio.lovable.app" }],
  }),
  component: Index,
});

const WHATSAPP_NUMBER = "5541996783369";

function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

const ctaPrimary =
  "inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-xs font-extrabold uppercase tracking-[0.2em] text-primary-foreground shadow-[0_14px_40px_-14px] shadow-primary/60 transition-transform duration-200 hover:scale-[1.03]";

const ctaGhost =
  "inline-flex items-center justify-center rounded-full border border-primary/60 px-8 py-4 text-xs font-extrabold uppercase tracking-[0.2em] text-primary transition-colors duration-200 hover:bg-primary/10";

function Index() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <Hero />
      <OffersBlock />
      <EscapeBlock />
      <footer className="border-t border-border/60 py-10">
        <p className="text-center text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
          Arquitetura Interna® · Todos os direitos reservados
        </p>
      </footer>
    </main>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden">
      <img
        src={heroImage}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
      <div className="absolute inset-x-0 top-0 mx-auto flex w-full max-w-6xl items-center justify-between px-6 pt-8">
        <div className="flex flex-col gap-1">
          <span className="font-display text-sm font-semibold tracking-wide text-foreground">
            Arquitetura Interna<sup className="text-[9px] text-primary">®</sup>
          </span>
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary/80">
            Nájela Maurício
          </span>
        </div>
        <a
          href={waLink("Olá! Quero contratar a Arquitetura Interna.")}
          target="_blank"
          rel="noreferrer"
          className="text-[11px] font-bold uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-primary"
        >
          Contratar
        </a>
      </div>
      <div className="relative mx-auto w-full max-w-6xl px-6 pb-4 pt-40">
        <h1 className="font-display text-4xl font-medium leading-[1.08] text-balance sm:text-6xl">
          O desenvolvimento humano transforma a maneira como pensamos, decidimos
          e construímos resultados.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Atendimento privado para quem decidiu parar de colapsar no sigilo.
        </p>
        <a
          href={waLink("Olá! Quero conhecer as opções da Arquitetura Interna.")}
          target="_blank"
          rel="noreferrer"
          className={`${ctaPrimary} mt-10`}
        >
          Quero Conhecer as Opções
        </a>
      </div>
      <figure className="relative w-full border-t border-primary/25">
        <img
          src={najelaAsset.url}
          alt="Najela - Arquitetura Interna"
          className="w-full h-auto object-cover [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_55%,transparent_98%)]"
        />
      </figure>
    </section>
  );
}

const ofertas = [
  {
    nome: "Assessoria Executiva",
    descricao:
      "Clareza para tomar decisões, dinâmicas do servir e do transbordar.",
    cta: "Falar sobre Assessoria Executiva",
    href: waLink("Olá! Quero falar sobre a Assessoria Executiva."),
    destaque: false,
  },
  {
    nome: "Arquitetura Interna Executiva",
    descricao:
      "Dinâmicas internas sabotadoras nos negócios e sobrecarga às emoções e à mente.",
    cta: "Aplicar para Arquitetura Interna Executiva",
    href: waLink("Olá! Quero aplicar para a Arquitetura Interna Executiva."),
    destaque: true,
  },
  {
    nome: "Projetos de DHO, T&D e Processos de Aprendizagem Corporativa Contínua ou Pontual",
    cta: "Falar sobre Projetos de DHO e T&D",
    href: waLink(
      "Olá! Quero falar sobre Projetos de DHO, T&D e Processos de Aprendizagem Corporativa.",
    ),
    destaque: false,
  },
  {
    nome: "Processo de Desenvolvimento Individual",
    descricao: "Dinâmicas emocionais e relacionais individuais.",
    cta: "Agendar Processo de Desenvolvimento Individual",
    href: waLink(
      "Olá! Quero agendar um Processo de Desenvolvimento Individual.",
    ),
    destaque: false,
  },
  {
    nome: "Processo de Desenvolvimento de Casal",
    descricao: "Dinâmicas emocionais e relacionais de casal.",
    cta: "Agendar Processo de Desenvolvimento de Casal",
    href: waLink(
      "Olá! Quero agendar um Processo de Desenvolvimento de Casal.",
    ),
    destaque: false,
  },
];

function OffersBlock() {
  return (
    <section id="opcoes" className="scroll-mt-8 border-t border-border/60">
      <div className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
        <div className="grid gap-6 md:grid-cols-2">
          {ofertas.map((oferta) => (
            <article
              key={oferta.nome}
              className={`flex flex-col rounded-3xl border p-8 ${
                oferta.destaque
                  ? "border-primary/50 bg-card shadow-[0_20px_60px_-30px] shadow-primary/30"
                  : "border-border bg-card/60"
              }`}
            >
              <h3 className="font-display text-2xl font-medium tracking-tight">
                {oferta.nome}
              </h3>
              <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">
                {oferta.descricao}
              </p>
              <a
                href={oferta.href}
                target="_blank"
                rel="noreferrer"
                className={`${ctaPrimary} mt-8 w-full`}
              >
                {oferta.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function EscapeBlock() {
  return (
    <section className="border-t border-border/60">
      <div className="mx-auto max-w-3xl px-6 py-24 text-center sm:py-28">
        <h2 className="font-display text-2xl font-medium leading-snug text-balance sm:text-4xl">
          Dúvidas sobre o momento atual da sua Arquitetura Interna?
        </h2>
        <a
          href={waLink(
            "Olá! Tenho dúvidas sobre o momento atual da minha Arquitetura Interna e quero falar com a assessoria.",
          )}
          target="_blank"
          rel="noreferrer"
          className={`${ctaGhost} mt-10`}
        >
          Falar com a Assessoria via WhatsApp
        </a>
      </div>
    </section>
  );
}
