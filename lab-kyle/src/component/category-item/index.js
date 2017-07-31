import './_category-item.scss'
import React from 'react'
import { connect } from 'react-redux'

import {
  expenseCreate,
  expenseInsert,
  expenseDelete,
} from '../../action/expense-actions.js'
import {
  categoryUpdate,
  categoryDelete,
} from '../../action/category-actions.js'

import Dropzone from '../dropzone'
import ExpenseForm from '../expense-form'
import ExpenseItem from '../expense-item'
import CategoryForm from '../category-form'

class CategoryItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      remainder: props.category.budget,
    }

    this.handleDrop = this.handleDrop.bind(this)
    this.remainderUpdate = this.remainderUpdate.bind(this)
    this.remainderUpdateDelete = this.remainderUpdateDelete.bind(this)
  }

  remainderUpdate(expense) {
    let result
    this.setState(state => ({ remainder: state.remainder - expense.price }))
  }

  remainderUpdateDelete(expense) {
    let result
    this.setState(state => ({ remainder: state.remainder + expense.price }))
  }

  handleDrop(err, expense) {
    if (err) return console.error(err)

    this.props.expenseDelete(expense)
    expense.categoryID = this.props.category.id
    this.props.expenseInsert(expense)
  }

  render() {
    return (
      <Dropzone onComplete={this.handleDrop}>
        <div className="category-item">
          <li>
            <p>
              Name: {this.props.category.name}
            </p>
            <p>
              Budget: {this.props.category.budget}
            </p>
            <p>
              Budget Remaining: {this.state.remainder}
            </p>
            <CategoryForm
              buttonLabel="edit"
              category={this.props.category}
              onComplete={this.props.categoryUpdate}
            />
            <button
              onClick={() => this.props.categoryDelete(this.props.category)}
            >
              Delete
            </button>
          </li>
          <div>
            <ExpenseForm
              buttonLabel="Submit"
              categoryID={this.props.category.id}
              onComplete={this.props.expenseCreate}
            />
          </div>
          <ul>
            {this.props.expenses.map(item =>
              <ExpenseItem
                key={item.id}
                expense={item}
                remainderUpdate={this.remainderUpdate}
                remainderUpdateDelete={this.remainderUpdateDelete}
              />
            )}
          </ul>
        </div>
      </Dropzone>
    )
  }
}

const mapStateToProps = (state, props) => ({
  expenses: state.expenses[props.category.id],
})

const mapDispatchToProps = dispatch => {
  return {
    categoryUpdate: category => dispatch(categoryUpdate(category)),
    categoryDelete: category => dispatch(categoryDelete(category)),
    expenseCreate: expense => dispatch(expenseCreate(expense)),
    expenseInsert: expense => dispatch(expenseInsert(expense)),
    expenseDelete: expense => dispatch(expenseDelete(expense)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem)
