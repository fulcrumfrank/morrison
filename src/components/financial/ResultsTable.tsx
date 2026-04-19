import { formatCurrency } from '@/lib/financial/formatting';
import type { CashFlowRow } from '@/lib/financial/types';

export function ResultsTable({ rows }: { rows: CashFlowRow[] }) {
  return (
    <div className="section-card overflow-x-auto">
      <h2 className="text-xl font-semibold">Results Table</h2>
      <p className="mt-2 text-sm text-muted">Detailed cash flow output for the selected view.</p>
      <table className="mt-6 min-w-full text-left text-sm">
        <thead>
          <tr className="border-b border-border text-muted">
            <th className="px-3 py-2">Period</th>
            <th className="px-3 py-2">Phase</th>
            <th className="px-3 py-2">Draw</th>
            <th className="px-3 py-2">Interest</th>
            <th className="px-3 py-2">NOI</th>
            <th className="px-3 py-2">Debt Service</th>
            <th className="px-3 py-2">Net CF</th>
            <th className="px-3 py-2">Cumulative CF</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label} className="border-b border-border/60">
              <td className="px-3 py-2">{row.label}</td>
              <td className="px-3 py-2 capitalize">{row.phase}</td>
              <td className="px-3 py-2">{formatCurrency(row.draw)}</td>
              <td className="px-3 py-2">{formatCurrency(row.interestExpense)}</td>
              <td className="px-3 py-2">{formatCurrency(row.noi)}</td>
              <td className="px-3 py-2">{formatCurrency(row.debtService)}</td>
              <td className="px-3 py-2">{formatCurrency(row.netCashFlow)}</td>
              <td className="px-3 py-2">{formatCurrency(row.cumulativeCashFlow)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
