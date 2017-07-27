import React from 'react'
import { connect } from 'react-redux'

import Draggable from '../draggable'
import ExpenseForm from '../expense-form'
import { expenseUpdate, expenseDelete } from '../../action/expense-actions.js'

class ExpenseItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Draggable dataTransferItem={this.props.expense}>
        <div className="expense-item">
          <li>
            <p>
              Name: {this.props.expense.name}
            </p>
            <p>
              Price: {this.props.expense.price}
            </p>
          </li>
          <ExpenseForm
            expense={this.props.expense}
            buttonLabel="Update"
            onComplete={this.props.expenseUpdate}
          />
          <button onClick={() => this.props.expenseDelete(this.props.expense)}>
            Delete
          </button>
        </div>
      </Draggable>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => {
  return {
    expenseUpdate: expense => dispatch(expenseUpdate(expense)),
    expenseDelete: expense => dispatch(expenseDelete(expense)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ExpenseItem)
