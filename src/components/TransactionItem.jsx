import "../styles/transactions.css";

const TransactionItem = ({ title, category, amount, date }) => {
  return (
    <tr>
      <td>{title}</td>
      <td>{category}</td>
      <td className={amount < 0 ? "expense" : "income"}>
        {amount < 0 ? "-" : "+"}₦{Math.abs(amount).toLocaleString()}
      </td>
      <td>{date}</td>
    </tr>
  );
};

export default TransactionItem;
