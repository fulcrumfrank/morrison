import Link from 'next/link';

interface NavCard {
  href: string;
  title: string;
  description: string;
}

export function NavCards({ cards }: { cards: NavCard[] }) {
  return (
    <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {cards.map((card) => (
        <Link key={card.href} href={card.href} className="section-card block hover:border-accent/40 hover:shadow-md">
          <h2 className="text-xl font-semibold">{card.title}</h2>
          <p className="mt-3 text-sm leading-6 text-muted">{card.description}</p>
        </Link>
      ))}
    </section>
  );
}
