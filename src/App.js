import Expense from "./components/Expense/Expense";
import InfoGather from "./components/InfoGather/InfoGather";
import { useState } from "react";
const _expenses = [
  {
    id: "e1",
    title: "演唱会",
    amount: 388,
    date: new Date(2022, 7, 12),
  },
  {
    id: "e2",
    title: "LiveShow",
    amount: 288,
    date: new Date(2023, 4, 30),
  },
  {
    id: "e3",
    title: "展览",
    amount: 120,
    date: new Date(2023, 5, 30),
  },
  {
    id: "e4",
    title: "电影",
    amount: 60,
    date: new Date(2023, 5, 20),
  },
];

function App() {
  const [expenses, setExpenses] = useState(_expenses);
  const getExpenseDate = (data) => {
    setExpenses((prevalue) => [data, ...prevalue]);
  };
  return (
    <div>
      <InfoGather onGetExpenseDate={getExpenseDate} />
      <Expense expenses={expenses} />
    </div>
  );
}

export default App;
