import React from 'react';
import {connect} from 'react-redux';

import Draggable from '../draggable';
import ExpenseForm from '../expense-form';
import {renderIf} from '../../lib/util.js';


import {expenseUpdate, expenseDelete} from '../../action/expense-action.js';

class ExpenseItem extends React.Component {
  render() {
    let {expense, expenseUpdate, expenseDelete} = this.props;
    console.log('expenseUpdate!!!!!', this);
    return(
      <li className='expense-item'>
      <Draggable dataTransferItem={expense}>
      {renderIf(!this.state.editing,
      <div onDoubleClick={() => this.setState({editing: true})}>
      </div>

    )}
        {renderIf(this.state.editing,
        <div>)
        <p> {expense.content} </p>
        <button onClick={() => expenseDelete(expense)}>delete </button>
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
