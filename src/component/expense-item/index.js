import React from 'react'
import {connect} from 'react-redux'
import {renderIf} from '../../lib/util.js'
import CategoryForm from '../category-form'
import ExpenseForm from '../expense-form'

import {
  expenseUpdate,
  expenseDelete,
} from '../../action/expense-actions.js'

class ExpenseItem extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      editing: false,
    }
  }
  render(){
    let {expenses, categoryID, expense, expenseUpdate} = this.props
    return(
      <div>
        <h3>Expense: {expense.name}</h3>
        <h3>Price: ${expense.price}</h3>

        <ExpenseForm
          buttonText='updpate expense'
          expense={expense}
          onComplete={expenseUpdate}
        />

        <button onClick = {() => this.props.expenseDelete(expense)}>
        delete expense
        </button>
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    expenses: state.expenses,
  }
}

let mapDispatchToProps = dispatch => ({
  expenseUpdate: (expense) => dispatch(expenseUpdate(expense)),
  expenseDelete: (expense) => dispatch(expenseDelete(expense)),
})

export default connect(mapStateToProps, mapDispatchToProps
)(ExpenseItem)
