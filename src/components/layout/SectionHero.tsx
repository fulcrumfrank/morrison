interface SectionHeroProps {
  eyebrow?: string;
  title: string;
  body: string;
}

export function SectionHero({ eyebrow, title, body }: SectionHeroProps) {
  return (
    <section className="section-card">
      {eyebrow ? <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">{eyebrow}</p> : null}
      <h1 className="mt-3 max-w-4xl text-4xl font-semibold tracking-tight md:text-5xl">{title}</h1>
      <p className="section-copy">{body}</p>
    </section>
  );
}
