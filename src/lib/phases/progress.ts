import type { ProjectPhase } from '@/lib/phases/types';

export function getPhaseCompletionPercent(phase: ProjectPhase): number {
  if (phase.milestones.length === 0) {
    return 0;
  }

  const completedMilestones = phase.milestones.filter((milestone) => milestone.status === 'complete').length;

  return Math.round((completedMilestones / phase.milestones.length) * 100);
}
