import React from "react";
import "./InfoGather.css";
import ExpenseForm from "./ExpenseForm";

const InfoGather = ({ onGetExpenseDate }) => {
  const getExpenseDate = (data) => {
    const expenseDate = {
      ...data,
      id: Math.random().toString(),
    };
    onGetExpenseDate(expenseDate)
    // console.log(expenseDate);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onGetExpenseDate={getExpenseDate} />
    </div>
  );
};
export default InfoGather;
