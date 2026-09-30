import { createFileRoute } from "@tanstack/react-router";
import heroImage from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Arquitetura Interna® — Mentoria Premium para Líderes de Alto Impacto",
      },
      {
        name: "description",
        content:
          "Mentorias premium e soluções estratégicas para líderes e realizadores de alto impacto que decidiram parar de colapsar no sigilo.",
      },
      {
        property: "og:title",
        content: "Arquitetura Interna® — Mentoria Premium para Líderes",
      },
      {
        property: "og:description",
        content:
          "O império que você constrói por fora não precisa custar a sua estabilidade por dentro.",
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

const eyebrow =
  "text-[11px] font-bold uppercase tracking-[0.35em] text-primary";

function Index() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <Hero />
      <PainBlock />
      <MethodBlock />
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
      <div className="relative mx-auto w-full max-w-6xl px-6 pb-20 pt-40 sm:pb-28">
        <p className={eyebrow}>Mentoria Executiva · Alto Impacto</p>
        <h1 className="mt-6 max-w-3xl font-display text-4xl font-medium leading-[1.08] text-balance sm:text-6xl">
          O império que você constrói por fora não precisa custar a sua
          estabilidade por dentro.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Mentorias premium e soluções estratégicas para líderes e realizadores
          de alto impacto que decidiram parar de colapsar no sigilo.
        </p>
        <a href="#opcoes" className={`${ctaPrimary} mt-10`}>
          Quero Sustentar Meu Império
        </a>
      </div>
    </section>
  );
}

function PainBlock() {
  return (
    <section className="border-t border-border/60">
      <div className="mx-auto max-w-3xl px-6 py-24 text-center sm:py-32">
        <p className="font-display text-2xl font-medium leading-snug text-balance sm:text-3xl">
          É solitário estar no topo.
        </p>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
          Do lado de fora, números, palcos e expansão. Do lado de dentro,
          estresse crônico, noites em claro e a sensação de que a engrenagem
          vai falhar.
        </p>
        <p className="mt-8 font-semibold text-foreground">
          Você não precisa escolher entre o seu sucesso e a sua saúde.
        </p>
        <div className="mx-auto mt-10 h-px w-16 bg-primary" />
      </div>
    </section>
  );
}

const pilares = [
  {
    numero: "01",
    titulo: "Engenharia Emocional",
    descricao: "Blindagem contra o burnout executivo.",
  },
  {
    numero: "02",
    titulo: "Alinhamento de Identidade",
    descricao: "Sustentação interna para decisões de alto risco.",
  },
  {
    numero: "03",
    titulo: "Alta Performance Saudável",
    descricao: "Expansão dos seus negócios sem o colapso da sua vida pessoal.",
  },
];

function MethodBlock() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
      <p className={eyebrow}>O Método</p>
      <h2 className="mt-4 max-w-2xl font-display text-3xl font-medium leading-tight text-balance sm:text-5xl">
        O Método Arquitetura Interna<sup className="text-lg text-primary">®</sup>
      </h2>
      <div className="mt-14 divide-y divide-border border-y border-border">
        {pilares.map((pilar) => (
          <div
            key={pilar.numero}
            className="grid gap-2 py-8 sm:grid-cols-[72px_1fr] sm:gap-6"
          >
            <span className="font-display text-lg text-primary">
              {pilar.numero}
            </span>
            <div>
              <h3 className="text-lg font-semibold tracking-tight">
                {pilar.titulo}
              </h3>
              <p className="mt-1 leading-relaxed text-muted-foreground">
                {pilar.descricao}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const ofertas = [
  {
    etiqueta: "Imersão / VIP",
    nome: "Imersão Arquitetura Interna",
    descricao:
      "Diagnóstico pontual e plano de ação estratégico em um único dia de alta intensidade.",
    nota: "Vagas limitadas este mês",
    cta: "Quero Agendar Minha Imersão",
    href: waLink(
      "Olá! Quero agendar minha Imersão VIP da Arquitetura Interna.",
    ),
    destaque: true,
  },
  {
    etiqueta: "Mentoria Individual",
    nome: "Mentoria Arquitetura Interna",
    descricao:
      "Acompanhamento privado, de longo prazo e customizado para a sua rotina executiva.",
    nota: "Apenas por aplicação",
    cta: "Aplicar para a Mentoria",
    href: waLink(
      "Olá! Quero aplicar para a Mentoria Individual da Arquitetura Interna.",
    ),
    destaque: false,
  },
];

function OffersBlock() {
  return (
    <section id="opcoes" className="scroll-mt-8 border-t border-border/60">
      <div className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
        <p className={`${eyebrow} text-center`}>Opções de Contratação</p>
        <h2 className="mx-auto mt-4 max-w-2xl text-center font-display text-3xl font-medium leading-tight text-balance sm:text-5xl">
          Escolha o seu nível de profundidade
        </h2>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {ofertas.map((oferta) => (
            <article
              key={oferta.nome}
              className={`flex flex-col rounded-3xl border p-8 ${
                oferta.destaque
                  ? "border-primary/50 bg-card shadow-[0_20px_60px_-30px] shadow-primary/30"
                  : "border-border bg-card/60"
              }`}
            >
              <span className="self-start rounded-full border border-primary/40 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                {oferta.etiqueta}
              </span>
              <h3 className="mt-6 font-display text-2xl font-medium tracking-tight">
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
          Não sabe qual é o momento atual da sua Arquitetura Interna?
        </h2>
        <a
          href={waLink(
            "Olá! Não sei qual é o momento atual da minha Arquitetura Interna e quero falar com a assessoria.",
          )}
          target="_blank"
          rel="noreferrer"
          className={`${ctaGhost} mt-10`}
        >
          Falar com Assessoria no WhatsApp
        </a>
      </div>
    </section>
  );
}
