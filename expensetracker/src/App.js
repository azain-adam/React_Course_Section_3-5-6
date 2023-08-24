import React, {useState} from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const dummy_expenses = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 300,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799,
    date: new Date(2021, 10, 12),
  },
  {
    id: "e3",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2020, 9, 15),
  },
  {
    id: "e4",
    title: "Mobile Phone",
    amount: 1000,
    date: new Date(2022, 5, 17),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(dummy_expenses);
  const handleAddExpense = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={handleAddExpense} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
