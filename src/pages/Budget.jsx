import "../styles/budget.css";

const budgets = [
  { category: "Food", spent: 45000, limit: 60000 },
  { category: "Transport", spent: 20000, limit: 30000 },
  { category: "Utilities", spent: 18000, limit: 20000 },
  { category: "Savings", spent: 25000, limit: 20000 },
];

const Budget = () => {
  return (
    <div>
      <h1>Budget</h1>
      <p className="subtitle">Track your spending limits</p>

      <div className="budget-list">
        {budgets.map((item, index) => {
          const percent = Math.min(
            (item.spent / item.limit) * 100,
            100
          );

          const overBudget = item.spent > item.limit;

          return (
            <div className="budget-card" key={index}>
              <div className="budget-header">
                <span>{item.category}</span>
                <strong>
                  ₦{item.spent.toLocaleString()} / ₦
                  {item.limit.toLocaleString()}
                </strong>
              </div>

              <div className="budget-bar">
                <div
                  className={`budget-fill ${
                    overBudget ? "over" : "safe"
                  }`}
                  style={{ width: `${percent}%` }}
                ></div>
              </div>

              <small className={overBudget ? "over-text" : "safe-text"}>
                {overBudget ? "Over budget" : "On track"}
              </small>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Budget;
