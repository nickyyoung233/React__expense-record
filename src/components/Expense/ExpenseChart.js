import Chart from "../Chart/Chart";

const ExpenseChart = ({ expenses }) => {
  const chartData = [
    { label: "一月", value: 0 },
    { label: "二月", value: 0 },
    { label: "三月", value: 0 },
    { label: "四月", value: 0 },
    { label: "五月", value: 0 },
    { label: "六月", value: 0 },
    { label: "七月", value: 0 },
    { label: "八月", value: 0 },
    { label: "九月", value: 0 },
    { label: "十月", value: 0 },
    { label: "十一月", value: 0 },
    { label: "十二月", value: 0 },
  ];
  let maxValue = 0;
  let chart = "";
  if (expenses.length > 0) {
    for (const expense of expenses) {
      const expenseMonth = expense.date.getMonth();
      chartData[expenseMonth].value += expense.amount;
      maxValue += expense.amount;
    }
    chart = <Chart monthsData={chartData} maxValue={maxValue} />;
  }

  return chart;
};
export default ExpenseChart;
