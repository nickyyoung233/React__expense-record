import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

function ExpenseList({ _filterExpense }) {
  let expensesContent = (
    <h2 className="expenses-list__fallback">没有符合条件的数据</h2>
  );
  if (_filterExpense.length > 0) {
    expensesContent = (
      <ul className="expenses-list">
        {_filterExpense.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </ul>
    );
  }
  return expensesContent;
}
export default ExpenseList;
