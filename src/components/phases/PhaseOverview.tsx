import Link from 'next/link';
import { projectPhases } from '@/data/phases/milestones';
import { getPhaseCompletionPercent } from '@/lib/phases/progress';
import type { ProjectPhase } from '@/lib/phases/types';

function getCompletedMilestoneCount(phase: ProjectPhase): number {
  return phase.milestones.filter((milestone) => milestone.status === 'complete').length;
}

function getCurrentPhaseId(phases: ProjectPhase[]): ProjectPhase['id'] | null {
  const firstIncompletePhase = phases.find((phase) => getPhaseCompletionPercent(phase) < 100);

  return firstIncompletePhase?.id ?? null;
}

export function PhaseOverview() {
  const currentPhaseId = getCurrentPhaseId(projectPhases);

  return (
    <section className="space-y-5">
      {projectPhases.map((phase) => {
        const percentComplete = getPhaseCompletionPercent(phase);
        const completedMilestones = getCompletedMilestoneCount(phase);
        const isCurrentPhase = phase.id === currentPhaseId;

        return (
          <Link
            key={phase.id}
            href={`/plan/phases/${phase.id}`}
            className={[
              'block rounded-3xl border bg-surface p-6 shadow-sm transition-colors',
              isCurrentPhase ? 'border-accent shadow-md' : 'border-border hover:border-accent/40',
            ].join(' ')}
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <h2 className="text-2xl font-semibold tracking-tight">{phase.title}</h2>
                  {isCurrentPhase ? (
                    <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                      Current
                    </span>
                  ) : null}
                </div>
                <p className="text-sm leading-6 text-muted">
                  {completedMilestones} of {phase.milestones.length} milestones complete
                </p>
              </div>

              <div className="w-full max-w-xs space-y-2">
                <div className="flex items-center justify-between text-sm font-medium text-ink">
                  <span>Progress</span>
                  <span>{percentComplete}%</span>
                </div>
                <div className="h-2 rounded-full bg-border">
                  <div
                    className="h-2 rounded-full bg-accent transition-[width]"
                    style={{ width: `${percentComplete}%` }}
                  />
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </section>
  );
}
