import React from 'react'
import { connect } from 'react-redux'

import { expenseCreate } from '../../action/expense-actions.js'
import {
  categoryUpdate,
  categoryDelete,
} from '../../action/category-actions.js'

import ExpenseForm from '../expense-form'
import ExpenseItem from '../expense-item'
import CategoryForm from '../category-form'

class CategoryItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="category-item">
        <li>
          <p>
            Name: {this.props.category.name}
          </p>
          <p>
            Budget: {this.props.category.budget}
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
            <ExpenseItem key={item.id} expense={item} />
          )}
        </ul>
      </div>
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem)
