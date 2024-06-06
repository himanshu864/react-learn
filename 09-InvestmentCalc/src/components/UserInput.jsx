export default function UserInput({ onSelect, inputData }) {
  return (
    <main id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            defaultValue={inputData.initialInvestment}
            onChange={(e) =>
              onSelect({ initialInvestment: Number(e.target.value) })
            }
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            defaultValue={inputData.annualInvestment}
            onChange={(e) =>
              onSelect({ annualInvestment: Number(e.target.value) })
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            defaultValue={inputData.expectedReturn}
            onChange={(e) =>
              onSelect({ expectedReturn: Number(e.target.value) })
            }
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            defaultValue={inputData.duration}
            onChange={(e) => onSelect({ duration: Number(e.target.value) })}
          />
        </p>
      </div>
    </main>
  );
}
