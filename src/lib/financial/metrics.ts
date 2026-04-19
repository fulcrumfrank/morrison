import type { CashFlowRow, SummaryMetrics } from './types';

export function summarizeMonthlyRows(rows: CashFlowRow[]): SummaryMetrics {
  const totalEquityInvested = rows.reduce((acc, row) => acc + Math.max(0, row.draw * 0.3), 0);
  const totalInterestPaid = rows.reduce((acc, row) => acc + row.interestExpense, 0);
  const totalNetCashFlow = rows.reduce((acc, row) => acc + row.netCashFlow, 0);

  const stabilizedRows = rows.filter((row) => row.phase === 'operations' || row.phase === 'sale').slice(0, 12);
  const stabilizedNOIAnnual = stabilizedRows.reduce((acc, row) => acc + row.noi, 0);
  const netSaleProceeds = rows[rows.length - 1].netCashFlow - (rows[rows.length - 1].noi - rows[rows.length - 1].debtService);

  return {
    totalEquityInvested,
    totalInterestPaid,
    totalNetCashFlow,
    stabilizedNOIAnnual,
    netSaleProceeds,
  };
}
