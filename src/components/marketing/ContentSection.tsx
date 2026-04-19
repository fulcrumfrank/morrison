interface ContentSectionProps {
  heading: string;
  body: string;
}

export function ContentSection({ heading, body }: ContentSectionProps) {
  return (
    <section className="section-card">
      <h2 className="text-2xl font-semibold tracking-tight">{heading}</h2>
      <p className="mt-3 max-w-3xl text-base leading-7 text-muted">{body}</p>
    </section>
  );
}
