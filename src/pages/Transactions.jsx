import TransactionItem from "../components/TransactionItem.jsx";
import { transactions } from "../data/transactions";
import "../styles/transactions.css";

const Transactions = () => {
  return (
    <div>
      <h1>Transactions</h1>
      <p className="subtitle">Your recent financial activities</p>

      <div className="table-card">
        <table>
          <thead>
            <tr>
              <th>Description</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            {transactions.map((tx) => (
              <TransactionItem key={tx.id} {...tx} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transactions;
