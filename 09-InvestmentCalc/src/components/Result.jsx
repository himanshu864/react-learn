import { calculateInvestmentResults } from "../util/investment";
import { formatter } from "../util/investment";

export default function Result({ inputData }) {
  const annualData = calculateInvestmentResults({ ...inputData });

  if (!annualData.length) return <p className="center">Invalid Duration</p>;

  return (
    <section>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {annualData.map(
            ({
              year,
              valueEndOfYear,
              interest,
              totalInterest,
              investedCapital,
            }) => {
              return (
                <tr key={year}>
                  <td>{year}</td>
                  <td>{formatter.format(valueEndOfYear)}</td>
                  <td>{formatter.format(interest)}</td>
                  <td>{formatter.format(totalInterest)}</td>
                  <td>{formatter.format(investedCapital)}</td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </section>
  );
}
