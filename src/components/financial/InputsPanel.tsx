'use client';

import type { ModelInputs } from '@/lib/financial/types';

interface InputsPanelProps {
  inputs: ModelInputs;
  onChange: (next: ModelInputs) => void;
}

export function InputsPanel({ inputs, onChange }: InputsPanelProps) {
  const update = <K extends keyof ModelInputs>(key: K, value: ModelInputs[K]) => {
    onChange({ ...inputs, [key]: value });
  };

  return (
    <div className="section-card space-y-4">
      <div>
        <h2 className="text-xl font-semibold">Model Inputs</h2>
        <p className="mt-2 text-sm text-muted">Adjust the core development, financing, and operating assumptions.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-sm">
          <span className="mb-1 block text-muted">Total cost</span>
          <input className="w-full rounded-xl border border-border bg-white px-3 py-2" type="number" value={inputs.totalCost} onChange={(e) => update('totalCost', Number(e.target.value))} />
        </label>
        <label className="text-sm">
          <span className="mb-1 block text-muted">Monthly rent</span>
          <input className="w-full rounded-xl border border-border bg-white px-3 py-2" type="number" value={inputs.monthlyRent} onChange={(e) => update('monthlyRent', Number(e.target.value))} />
        </label>
        <label className="text-sm">
          <span className="mb-1 block text-muted">Interest rate</span>
          <input className="w-full rounded-xl border border-border bg-white px-3 py-2" type="number" step="0.001" value={inputs.interestRateAnnual} onChange={(e) => update('interestRateAnnual', Number(e.target.value))} />
        </label>
        <label className="text-sm">
          <span className="mb-1 block text-muted">Loan to cost</span>
          <input className="w-full rounded-xl border border-border bg-white px-3 py-2" type="number" step="0.01" value={inputs.loanToCost} onChange={(e) => update('loanToCost', Number(e.target.value))} />
        </label>
        <label className="text-sm">
          <span className="mb-1 block text-muted">Construction months</span>
          <input className="w-full rounded-xl border border-border bg-white px-3 py-2" type="number" value={inputs.constructionMonths} onChange={(e) => update('constructionMonths', Number(e.target.value))} />
        </label>
        <label className="text-sm">
          <span className="mb-1 block text-muted">Lease-up months</span>
          <input className="w-full rounded-xl border border-border bg-white px-3 py-2" type="number" value={inputs.leaseUpMonths} onChange={(e) => update('leaseUpMonths', Number(e.target.value))} />
        </label>
        <label className="text-sm">
          <span className="mb-1 block text-muted">Vacancy rate</span>
          <input className="w-full rounded-xl border border-border bg-white px-3 py-2" type="number" step="0.01" value={inputs.vacancyRate} onChange={(e) => update('vacancyRate', Number(e.target.value))} />
        </label>
        <label className="text-sm">
          <span className="mb-1 block text-muted">Expense ratio</span>
          <input className="w-full rounded-xl border border-border bg-white px-3 py-2" type="number" step="0.01" value={inputs.expenseRatio} onChange={(e) => update('expenseRatio', Number(e.target.value))} />
        </label>
      </div>
    </div>
  );
}
