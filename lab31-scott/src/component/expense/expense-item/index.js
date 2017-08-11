import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from '../expense-form';
import Draggable from '../../draggable';
import {expenseUpdate, expenseDestroy} from '../../../action/expense-actions.js';
import './_expense-item.scss';

class ExpenseItem extends React.Component{
  render(){
    console.log('EXP ITEM props: ', this.props);
    return(
      <div>
        <div className='clearfloat'></div>
        <ul className='expense-list'>
          <div className='expense-header'>
            <h6>Expenses for {this.props.category.name}</h6>
          </div>
          {this.props.expenses.map(expense => {
            return <Draggable key={expense.id} dataTransferItem={expense}>
              <li key={expense.id} className='expense-item'>
                <h3>Expense: {expense.title}</h3>
                <h3>Amount: ${expense.amount}</h3>
                <ExpenseForm
                  buttonText='Update Expense'
                  onComplete={this.props.expenseUpdate}
                  expense={expense}
                />
                <button className='delete-button' onClick={() => this.props.expenseDestroy(expense)}>Delete Expense</button>
              </li>
            </Draggable>;
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    expenses: state.expenses[props.category.id],
  };
};

const mapDispatchToProps = (dispatch, getState) => {
  return {
    expenseUpdate: (expense) => dispatch(expenseUpdate(expense)),
    expenseDestroy: (expense) => dispatch(expenseDestroy(expense)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseItem);
