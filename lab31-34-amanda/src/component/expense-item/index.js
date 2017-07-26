import React from 'react';
import {connect} from 'react-redux';

import ExpenseForm from '../expense-form';

// import {expenseCreate} from '../../action/expense-action.js';

class ExpenseItem extends React.Component {
  render() {
    console.log('expense item', this.props);
    let {expense} = this.props;
    return(
      <li className='expense-item'>
        <p> {expense.content} </p>
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
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(ExpenseItem);
