import React from 'react';
import {connect} from 'react-redux';
import DeleteButton from '../delete-button';
import ExpenseForm from '../expense-form';

import {
  expenseUpdate,
  expenseDelete,
} from '../../actions/expense-actions.js';


class ExpenseItem extends React.Component {
  render(){

    let {expense, expenseUpdate, expenseDelete} = this.props;

    return(
      <div>
        <h4>{expense.name}</h4>
        <h5>Budget: ${expense.price}</h5>
        <DeleteButton
          onClick={expenseDelete}
          submitText='delete'
          parentElement={expense}
        />
        <ExpenseForm
          expense={expense}
          submitText='Update Expense'
          onComplete={expenseUpdate} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses,
  };
};

const mapDispatchToProps = (dispatch, getState) => {
  return {
    expenseUpdate: expense => dispatch(expenseUpdate(expense)),
    expenseDelete: expense => dispatch(expenseDelete(expense)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseItem);
