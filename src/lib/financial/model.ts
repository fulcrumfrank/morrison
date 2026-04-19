import type { CashFlowRow, ModelInputs } from './types';

function monthLabel(index: number) {
  const year = Math.floor(index / 12) + 1;
  const month = (index % 12) + 1;
  return `Y${year}-M${String(month).padStart(2, '0')}`;
}

export function generateMonthlyModel(inputs: ModelInputs): CashFlowRow[] {
  const totalMonths = inputs.holdYears * 12;
  const totalLoan = inputs.totalCost * inputs.loanToCost;
  const monthlyRate = inputs.interestRateAnnual / 12;
  const monthlyDraw = inputs.totalCost / inputs.constructionMonths;
  const monthlyLoanDraw = monthlyDraw * inputs.loanToCost;

  let loanBalance = 0;
  let cumulativeCashFlow = 0;
  const rows: CashFlowRow[] = [];

  for (let month = 0; month < totalMonths; month += 1) {
    const yearIndex = Math.floor(month / 12) + 1;
    const phase = month < inputs.constructionMonths
      ? 'construction'
      : month < inputs.constructionMonths + inputs.leaseUpMonths
        ? 'leaseup'
        : 'operations';

    const draw = phase === 'construction' ? monthlyDraw : 0;

    if (phase === 'construction') {
      loanBalance = Math.min(totalLoan, loanBalance + monthlyLoanDraw);
    }

    const interestExpense = loanBalance * monthlyRate;
    const debtService = interestExpense;

    const growthYears = Math.max(0, yearIndex - 1);
    const rentMultiplier = Math.pow(1 + inputs.annualRentGrowth, growthYears);
    const expenseMultiplier = Math.pow(1 + inputs.annualExpenseGrowth, growthYears);

    let grossPotentialRent = 0;
    if (phase === 'leaseup') {
      const leaseMonth = month - inputs.constructionMonths + 1;
      const leaseupFactor = leaseMonth / inputs.leaseUpMonths;
      grossPotentialRent = inputs.monthlyRent * rentMultiplier * leaseupFactor;
    } else if (phase === 'operations') {
      grossPotentialRent = inputs.monthlyRent * rentMultiplier;
    }

    const vacancyLoss = grossPotentialRent * inputs.vacancyRate;
    const effectiveGrossIncome = grossPotentialRent - vacancyLoss;
    const operatingExpenses = effectiveGrossIncome * inputs.expenseRatio * expenseMultiplier;
    const noi = effectiveGrossIncome - operatingExpenses;

    const equityPortionOfDraw = phase === 'construction' ? monthlyDraw * (1 - inputs.loanToCost) : 0;
    const netCashFlow = noi - debtService - equityPortionOfDraw;
    cumulativeCashFlow += netCashFlow;

    rows.push({
      periodIndex: month + 1,
      yearIndex,
      monthIndex: (month % 12) + 1,
      label: monthLabel(month),
      phase,
      draw,
      loanBalance,
      interestExpense,
      grossPotentialRent,
      vacancyLoss,
      effectiveGrossIncome,
      operatingExpenses,
      noi,
      debtService,
      netCashFlow,
      cumulativeCashFlow,
    });
  }

  const last = rows[rows.length - 1];
  const grossSaleValue = inputs.totalCost * inputs.exitValueRecapturePct;
  const saleCosts = grossSaleValue * inputs.saleCostPct;
  const netSaleProceeds = grossSaleValue - saleCosts - last.loanBalance;
  last.netCashFlow += netSaleProceeds;
  last.cumulativeCashFlow += netSaleProceeds;
  last.phase = 'sale';

  return rows;
}
