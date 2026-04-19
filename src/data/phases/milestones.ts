import type { ProjectPhase } from '@/lib/phases/types';

export const projectPhases: ProjectPhase[] = [
  {
    id: 'planning',
    title: 'Planning',
    milestones: [
      {
        id: 'planning-project-brief',
        title: 'Define project brief',
        status: 'complete',
        notes: 'Core goals, rental strategy, and high-level scope are documented.',
      },
      {
        id: 'planning-site-review',
        title: 'Review site constraints',
        status: 'in_progress',
        notes: 'Track access, separation, and noise mitigation requirements.',
      },
      {
        id: 'planning-budget-range',
        title: 'Set preliminary budget range',
        status: 'not_started',
      },
    ],
  },
  {
    id: 'design',
    title: 'Design',
    milestones: [
      {
        id: 'design-program',
        title: 'Confirm space program',
        status: 'not_started',
      },
      {
        id: 'design-layouts',
        title: 'Develop layout options',
        status: 'not_started',
      },
      {
        id: 'design-documentation',
        title: 'Prepare design package',
        status: 'blocked',
        notes: 'Waiting on planning decisions before documenting the preferred direction.',
      },
    ],
  },
  {
    id: 'construction',
    title: 'Construction',
    milestones: [
      {
        id: 'construction-pricing',
        title: 'Collect contractor pricing',
        status: 'not_started',
      },
      {
        id: 'construction-permitting',
        title: 'Submit for permitting',
        status: 'not_started',
      },
      {
        id: 'construction-build',
        title: 'Complete construction',
        status: 'not_started',
      },
    ],
  },
  {
    id: 'operation',
    title: 'Operation',
    milestones: [
      {
        id: 'operation-lease-up',
        title: 'Launch lease-up',
        status: 'not_started',
      },
      {
        id: 'operation-stabilization',
        title: 'Reach stabilized occupancy',
        status: 'not_started',
      },
      {
        id: 'operation-performance-review',
        title: 'Review operating performance',
        status: 'not_started',
      },
    ],
  },
];
