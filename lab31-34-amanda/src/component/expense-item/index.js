import React from 'react';
import {connect} from 'react-redux';

import ExpenseForm from '../expense-form';

import {expenseDelete} from '../../action/expense-action.js';

class ExpenseItem extends React.Component {
  render() {
    let {expense, expenseDelete} = this.props;
    return(
      <li className='expense-item'>
        <p> {expense.content} </p>
        <button onClick={() => expenseDelete(expense)}> delete </button>
        <ExpenseForm
          expense={expense}
          buttonText='update expense'
        />
      </li>
    );
  }
}

let mapStateToProps= () => ({});
let mapDispatchToProps = (dispatch) => ({
  expenseDelete: (expense) => dispatch(expenseDelete(expense)),
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(ExpenseItem);
