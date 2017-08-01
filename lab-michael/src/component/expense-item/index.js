import React from 'react'
import {connect} from 'react-redux'
import ExpenseForm from '../expense-form'
import {
  expenseUpdate,
  expenseDelete,
} from '../../action/expense-action.js'

import Draggable from '../draggable'




class ExpenseItem extends React.Component {
  render(){
    let {expense} = this.props
    return (
          <div className='expense-item'>
          <Draggable dataTransferItem={expense}>
          <div>
          <div className='content'>
            <p> Title: {expense.title} </p>
            {console.log('this is expense!!',expense)}
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
              data.id = expense.id;
              this.props.expenseUpdate(data);
            }}/>
          </div>
        </div>
        </Draggable>
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
