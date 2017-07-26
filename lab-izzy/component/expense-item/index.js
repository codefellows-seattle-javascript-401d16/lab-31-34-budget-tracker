import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from '../expense-form';

import {expenseUpdate, expenseDelete} from '../../action/expense-actions.js';

class ExpenseItem extends React.Component {
  render(){
    let {expense, expenseDelete, expenseUpdate} = this.props;
    return (
      <li className='expense-item'>
        <p> {expense.name} </p>
        <p> {expense.price} </p>
        <button onClick={() => expenseDelete(expense)}>
          delete
        </button>
        <ExpenseForm
          expense={expense}
          buttonName='update expense'
          onComplete={expenseUpdate}
        />
      </li>
    );
  }
}

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch) => ({
  expenseUpdate: (expense) => dispatch(expenseUpdate(expense)),
  expenseDelete: (expense) => dispatch(expenseDelete(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseItem);
