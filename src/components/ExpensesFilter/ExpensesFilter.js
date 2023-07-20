import "./ExpensesFilter.css";

const ExpensesFilter = ({ onGetYear }) => {
  const filterChangeHandler = (selectedYear) => {
    onGetYear(selectedYear.target.selectedOptions[0].value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>年份</label>
        <select onChange={filterChangeHandler}>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
