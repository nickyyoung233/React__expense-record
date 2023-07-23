import { useState } from "react";
import "./Expense.css";
import Card from "../UI/Card";
import ExpenseList from "./ExpenseList";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpenseChart from "./ExpenseChart";

function Expense({ expenses }) {
  const [filterYear, setFilterYear] = useState("2023");
  const _filterExpense = expenses.filter((expense) => {
    if (filterYear === "all") return true;
    return expense.date.getFullYear().toString() === filterYear;
  });

  // const total = _filterExpense.reduce((acc, cur) => acc + cur.amount, 0);
  let total = 0;
  for (const item of _filterExpense) {
    total += item.amount;
    console.log(item);
  }
  console.log(total);
  const onSetFilterYear = (selectedYear) => {
    setFilterYear(selectedYear);

    console.log(selectedYear);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filterYear}
        onSetFilterYear={onSetFilterYear}
        total={total}
      />
      <ExpenseChart expenses={_filterExpense} />
      <ExpenseList _filterExpense={_filterExpense} />
    </Card>
  );
}
export default Expense;
