import React from 'react'
import {connect} from 'react-redux'

import ExpenseForm from '../expense-form'
import ExpenseItem from '../expense-item'
import BudgetForm from '../budget-form'

import {
  budgetUpdate,
  budgetDelete,
} from '../../action/budget-cat-actions.js'
import {expenseCreate} from '../action/expense-actions.js'

class BudgetItem extends React.Component {

  render(){
    let {budget, budgetUpdate, budgetDelete, cards} = this.props
    return (
      <div className='budget-item'>
        <div>
          <div className='content'>
            <h2> {budget.title} </h2>
            <button onClick={() => budgetDelete(budget)}>
              delete
            </button>


          </div>
          <div className='editing'>
            <BudgetForm
              buttonText='update'
              budget={budget}
              onComplete={budgetUpdate}
              />
          </div>
          <div>
            <ExpenseForm
              expenseID={expense.id}
              buttonText='add expense'
              onComplete={this.props.expenseCreate}
              />
              <ul>
              <ul>
          {expenses.map(expense =>
            <ExpenseItem key={expense.id} expense={expense} />
          )}
          </ul>
        </div>
      </div>
    )
  }
}

let mapStateToProps = (state, props) => ({})

let mapDispatchToProps = dispatch => ({
  budgetUpdate: (budget) => dispatch(budgetUpdate(budget)),
  budgetDelete: (budget) => dispatch(budgetDelete(budget)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BudgetItem)
