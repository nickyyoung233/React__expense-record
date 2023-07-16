import "./ExpenseDate.css";

function ExpenseDate({ _date }) {
  const month = _date.toLocaleString("zh-CN", { month: "long" });
  const year = _date.getFullYear();
  const day = _date.toLocaleString("zh-CN", { day: "2-digit" });
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
}

export default ExpenseDate;
