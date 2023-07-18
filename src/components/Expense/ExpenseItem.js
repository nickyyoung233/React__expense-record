import { useState } from "react";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem({ date: _date, title, amount }) {
  //destructuring
  const [_title, setTitle] = useState(title);
  const clickHandler = () => {
    setTitle("回家");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate _date={_date} />
      <div className="expense-item__description">
        <h2>{_title}</h2>
        <div className="expense-item__price">¥{amount}</div>
      </div>
      <button onClick={clickHandler}>Click</button>
    </Card>
  );
}

export default ExpenseItem;
