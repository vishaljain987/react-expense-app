import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => {

  const expensesArr =  props.expenses.map((expense) => {
                          return <ExpenseListItem key={expense.id} {...expense} />;
                        });

  const expenseList = (
    <div>
      {expensesArr}
    </div>
  )

  return(
    <div>
      {
        props.expenses.length === 0 ? <p>No expenses</p> : expenseList
      }
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);
