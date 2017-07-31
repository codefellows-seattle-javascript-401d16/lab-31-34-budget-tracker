import React from 'react'
import {connect} from 'react-redux'

import ExpenseForm from '../expense-form'
import {renderIf} from '../../lib/util.js'
import Drag from '../drag'
import {expenseUpdate, expenseDelete} from '../../action/expense-action.js'

class ExpenseList extends React.Component {
  render(){
    console.log('state', this.state)
    let {expense, expenseUpdate, expenseDelete} = this.props
    return(
      <li>
        <Drag dataTransferItem={expense}>
          <div className='remove'>
            <p>{expense.cost}</p>
            <button onClick={() => expenseDelete(expense)}> delete </button>
          </div>
          <ExpenseForm
            expense={expense}
            submitText='Update Expense'
            onComplete={expenseUpdate} />
        </Drag>
      </li>
    )
  }
}

let mapStateToProps = () => ({})
let mapDispatchToProps = (dispatch) => ({
  expenseUpdate: (expense) => dispatch(expenseUpdate(expense)),
  expenseDelete: (expense) => dispatch(expenseDelete(expense)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseList)
