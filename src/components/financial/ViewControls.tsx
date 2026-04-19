'use client';

import type { Granularity, ModelInputs } from '@/lib/financial/types';

interface ViewControlsProps {
  holdYears: ModelInputs['holdYears'];
  granularity: Granularity;
  onHoldYearsChange: (value: ModelInputs['holdYears']) => void;
  onGranularityChange: (value: Granularity) => void;
}

export function ViewControls({ holdYears, granularity, onHoldYearsChange, onGranularityChange }: ViewControlsProps) {
  return (
    <div className="section-card flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        <h2 className="text-xl font-semibold">View Controls</h2>
        <p className="mt-2 text-sm text-muted">Switch between hold periods and display granularity.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm">
          <span className="mb-1 block text-muted">Hold period</span>
          <select className="w-full rounded-xl border border-border bg-white px-3 py-2" value={holdYears} onChange={(e) => onHoldYearsChange(Number(e.target.value) as ModelInputs['holdYears'])}>
            <option value={5}>5 years</option>
            <option value={10}>10 years</option>
            <option value={15}>15 years</option>
          </select>
        </label>
        <label className="text-sm">
          <span className="mb-1 block text-muted">Granularity</span>
          <select className="w-full rounded-xl border border-border bg-white px-3 py-2" value={granularity} onChange={(e) => onGranularityChange(e.target.value as Granularity)}>
            <option value="month">Month</option>
            <option value="quarter">Quarter</option>
            <option value="year">Year</option>
          </select>
        </label>
      </div>
    </div>
  );
}
