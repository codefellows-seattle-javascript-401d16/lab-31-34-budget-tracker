import React from 'react';
import {connect} from 'react-redux';

import ExpenseForm from '../expense-form';

import {
  expenseDelete,
  expenseUpdate,
} from '../../actions/expenses-actions.js';

class ExpenseItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let {expense, categoryUpdate, categoryDelete, expenseDelete} = this.props
    return (
      <div>
      <div className="test">
      <h1>{expense.expenseName}</h1><h2>{expense.price}</h2>
      <button type='button'  onClick={()=>{expenseDelete(expense)}}> Delete</button>
      </div>
      <ExpenseForm
        buttonText='Update Expense'
        expense={expense}
        onComplete={(data) => {
          data.categoryID = expense.categoryID;
          data.id = expense.id;
          this.props.expenseUpdate(data);
        }}
      />
    </div>
    )
  }
}

const mapStateToProps = () => ({
})

let mapDispatchToProps = dispatch => ({
  expenseDelete: (expense) => dispatch(expenseDelete(expense)),
  expenseUpdate: (expense) => dispatch(expenseUpdate(expense)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpenseItem)
