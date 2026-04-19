import { SectionHero } from '@/components/layout/SectionHero';
import { PhaseOverview } from '@/components/phases/PhaseOverview';

export default function PlanPhasesPage() {
  return (
    <div className="container-page space-y-6">
      <SectionHero
        title="Phases"
        body="A phase-by-phase outline of how the project moves from concept to operation."
      />
      <PhaseOverview />
    </div>
  );
}
