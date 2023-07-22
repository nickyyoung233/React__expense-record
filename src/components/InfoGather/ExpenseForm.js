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

  const showDisplayHandler = () => {
    setInfoPlant(staticInfoPlant);
  };
  const hiddenInfoHandler = () => {
    setInfoPlant(
      <form>
        <div>
          <button type="button" onClick={showDisplayHandler}>
            添加新账单
          </button>
        </div>
      </form>
    );
  };
  const staticInfoPlant = (
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
        <button type="button" onClick={hiddenInfoHandler}>
          取消
        </button>
      </div>
    </form>
  );
  const [InfoPlant, setInfoPlant] = useState(staticInfoPlant);
  return InfoPlant;
};
export default ExpenseForm;
