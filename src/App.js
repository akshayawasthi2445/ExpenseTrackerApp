import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 100,
    date: new Date(2021, 6, 24),
  },
  { id: "e2", 
    title: "New TV", 
    amount: 250, 
    date: new Date(2021, 3, 4) 
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 1500,
    date: new Date(2020, 9, 17),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 800,
    date: new Date(2020, 0, 29),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
