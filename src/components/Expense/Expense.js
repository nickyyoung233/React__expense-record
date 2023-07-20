import { useState } from "react";
import "./Expense.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";

function Expense({ expenses }) {
  const [filterYear, setFilterYear] = useState("2023");
  const _filterExpense = expenses.filter((expense) => {
    if (filterYear === "all") return true;
    return expense.date.getFullYear().toString() === filterYear;
  });
  const onSetFilterYear = (selectedYear) => {
    setFilterYear(selectedYear);

    console.log(selectedYear);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter selected={filterYear} onSetFilterYear={onSetFilterYear} />
      {_filterExpense.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}
export default Expense;
