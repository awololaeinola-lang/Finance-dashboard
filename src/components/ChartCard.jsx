import "../styles/charts.css";

const ChartCard = ({ title, data }) => {
  const max = Math.max(...data.map(d => d.value));

  return (
    <div className="chart-card">
      <p className="chart-title">{title}</p>

      <svg viewBox="0 0 300 120" className="line-chart">
        {data.map((point, index) => {
          if (index === 0) return null;

          const prev = data[index - 1];

          const x1 = (index - 1) * 60;
          const y1 = 100 - (prev.value / max) * 80;

          const x2 = index * 60;
          const y2 = 100 - (point.value / max) * 80;

          return (
            <line
              key={index}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#111827"
              strokeWidth="3"
            />
          );
        })}

        {data.map((point, index) => {
          const cx = index * 60;
          const cy = 100 - (point.value / max) * 80;

          return (
            <circle
              key={index}
              cx={cx}
              cy={cy}
              r="4"
              fill="#111827"
            />
          );
        })}
      </svg>
    </div>
  );
};

export default ChartCard;
