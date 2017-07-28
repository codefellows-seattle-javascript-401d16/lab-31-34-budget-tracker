import './_expense-item.scss'

import React from 'react'
import {connect} from 'react-redux'

import Draggable from '../draggable'
import ExpenseForm from '../expense-form'
import {renderIf} from '../../lib/util.js'

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

    this.handleExpenseUpdate = this.handleExpenseUpdate.bind(this)
  }

  handleExpenseUpdate(expense){
    this.props.expenseUpdate(expense)
    this.setState({editing: false})
  }

  render(){
    let {expense, expenseDelete, expenseUpdate} = this.props
    return(
      <li className='expense-item'>
        <Draggable dataTransferItem={expense}>
          {renderIf(!this.state.editing,
            <div onDoubleClick={() => this.setState({editing: !this.state.editing})}>
              <h3 className='expense-name-and-price'>{expense.name}: ${expense.price}</h3>
              <button onClick = {() => this.props.expenseDelete(expense)}>
              delete expense
              </button>
            </div>
          )}

          {renderIf(this.state.editing,
            <div onDoubleClick={() => this.setState({editing: !this.state.editing})}>
              <ExpenseForm
                expense={expense}
                onComplete={expenseUpdate}
                buttonText='updpate expense'
                />

              <button
                onClick={() => this.setState({editing: false})}>
                cancel
              </button>
            </div>
          )}
        </Draggable>
      </li>
    )
  }
}

let mapStateToProps = () => ({})

let mapDispatchToProps = dispatch => ({
  expenseUpdate: (expense) => dispatch(expenseUpdate(expense)),
  expenseDelete: (expense) => dispatch(expenseDelete(expense)),
})

export default connect(mapStateToProps, mapDispatchToProps
)(ExpenseItem)
