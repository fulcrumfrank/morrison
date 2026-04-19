import { formatCurrency } from '@/lib/financial/formatting';
import type { SummaryMetrics as SummaryMetricsType } from '@/lib/financial/types';

export function SummaryMetrics({ metrics }: { metrics: SummaryMetricsType }) {
  const cards = [
    { label: 'Equity Invested', value: formatCurrency(metrics.totalEquityInvested) },
    { label: 'Total Interest', value: formatCurrency(metrics.totalInterestPaid) },
    { label: 'Stabilized NOI', value: formatCurrency(metrics.stabilizedNOIAnnual) },
    { label: 'Net Sale Proceeds', value: formatCurrency(metrics.netSaleProceeds) },
    { label: 'Total Net Cash Flow', value: formatCurrency(metrics.totalNetCashFlow) },
  ];

  return (
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
      {cards.map((card) => (
        <div key={card.label} className="section-card">
          <p className="text-sm uppercase tracking-[0.16em] text-muted">{card.label}</p>
          <p className="mt-3 text-xl font-semibold">{card.value}</p>
        </div>
      ))}
    </section>
  );
}
