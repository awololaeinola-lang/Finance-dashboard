import "../styles/categories.css";

const categories = [
  { name: "Food", amount: 45000, percent: 45 },
  { name: "Transport", amount: 20000, percent: 20 },
  { name: "Utilities", amount: 15000, percent: 15 },
  { name: "Savings", amount: 20000, percent: 20 },
];

const Categories = () => {
  return (
    <div>
      <h1>Categories</h1>
      <p className="subtitle">Spending by category</p>

      <div className="categories-list">
        {categories.map((cat, index) => (
          <div className="category-card" key={index}>
            <div className="category-header">
              <span>{cat.name}</span>
              <strong>₦{cat.amount.toLocaleString()}</strong>
            </div>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${cat.percent}%` }}
              ></div>
            </div>

            <small>{cat.percent}% of total spending</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
