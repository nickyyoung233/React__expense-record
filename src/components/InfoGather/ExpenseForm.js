import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = ({ onGetExpenseDate }) => {
  const [_inputs, setInputs] = useState({
    title: "",
    amount: "",
    date: "",
  });
  const inputsChangeHandler = (_type, val) => {
    if (_type === "title") {
      setInputs((prevalue) => {
        return { ...prevalue, title: val.target.value };
      });
    }
    if (_type === "cost") {
      setInputs((prevalue) => {
        return { ...prevalue, amount: val.target.value };
      });
    }
    if (_type === "date") {
      setInputs((prevalue) => {
        return { ...prevalue, date: val.target.value };
      });
    }
  };
  const submitHandler = (_event) => {
    _event.preventDefault();
    const _final = { ..._inputs, date: new Date(_inputs.date) };
    onGetExpenseDate(_final);
    setInputs(() => {
      return { title: "", amount: "", date: "" };
    });
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>事件</label>
          <input
            type="text"
            value={_inputs.title}
            onChange={(_e) => inputsChangeHandler("title", _e)}
          />
        </div>
        <div className="new-expense__control">
          <label>花费</label>
          {/* <input type="number" min="0.01" step="0.01" /> */}
          <input
            type="text"
            value={_inputs.amount}
            onChange={(_e) => inputsChangeHandler("cost", _e)}
          />
        </div>
        <div className="new-expense__control">
          <label>日期</label>
          <input
            type="date"
            min="2022-01-01"
            max="2024-12-31"
            value={_inputs.date}
            onChange={(_e) => inputsChangeHandler("date", _e)}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">添加账单</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
