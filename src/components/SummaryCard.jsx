import "../styles/cards.css";

const SummaryCard = ({ title, amount }) => (
  <div className="summary-card">
    <p>{title}</p>
    <h2>{amount}</h2>
  </div>
);

export default SummaryCard;
