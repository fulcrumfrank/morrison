import { SectionHero } from '@/components/layout/SectionHero';
import { NavCards } from '@/components/layout/NavCards';
import { MetricStrip } from '@/components/marketing/MetricStrip';
import { homeContent } from '@/content/home';

const cards = [
  { href: '/vision', title: 'Vision', description: 'Project goals, flexibility, rental strategy, and long-term value case.' },
  { href: '/plan', title: 'Plan', description: 'Roadmap, phases, and project decision structure.' },
  { href: '/plan/financial-model', title: 'Financial Model', description: 'Interactive pro forma with assumptions, charts, granularity controls, and CSV export.' },
  { href: '/plan/phases', title: 'Phases', description: 'Planning, design, construction, and operation placeholders.' },
];

export default function HomePage() {
  return (
    <div className="container-page space-y-6">
      <SectionHero
        eyebrow={homeContent.hero.eyebrow}
        title={homeContent.hero.title}
        body={homeContent.hero.body}
      />
      <MetricStrip items={homeContent.highlights} />
      <NavCards cards={cards} />
    </div>
  );
}
