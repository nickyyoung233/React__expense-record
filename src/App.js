import ExpenseItem from "./components/ExpenseItem";

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
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>{" "}
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>{" "}
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
