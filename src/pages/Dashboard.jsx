import SummaryCard from "../components/SummaryCard";
import ChartCard from "../components/ChartCard";
import "../styles/pages.css";

const spendingData = [
  { month: "Jan", value: 40 },
  { month: "Feb", value: 65 },
  { month: "Mar", value: 30 },
  { month: "Apr", value: 80 },
  { month: "May", value: 55 },
];

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>

      <div className="grid">
        <SummaryCard title="Balance" amount="₦180,000" />
        <SummaryCard title="Income" amount="₦250,000" />
        <SummaryCard title="Expenses" amount="₦70,000" />
      </div>

      <div className="grid">
        <ChartCard title="Monthly Spending Trend" data={spendingData} />
      </div>
    </div>
  );
};

export default Dashboard;
