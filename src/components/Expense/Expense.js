import "./Expense.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";

function Expense({ expenses }) {
  const getYear = (selectedYear) => {
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
