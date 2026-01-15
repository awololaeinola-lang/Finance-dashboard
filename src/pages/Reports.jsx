import "../styles/reports.css";

const reports = [
  { month: "January", income: 250000, expenses: 70000 },
  { month: "February", income: 220000, expenses: 90000 },
  { month: "March", income: 270000, expenses: 120000 },
];

const Reports = () => {
  return (
    <div>
      <h1>Reports</h1>
      <p className="subtitle">Financial performance overview</p>

      <div className="report-cards">
        <div className="report-card">
          <p>Total Income</p>
          <h2>₦740,000</h2>
        </div>
        <div className="report-card">
          <p>Total Expenses</p>
          <h2>₦280,000</h2>
        </div>
        <div className="report-card">
          <p>Net Savings</p>
          <h2>₦460,000</h2>
        </div>
      </div>

      <div className="monthly-report">
        {reports.map((item, index) => {
          const percent =
            (item.expenses / item.income) * 100;

          return (
            <div className="month-row" key={index}>
              <span>{item.month}</span>

              <div className="report-bar">
                <div
                  className="report-fill"
                  style={{ width: `${percent}%` }}
                ></div>
              </div>

              <small>
                ₦{item.expenses.toLocaleString()} / ₦
                {item.income.toLocaleString()}
              </small>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Reports;
