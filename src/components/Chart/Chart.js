import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = ({ monthsData, maxValue }) => {
  return (
    <div className="chart">
      {monthsData.map((item) => (
        <ChartBar
          key={item.label}
          value={item.value}
          maxValue={maxValue}
          label={item.label}
        />
      ))}
    </div>
  );
};
export default Chart;
