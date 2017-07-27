import React from 'react';
import {connect} from 'react-redux';

import ExpenseForm from '../expense-form';

import {expenseUpdate, expenseDelete} from '../../action/expense-action.js';

class ExpenseItem extends React.Component {
  render() {
    let {expense, expenseUpdate, expenseDelete} = this.props;
    console.log('expenseUpdate!!!!!', this);
    return(
      <li className='expense-item'>
        <p> {expense.content} </p>
        <button onClick={() => expenseDelete(expense)}> delete </button>
        <ExpenseForm
          expense={expense}
          buttonText='update expense'
          onComplete={expenseUpdate}
        />
      </li>
    );
  }
}

let mapStateToProps= () => ({});
let mapDispatchToProps = (dispatch) => ({
  expenseUpdate: (expense) => dispatch(expenseUpdate(expense)),
  expenseDelete: (expense) => dispatch(expenseDelete(expense)),
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(ExpenseItem);
