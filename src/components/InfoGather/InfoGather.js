import React, { useState } from "react";
import "./InfoGather.css";
import ExpenseForm from "./ExpenseForm";

const InfoGather = ({ onGetExpenseDate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const showDisplayHandler = () => {
    setIsEditing(true);
  };
  const hideDisplayHandler = () => {
    setIsEditing(false);
  };
  const getExpenseDate = (data) => {
    const expenseDate = {
      ...data,
      id: Math.random().toString(),
    };
    onGetExpenseDate(expenseDate);
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing ? (
        <button onClick={showDisplayHandler}>添加新账单</button>
      ) : (
        <ExpenseForm
          onGetExpenseDate={getExpenseDate}
          onSetEditing={hideDisplayHandler}
        />
      )}
    </div>
  );
};
export default InfoGather;
