import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const { incomeTransactions, expenseTransactions } = useContext(GlobalContext);

  const incomeAmounts = incomeTransactions.map(
    (incomeTransaction) => incomeTransaction.incomeAmount
  );

  const expenseAmounts = expenseTransactions.map(
    (expenseTransaction) => expenseTransaction.expenseAmount
  );

  const totalIncome = incomeAmounts
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const totalExpenses = expenseAmounts
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const sumBalance = (totalIncome - totalExpenses).toFixed(2);

  const H3 = () => {
    if (sumBalance > 0) {
      return <h3>YOUR ACOUNT IS {sumBalance}</h3>;
    } else if (sumBalance < 0) {
      return <h3>YOU ARE UNDER THE DASH... {sumBalance}</h3>;
    } else return <h3>YOU ARE AT ZERO</h3>;
  };

  return (
    <div className="balance">
      <H3 />
      <div className="income-expense">
        <div className="plus">
          <h3>IN</h3>
          <p>+{totalIncome}</p>
        </div>
        <div className="minus">
          <h3>OUT</h3>
          <p>-{totalExpenses}</p>
        </div>
      </div>
    </div>
  );
};

export default Balance;
