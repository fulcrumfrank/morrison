import type { CashFlowRow } from './types';

export function rowsToCsv(rows: CashFlowRow[]): string {
  const headers = [
    'label',
    'phase',
    'draw',
    'loanBalance',
    'interestExpense',
    'grossPotentialRent',
    'vacancyLoss',
    'effectiveGrossIncome',
    'operatingExpenses',
    'noi',
    'debtService',
    'netCashFlow',
    'cumulativeCashFlow',
  ];

  const body = rows.map((row) =>
    headers
      .map((header) => String(row[header as keyof CashFlowRow] ?? ''))
      .join(',')
  );

  return [headers.join(','), ...body].join('\n');
}
