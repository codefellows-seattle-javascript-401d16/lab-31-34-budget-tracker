import React from 'react'
import {connect} from 'react-redux'
import {renderIf} from '../../lib/util.js'
import CategoryForm from '../category-form'
import ExpenseForm from '../expense-form'

import {
  expenseCreate,
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
    // console.log('Expense Item this.props', this.props)
    console.log('Expense Item this.props.expense', this.props.expenses)
    let {expenses, categoryID, expense} = this.props
    return(
      <div>
        <h2>Expense</h2>
        <h3>Expense: {expense.name}</h3>
        <h3>Price: ${expense.price}</h3>

        <button onClick = {() => this.props.expenseUpdate(expense)}>
        update expense
        </button>

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
  expenseCreate: (expense) => dispatch(expenseCreate(expense)),
  expenseUpdate: (expense) => dispatch(expenseUpdate(expense)),

  expenseDelete: (expense) => dispatch(expenseDelete(expense)),
})

export default connect(mapStateToProps, mapDispatchToProps
)(ExpenseItem)


// export default ExpenseItem
