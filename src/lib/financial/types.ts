export type Granularity = 'month' | 'quarter' | 'year';
export type Phase = 'construction' | 'leaseup' | 'operations' | 'sale';

export interface ModelInputs {
  totalCost: number;
  constructionMonths: number;
  leaseUpMonths: number;
  loanToCost: number;
  interestRateAnnual: number;
  monthlyRent: number;
  vacancyRate: number;
  expenseRatio: number;
  annualRentGrowth: number;
  annualExpenseGrowth: number;
  holdYears: 5 | 10 | 15;
  exitValueRecapturePct: number;
  saleCostPct: number;
}

export interface CashFlowRow {
  periodIndex: number;
  yearIndex: number;
  monthIndex: number;
  label: string;
  phase: Phase;
  draw: number;
  loanBalance: number;
  interestExpense: number;
  grossPotentialRent: number;
  vacancyLoss: number;
  effectiveGrossIncome: number;
  operatingExpenses: number;
  noi: number;
  debtService: number;
  netCashFlow: number;
  cumulativeCashFlow: number;
}

export interface SummaryMetrics {
  totalEquityInvested: number;
  totalInterestPaid: number;
  totalNetCashFlow: number;
  stabilizedNOIAnnual: number;
  netSaleProceeds: number;
}
