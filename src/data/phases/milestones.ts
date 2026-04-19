import type { ProjectPhase } from '@/lib/phases/types';

export const projectPhases: ProjectPhase[] = [
  {
    id: 'planning',
    title: 'Planning',
    milestones: [
      {
        id: 'planning-project-brief',
        orderIndex: 1,
        title: 'Define project brief',
        status: 'complete',
        notes: 'Core goals, rental strategy, and high-level scope are documented.',
      },
      {
        id: 'planning-site-review',
        orderIndex: 2,
        title: 'Review site constraints',
        status: 'in_progress',
        notes: 'Track access, separation, and noise mitigation requirements.',
      },
      {
        id: 'planning-budget-range',
        orderIndex: 3,
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
        orderIndex: 1,
        title: 'Confirm space program',
        status: 'not_started',
      },
      {
        id: 'design-layouts',
        orderIndex: 2,
        title: 'Develop layout options',
        status: 'not_started',
      },
      {
        id: 'design-documentation',
        orderIndex: 3,
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
        orderIndex: 1,
        title: 'Collect contractor pricing',
        status: 'not_started',
      },
      {
        id: 'construction-permitting',
        orderIndex: 2,
        title: 'Submit for permitting',
        status: 'not_started',
      },
      {
        id: 'construction-build',
        orderIndex: 3,
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
        orderIndex: 1,
        title: 'Launch lease-up',
        status: 'not_started',
      },
      {
        id: 'operation-stabilization',
        orderIndex: 2,
        title: 'Reach stabilized occupancy',
        status: 'not_started',
      },
      {
        id: 'operation-performance-review',
        orderIndex: 3,
        title: 'Review operating performance',
        status: 'not_started',
      },
    ],
  },
];
