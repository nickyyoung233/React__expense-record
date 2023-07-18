import "./ExpenseForm.css";

const ExpenseForm = () => {
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>事件</label>
          <input type="text" />
        </div>
        <div className="new-expense__control">
          <label>花费</label>
          {/* <input type="number" min="0.01" step="0.01" /> */}
          <input type="text" />
        </div>
        <div className="new-expense__control">
          <label>日期</label>
          <input type="date" min="2022-01-01" max="2024-12-31" />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">添加账单</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
