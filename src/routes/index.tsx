import { createFileRoute } from "@tanstack/react-router";
import heroImage from "@/assets/hero.jpg";
import najelaAsset from "@/assets/najela-mauricio.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Arquitetura Interna® — Mentoria Premium para Líderes de Alto Impacto",
      },
      {
        name: "description",
        content:
          "Mentoria privada para líderes que decidiram parar de colapsar no sigilo.",
      },
      {
        property: "og:title",
        content: "Arquitetura Interna® — Mentoria Premium para Líderes",
      },
      {
        property: "og:description",
        content:
          "Sustente por dentro o império que você constrói por fora.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

// TODO: substituir pelo número real de WhatsApp (formato: código do país + DDD + número)
const WHATSAPP_NUMBER = "5511999999999";

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
    <section className="relative flex min-h-[100svh] items-end overflow-hidden">
      <img
        src={heroImage}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
      <div className="absolute inset-x-0 top-0 mx-auto flex w-full max-w-6xl items-center justify-between px-6 pt-8">
        <span className="font-display text-sm font-semibold tracking-wide text-foreground">
          Arquitetura Interna<sup className="text-[9px] text-primary">®</sup>
        </span>
        <a
          href="#opcoes"
          className="text-[11px] font-bold uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-primary"
        >
          Contratar
        </a>
      </div>
      <div className="relative mx-auto grid w-full max-w-6xl items-end gap-12 px-6 pb-20 pt-40 sm:pb-28 md:grid-cols-[1.25fr_1fr]">
        <div>
          <h1 className="max-w-3xl font-display text-4xl font-medium leading-[1.08] text-balance sm:text-6xl">
            Sustente por dentro o império que você constrói por fora.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Mentoria privada para líderes que decidiram parar de colapsar no
            sigilo.
          </p>
          <a href="#opcoes" className={`${ctaPrimary} mt-10`}>
            Quero Conhecer as Opções
          </a>
        </div>
        <figure className="mx-auto w-full max-w-xs md:mx-0 md:max-w-sm md:justify-self-end">
          <img
            src={najelaAsset.url}
            alt="Nájela Maurício"
            className="w-full object-contain [mask-image:linear-gradient(to_bottom,black_60%,transparent_99%)]"
          />
        </figure>
      </div>
    </section>
  );
}

const ofertas = [
  {
    nome: "Mentoria Individual",
    descricao:
      "Acompanhamento privado e customizado de longo prazo para a sua rotina executiva.",
    nota: "Vagas limitadas por aplicação.",
    cta: "Aplicar para Mentoria",
    href: waLink(
      "Olá! Quero aplicar para a Mentoria Individual da Arquitetura Interna.",
    ),
    destaque: true,
  },
  {
    nome: "Sessão Estratégica",
    descricao:
      "Diagnóstico pontual de alta intensidade com plano de ação imediato.",
    nota: "Agenda sob consulta.",
    cta: "Agendar Sessão",
    href: waLink(
      "Olá! Quero agendar uma Sessão Estratégica da Arquitetura Interna.",
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
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {oferta.descricao}
              </p>
              <p className="mt-6 flex items-center gap-2 text-sm font-semibold text-primary">
                <span className="h-1 w-1 rounded-full bg-primary" />
                {oferta.nota}
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
