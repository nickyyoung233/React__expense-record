import Expense from "./components/Expense";

function App() {
  const expenses = [
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
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expense expenses={expenses} />
    </div>
  );
}

export default App;
