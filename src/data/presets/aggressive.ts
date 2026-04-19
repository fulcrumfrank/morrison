import type { ModelInputs } from '@/lib/financial/types';

export const aggressivePreset: ModelInputs = {
  totalCost: 325000,
  constructionMonths: 10,
  leaseUpMonths: 2,
  loanToCost: 0.75,
  interestRateAnnual: 0.07,
  monthlyRent: 3400,
  vacancyRate: 0.06,
  expenseRatio: 0.23,
  annualRentGrowth: 0.035,
  annualExpenseGrowth: 0.02,
  holdYears: 15,
  exitValueRecapturePct: 0.75,
  saleCostPct: 0.06,
};
