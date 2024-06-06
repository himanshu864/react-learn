import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Result({ inputData }) {
  const annualData = calculateInvestmentResults(inputData);

  if (!annualData.length) return <p className="center">Invalid Duration</p>;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {annualData.map((data) => {
          return (
            <tr key={data.year}>
              <td>{data.year}</td>
              <td>{formatter.format(data.valueEndOfYear)}</td>
              <td>{formatter.format(data.interest)}</td>
              <td>{formatter.format(data.totalInterest)}</td>
              <td>{formatter.format(data.investedCapital)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
