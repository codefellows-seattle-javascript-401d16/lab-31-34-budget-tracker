import React from 'react'
import { connect } from 'react-redux'

import ExpenseForm from '../expense-form'
import { expenseUpdate, expenseDelete } from '../../action/expense-actions.js'

class ExpenseItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log('expense item', this.props.expense)
    return (
      <div className="expense-item">
        <li>
          <p>
            Name: {this.props.expense.name}
          </p>
          <p>
            Price: {this.props.expense.price}
          </p>
        </li>
        <button onClick={() => this.props.expenseDelete(this.props.expense)}>
          Delete
        </button>
      </div>
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
