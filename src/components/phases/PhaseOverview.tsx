import { projectPhases } from '@/data/phases/milestones';
import { getPhaseCompletionPercent } from '@/lib/phases/progress';
import type { MilestoneStatus, ProjectPhase } from '@/lib/phases/types';

function getCompletedMilestoneCount(phase: ProjectPhase): number {
  return phase.milestones.filter((milestone) => milestone.status === 'complete').length;
}

function getCurrentPhaseId(phases: ProjectPhase[]): ProjectPhase['id'] | null {
  const firstIncompletePhase = phases.find((phase) => getPhaseCompletionPercent(phase) < 100);

  return firstIncompletePhase?.id ?? null;
}

function formatStatusLabel(status: MilestoneStatus): string {
  return status.replace('_', ' ');
}

function getStatusClasses(status: MilestoneStatus): string {
  switch (status) {
    case 'complete':
      return 'bg-green-100 text-green-800';
    case 'in_progress':
      return 'bg-amber-100 text-amber-800';
    case 'blocked':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-slate-100 text-slate-700';
  }
}

export function PhaseOverview() {
  const currentPhaseId = getCurrentPhaseId(projectPhases);

  return (
    <section className="space-y-5">
      {projectPhases.map((phase) => {
        const percentComplete = getPhaseCompletionPercent(phase);
        const completedMilestones = getCompletedMilestoneCount(phase);
        const isCurrentPhase = phase.id === currentPhaseId;
        const orderedMilestones = [...phase.milestones].sort((a, b) => a.orderIndex - b.orderIndex);

        return (
          <details
            key={phase.id}
            open={isCurrentPhase}
            className={[
              'rounded-3xl border bg-surface p-6 shadow-sm transition-colors',
              isCurrentPhase ? 'border-accent shadow-md' : 'border-border',
            ].join(' ')}
          >
            <summary className="cursor-pointer list-none">
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
            </summary>

            <div className="mt-5 space-y-3 border-t border-border pt-5">
              {orderedMilestones.map((milestone) => (
                <div
                  key={milestone.id}
                  className="flex flex-col gap-3 rounded-2xl border border-border/80 bg-canvas/60 px-4 py-3 md:flex-row md:items-center md:justify-between"
                >
                  <div className="space-y-1">
                    <p className="text-sm text-muted">Milestone {milestone.orderIndex}</p>
                    <h3 className="text-base font-medium text-ink">{milestone.title}</h3>
                  </div>
                  <span
                    className={[
                      'inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em]',
                      getStatusClasses(milestone.status),
                    ].join(' ')}
                  >
                    {formatStatusLabel(milestone.status)}
                  </span>
                </div>
              ))}
            </div>
          </details>
        );
      })}
    </section>
  );
}
