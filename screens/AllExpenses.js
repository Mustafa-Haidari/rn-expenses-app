import { useContext } from "react";
import { ExpensesContext } from "../store/expense-context";
import ExpensesOutput from "../components/ExpenseOutput/ExpensesOutput";

function AllExpenses() {
  const expensesCtx = useContext(ExpensesContext);

  return (
    <ExpensesOutput
      expenses={expensesCtx.expenses}
      expensesPeriod="Total"
      fallbackText="No registered expenses found!"
    />
  );
}

export default AllExpenses;
