import React from 'react'
import {connect} from 'react-redux'
import ExpenseForm from '../expense-form'
import {
  expenseUpdate,
  expenseDelete,
} from '../../action/expense-action.js'




class ExpenseItem extends React.Component {
  render(){
    let {expense} = this.props
    return (
          <div className='expense-item'>
          <div>
          <div className='content'>
            <p> Title: {expense.title} </p>
            <p> Expense: {expense.expense} </p>
            <button
            className='delete-button'
            onClick={() =>{
              this.props.expenseDelete(expense); console.log('hitting the delete button!')
            }}>
              Delete
            </button>
          </div>

          <div className='editing'>
           <ExpenseForm
            expense={expense}
            buttonText='Update Expense'
            onComplete={(data)=> {
              console.log('expense.id',expense.id);
              data.categoryID = expense.categoryID
              data.id = expense.id
              console.log('data!!!!',data);
              this.props.expenseUpdate(data);
            }}/>
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
