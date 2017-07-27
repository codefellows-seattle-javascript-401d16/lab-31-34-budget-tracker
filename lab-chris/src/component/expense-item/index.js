import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from '../expense-form';

import{
  expenseUpdate,
  expenseDelete,
} from '../../action/expense-action.js';

class ExpenseItem extends React.Component {

  render(){
    let {expense, expenseUpdate, expenseDelete} = this.props;
    return(
      <li>
        <p>{expense.name}----{expense.price}</p>
        <button></button>
        <ExpenseForm
          expense={expense}
          buttonText='update expense'
          onComplete={expenseUpdate}
        />
      </li>
    );
  }
}


const mapStateToProps = () => ({});


const mapDispatchToProps = (dispatch) => {
  return {
    expenseUpdate: (expense) => dispatch(expenseUpdate(expense)),
    expenseDelete: (expense) => dispatch(expenseDelete(expense)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps
)(ExpenseItem);
