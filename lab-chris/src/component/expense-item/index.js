import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from '../expense-form';

import{
  expenseUpdate,
  expenseDelete,
} from '../../action/expense-action.js';

class ExpenseItem extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    let {expense, expenseUpdate, expenseDelete} = this.props;
    return(
      <div className='expense-item'>
        <div>
          <div className='content'>
            <h4> Name: {expense.name} ---- Budget: ${expense.budget} </h4>
          </div>
          <div>
            <ExpenseForm
              expense={expense}
              onComplete={(data) => {
                data.id = expense.id;
                expenseUpdate(data);
              }}
              buttonText='update'
            />
            <button onClick={() => expenseDelete(expense)}>Delete</button>
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = () => ({});


const mapDispatchToProps = (dispatch, getState) => {
  return {
    expenseUpdate: (expense) => dispatch(expenseUpdate(expense)),
    expenseDelete: (expense) => dispatch(expenseDelete(expense)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps
)(ExpenseItem);
