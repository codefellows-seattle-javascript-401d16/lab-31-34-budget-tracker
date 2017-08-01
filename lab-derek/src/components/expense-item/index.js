import React from 'react';
import {connect} from 'react-redux';

import Draggable from '../draggable';
import ExpenseForm from '../expense-form';
import DeleteButton from '../delete-button';

import {
  expenseUpdate,
  expenseDelete,
} from '../../actions/expense-actions.js';


class ExpenseItem extends React.Component {
  constructor(props){
    super(props);
  }

  render(){

    let {expense, expenseUpdate, expenseDelete} = this.props;

    return(
      <Draggable dataTransferItem={expense}>
        <div className='expense-item'>
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
      </Draggable>
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
