import { SectionHero } from '@/components/layout/SectionHero';
import { NavCards } from '@/components/layout/NavCards';

const cards = [
  {
    href: '/plan/financial-model',
    title: 'Financial Model',
    description: 'Interactive pro forma for construction, financing, operations, and sale assumptions.',
  },
  {
    href: '/plan/phases',
    title: 'Phases',
    description: 'Project phases from planning through operation.',
  },
];

export default function PlanPage() {
  return (
    <div className="container-page space-y-6">
      <SectionHero
        title="Plan"
        body="The planning hub for project execution, phase sequencing, and financial evaluation."
      />
      <NavCards cards={cards} />
    </div>
  );
}
