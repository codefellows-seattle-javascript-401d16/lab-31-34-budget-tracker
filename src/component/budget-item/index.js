import React from 'react'
import {connect} from 'react-redux'

import BudgetForm from '../budget-form'

import {
  budgetUpdate,
  budgetDelete,
} from '../../action/budget-cat-actions.js'

class BudgetItem extends React.Component {

  render(){
    let {budget, budgetUpdate, budgetDelete} = this.props
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
        </div>
      </div>
    )
  }
}

let mapStateToProps = () => ({})

let mapDispatchToProps = dispatch => ({
  budgetUpdate: (budget) => dispatch(budgetUpdate(budget)),
  budgetDelete: (budget) => dispatch(budgetDelete(budget)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BudgetItem)
