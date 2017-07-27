import React from 'react';
import {connect} from 'react-redux';

import ExpenseForm from '../expense-form';

import {
  expenseUpdate,
  expenseDelete,
} from '../../action/expense-actions.js';

class ExpenseItem extends React.Component {
  render() {
    console.log('----------', expense);
    let {expense, expenseUpdate, expenseDelete} = this.props;
    return(
      <li className='expense-item'>
        <p>{expense.title}</p>
        <p>{expense.price}</p>
        <button onClick={() => expenseDelete(expense)}>
          Delete
        </button>
        <ExpenseForm
          expense={expense}
          buttonText='update expense'
          onComplete={expenseUpdate}
        />
      </li>
    );
  }
}

let mapStateToProps = () => ({});

let mapDispatchToProps = dispatch => ({
  expenseUpdate: (expense) => dispatch(expenseUpdate(expense)),
  expenseDelete: (expense) => dispatch(expenseDelete(expense)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpenseItem);
