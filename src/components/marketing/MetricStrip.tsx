interface MetricStripProps {
  items: { label: string; value: string }[];
}

export function MetricStrip({ items }: MetricStripProps) {
  return (
    <section className="grid gap-4 md:grid-cols-3">
      {items.map((item) => (
        <div key={item.label} className="section-card">
          <p className="text-sm uppercase tracking-[0.16em] text-muted">{item.label}</p>
          <p className="mt-3 text-xl font-semibold">{item.value}</p>
        </div>
      ))}
    </section>
  );
}
