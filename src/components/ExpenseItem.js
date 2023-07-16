import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem({ date: _date, title, amount }) {
  //destructuring
  return (
    <div className="expense-item">
      <ExpenseDate _date={_date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">¥{amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
