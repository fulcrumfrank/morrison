export type ProjectPhaseSlug = 'planning' | 'design' | 'construction' | 'operation';

export type MilestoneStatus = 'not_started' | 'in_progress' | 'complete' | 'blocked';

export interface Milestone {
  id: string;
  orderIndex: number;
  title: string;
  status: MilestoneStatus;
  notes?: string;
}

export interface ProjectPhase {
  id: ProjectPhaseSlug;
  title: string;
  milestones: Milestone[];
}
