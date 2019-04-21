import React from 'react';
import numeral from 'numeral';
import {connect} from 'react-redux';
import getTotalExpense from '../selectors/get-total-expense';
import getExpenses from '../selectors/expenses';


const ExpenseSummary = ({expenseCount, expenseTotal})=>{
    return (
        <div>
            <p>{`Viewing ${expenseCount} expense(s) totalling ${numeral(expenseTotal/100).format('$0,0.00')}`}</p>
        </div>
    )
}

const mapStateToProps = state=>{
    const visibleExpenses = getExpenses(state.expenses, state.filters);
    return{
        expenseCount: visibleExpenses.length,
        expenseTotal: getTotalExpense(visibleExpenses)
    }
}
export default connect(mapStateToProps)(ExpenseSummary);