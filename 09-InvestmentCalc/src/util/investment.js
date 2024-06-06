// This function expects a JS object as an argument
export function calculateInvestmentResults({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}) {
  if (duration < 1)
    return [];

  const annualData = [];
  let investmentValue = initialInvestment;
  let sumInterest = 0;

  for (let i = 1; i <= duration; i++) {
    const interestEarnedInYear = investmentValue * (expectedReturn / 100);
    sumInterest += interestEarnedInYear;
    investmentValue += interestEarnedInYear + annualInvestment;

    annualData.push({
      year: i,
      valueEndOfYear: investmentValue,
      interest: interestEarnedInYear,
      totalInterest: sumInterest,
      investedCapital: investmentValue - sumInterest,
    });
  }

  return annualData;
}

// Example Usage: formatter.format(1000) => yields "$1,000"
export const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
