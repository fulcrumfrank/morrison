import type { ModelInputs } from './types';

export const defaultInputs: ModelInputs = {
  totalCost: 350000,
  constructionMonths: 9,
  leaseUpMonths: 3,
  loanToCost: 0.7,
  interestRateAnnual: 0.075,
  monthlyRent: 2800,
  vacancyRate: 0.08,
  expenseRatio: 0.25,
  annualRentGrowth: 0.03,
  annualExpenseGrowth: 0.025,
  holdYears: 10,
  exitValueRecapturePct: 0.65,
  saleCostPct: 0.06,
};
