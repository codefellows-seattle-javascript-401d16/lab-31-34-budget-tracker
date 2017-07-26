import React from 'react'
import {connect} from 'react-redux'

import ExpenseForm from '../expense-form'

import {
  expenseUpdate,
  expenseDelete,
} from '../../action-expense-actions.js'

class ExpenseItem extends React.Component {

  render() {
    let {expense, expenseUpdate, expenseDelete} = this.props
    return(
      <div className ='expense-item'>
        <div>
          <div className='content'>
            <h2> {expense.name} </h2>
            <button onClick={() => expenseDelete(expense)}>
              Delete
            </button>

          </div>
          <div className='editing'>
            <ExpenseForm
              buttonText='Update'
              expense={expense}
              onComplete={expenseUpdate}
            />
          </div>
        </div>
      </div>
    )
  }
}

let mapStateToProps = () => ({})

let mapDispatchToProps = dispatch => ({
  expenseUpdate: (expense) => dispatch(expenseUpdate(expense)),
  expenseDelete: (expense) => dispatch(expenseDelete(expense)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseItem)
