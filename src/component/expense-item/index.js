import React from 'react'
import {connect} from 'react-redux'

import ExpenseForm from '../expense-form'
import {expenseUpdate, expenseDelete} from '../actions/expense-actions.js'

class ExpenseItem extends React.Component{
  render(){
    return(
    <li classname='expense-item'>
    <p> {expense.title} </p>
    <button onClick={() => expenseDelete(expense)}>delete</button>
    <ExpenseForm
      expense={expense}
      onComplete{expenseUpdate}
    />
    </li>
    )
  }
}
let mapStateToProps = () => ({})
let mapDispatchToProps = (dispatch) => ({
  cardUpdate: (expense) => dispatch(expenseUpdate(expense)),
  cardDelete: (expense) => dispatch(expenseDelete(expense)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseItem)
