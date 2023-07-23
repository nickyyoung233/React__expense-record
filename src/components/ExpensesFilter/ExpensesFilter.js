import "./ExpensesFilter.css";

const ExpensesFilter = ({ selected, onSetFilterYear, total }) => {
  const filterChangeHandler = (selectedYear) => {
    onSetFilterYear(selectedYear.target.selectedOptions[0].value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>
          {selected === "all" ? "" : selected + `年`}总消费为¥{total}
        </label>
        <select value={selected} onChange={filterChangeHandler}>
          <option value="all">全部</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
