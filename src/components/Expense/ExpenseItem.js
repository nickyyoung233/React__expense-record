import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem({ date: _date, title, amount }) {
  //destructuring
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate _date={_date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">¥{amount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
