import type { ModelInputs } from '@/lib/financial/types';

export const conservativePreset: ModelInputs = {
  totalCost: 350000,
  constructionMonths: 16,
  leaseUpMonths: 4,
  loanToCost: 0.75,
  interestRateAnnual: 0.08,
  monthlyRent: 2800,
  vacancyRate: 0.1,
  expenseRatio: 0.28,
  annualRentGrowth: 0.02,
  annualExpenseGrowth: 0.03,
  holdYears: 10,
  exitValueRecapturePct: 0.6,
  saleCostPct: 0.06,
};
