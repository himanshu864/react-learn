export default function UserInput({ onSelect }) {
  return (
    <main id="user-input">
      <div className="input-group">
        <label>
          Initial Investment
          <input
            type="number"
            defaultValue={10000}
            onChange={(e) =>
              onSelect({ initialInvestment: Number(e.target.value) })
            }
          />
        </label>
        <label>
          Annual Investment
          <input
            type="number"
            defaultValue={1200}
            onChange={(e) =>
              onSelect({ annualInvestment: Number(e.target.value) })
            }
          />
        </label>
      </div>
      <div className="input-group">
        <label>
          Expected Return
          <input
            type="number"
            defaultValue={6}
            onChange={(e) =>
              onSelect({ expectedReturn: Number(e.target.value) })
            }
          />
        </label>
        <label>
          Duration
          <input
            type="number"
            defaultValue={1}
            onChange={(e) => onSelect({ duration: Number(e.target.value) })}
          />
        </label>
      </div>
    </main>
  );
}
