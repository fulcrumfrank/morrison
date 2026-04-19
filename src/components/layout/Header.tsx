import Link from 'next/link';
import { siteMeta } from '@/lib/content/siteMeta';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-canvas/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8 lg:px-10">
        <Link href="/" className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
          {siteMeta.title}
        </Link>
        <nav className="hidden gap-6 md:flex">
          {siteMeta.nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-muted hover:text-ink">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
