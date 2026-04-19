import type { ModelInputs } from '@/lib/financial/types';

export const aggressivePreset: ModelInputs = {
  totalCost: 340000,
  constructionMonths: 8,
  leaseUpMonths: 2,
  loanToCost: 0.7,
  interestRateAnnual: 0.07,
  monthlyRent: 3200,
  vacancyRate: 0.06,
  expenseRatio: 0.23,
  annualRentGrowth: 0.035,
  annualExpenseGrowth: 0.02,
  holdYears: 10,
  exitValueRecapturePct: 0.75,
  saleCostPct: 0.06,
};
