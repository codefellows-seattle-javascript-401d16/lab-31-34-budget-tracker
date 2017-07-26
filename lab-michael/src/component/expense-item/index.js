import React from 'react'
import {connect} from 'react-redux'
import ExpenseForm from '../expense-form'
import {
  expenseUpdate,
  expenseUpdate,
} from '../../action/expense-action.js'




class ExpenseItem extends React.Component {
  render(){
    let {expense, expenseUpdate, expenseDelete} = this.props
    return (
          <div className='expense-item'>
          <div>
          <div className='content'>
            <p> Title: {expense.title} </p>
            <p> Expense: {expense.expense} </p>
            <button
            className='delete-button'
            onClick={() =>{
              expenseDelete(expense); console.log('hitting the delete button!')
            }}>
              Delete
            </button>
          </div>

          <div className='editing'>
           <CategoryForm
            expense={expense}
            buttonText='update'
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

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ExpenseItem)
