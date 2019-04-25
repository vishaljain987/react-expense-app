import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';
import {setExpense} from '../actions/expenses';

export const ExpenseList = (props) => {

  useEffect(()=>{
    console.log('Inside ExpenseList useEffect...')
    props.setExpense();
  },[])

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

export default connect(mapStateToProps, {setExpense})(ExpenseList);
