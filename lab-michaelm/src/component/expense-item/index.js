import React from 'react';
import {connect} from 'react-redux';
import {renderIf} from '../../lib/util.js';
import ExpenseForm from '../expense-form';

import {
  expenseUpdate,
  expenseDelete,
} from '../../action/expense-actions.js';

class ExpenseItem extends React.Component{
  render(){
    let {expense, expenseDelete, expenseUpdate} = this.props;
    return(
      <li>
        <h3>{expense.name}</h3>
        <h4>{expense.price}</h4>
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
