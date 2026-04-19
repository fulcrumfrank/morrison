import { SectionHero } from '@/components/layout/SectionHero';
import { NavCards } from '@/components/layout/NavCards';
import { MetricStrip } from '@/components/marketing/MetricStrip';
import { homeContent } from '@/content/home';

const cards = [
  { href: '/vision', title: 'Vision', description: 'Project goals, flexibility, rental strategy, and long-term value case.' },
  { href: '/site', title: 'Site Context', description: 'Lot conditions, access, yard separation, and expressway mitigation strategy.' },
  { href: '/design', title: 'Design', description: 'Program, layouts, massing, dimensions, and future renderings.' },
  { href: '/financial-model', title: 'Financial Model', description: 'Interactive pro forma with assumptions, charts, granularity controls, and CSV export.' },
  { href: '/process', title: 'Process', description: 'Execution path, team strategy, permitting, and milestones.' },
  { href: '/documents', title: 'Documents', description: 'A central place for project artifacts, decks, diagrams, and downloadable files.' },
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
