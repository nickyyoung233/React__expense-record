import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = () => {
  const [_inputs, setInputs] = useState({
    _title: "",
    _cost: "",
    _date: "",
  });
  const inputsChangeHandler = (_type, val) => {
    if (_type === "title") {
      setInputs((prevalue) => {
        return { ...prevalue, _title: val.target.value };
      });
    }
    if (_type === "cost") {
      setInputs((prevalue) => {
        return { ...prevalue, _cost: val.target.value };
      });
    }
    if (_type === "date") {
      setInputs((prevalue) => {
        return { ...prevalue, _date: val.target.value };
      });
    }
  };
  const submitHandler = (_event) => {
    _event.preventDefault();
    const _final = { ..._inputs, _date: new Date(_inputs._date) };
    console.log(_final);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>事件</label>
          <input
            type="text"
            onChange={(_e) => inputsChangeHandler("title", _e)}
          />
        </div>
        <div className="new-expense__control">
          <label>花费</label>
          {/* <input type="number" min="0.01" step="0.01" /> */}
          <input
            type="text"
            onChange={(_e) => inputsChangeHandler("cost", _e)}
          />
        </div>
        <div className="new-expense__control">
          <label>日期</label>
          <input
            type="date"
            min="2022-01-01"
            max="2024-12-31"
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
