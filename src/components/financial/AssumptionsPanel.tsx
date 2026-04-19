import { formatPercent } from '@/lib/financial/formatting';
import type { ModelInputs } from '@/lib/financial/types';

export function AssumptionsPanel({ inputs }: { inputs: ModelInputs }) {
  return (
    <div className="section-card">
      <h2 className="text-xl font-semibold">Assumption Snapshot</h2>
      <dl className="mt-4 grid gap-3 text-sm md:grid-cols-2">
        <div><dt className="text-muted">LTC</dt><dd>{formatPercent(inputs.loanToCost)}</dd></div>
        <div><dt className="text-muted">Vacancy</dt><dd>{formatPercent(inputs.vacancyRate)}</dd></div>
        <div><dt className="text-muted">Expense ratio</dt><dd>{formatPercent(inputs.expenseRatio)}</dd></div>
        <div><dt className="text-muted">Exit recapture</dt><dd>{formatPercent(inputs.exitValueRecapturePct)}</dd></div>
      </dl>
    </div>
  );
}
