import type { CashFlowRow, Granularity } from './types';

function rollupLabel(yearIndex: number, bucketIndex: number, granularity: Granularity) {
  if (granularity === 'month') return `Y${yearIndex}-M${String(bucketIndex).padStart(2, '0')}`;
  if (granularity === 'quarter') return `Y${yearIndex}-Q${bucketIndex}`;
  return `Year ${yearIndex}`;
}

export function aggregateRows(rows: CashFlowRow[], granularity: Granularity): CashFlowRow[] {
  if (granularity === 'month') return rows;

  const groups = new Map<string, CashFlowRow[]>();

  rows.forEach((row) => {
    const key =
      granularity === 'quarter'
        ? `${row.yearIndex}-${Math.ceil(row.monthIndex / 3)}`
        : `${row.yearIndex}`;

    const bucket = groups.get(key) ?? [];
    bucket.push(row);
    groups.set(key, bucket);
  });

  const aggregated: CashFlowRow[] = [];
  let cumulativeCashFlow = 0;

  Array.from(groups.entries()).forEach(([key, bucket], idx) => {
    const [yearRaw, bucketRaw] = key.split('-');
    const yearIndex = Number(yearRaw);
    const bucketIndex = bucketRaw ? Number(bucketRaw) : yearIndex;
    const last = bucket[bucket.length - 1];

    const sum = (selector: (row: CashFlowRow) => number) => bucket.reduce((acc, row) => acc + selector(row), 0);

    const netCashFlow = sum((row) => row.netCashFlow);
    cumulativeCashFlow += netCashFlow;

    aggregated.push({
      periodIndex: idx + 1,
      yearIndex,
      monthIndex: last.monthIndex,
      label: rollupLabel(yearIndex, bucketIndex, granularity),
      phase: last.phase,
      draw: sum((row) => row.draw),
      loanBalance: last.loanBalance,
      interestExpense: sum((row) => row.interestExpense),
      grossPotentialRent: sum((row) => row.grossPotentialRent),
      vacancyLoss: sum((row) => row.vacancyLoss),
      effectiveGrossIncome: sum((row) => row.effectiveGrossIncome),
      operatingExpenses: sum((row) => row.operatingExpenses),
      noi: sum((row) => row.noi),
      debtService: sum((row) => row.debtService),
      netCashFlow,
      cumulativeCashFlow,
    });
  });

  return aggregated;
}
