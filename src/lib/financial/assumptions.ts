import type { ModelInputs } from './types';

export const defaultInputs: ModelInputs = {
  totalCost: 350000,
  constructionMonths: 14,
  leaseUpMonths: 3,
  loanToCost: 0.75,
  interestRateAnnual: 0.075,
  monthlyRent: 3000,
  vacancyRate: 0.08,
  expenseRatio: 0.25,
  annualRentGrowth: 0.03,
  annualExpenseGrowth: 0.025,
  holdYears: 10,
  exitValueRecapturePct: 0.65,
  saleCostPct: 0.06,
};
