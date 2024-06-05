import Header from "./components/Header.jsx";

function App() {
  return (
    <>
      <Header />
      <section id="user-input">
        <div className="input-group">
          <label>
            Initial Investment
            <input type="number" />
          </label>
          <label>
            Annual Investment
            <input type="number" />
          </label>
        </div>
        <div className="input-group">
          <label>
            Expected Return
            <input type="number" />
          </label>
          <label>
            Duration
            <input type="number" />
          </label>
        </div>
      </section>
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
            <tr>
              {/* Create Dynamically */}
              <td>1</td>
              <td>$12314</td>
              <td>$1231</td>
              <td>$1231</td>
              <td>$12000</td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
}

export default App;
