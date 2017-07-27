import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from '../expense-component/expense-form-component'
import ExpenseItem from '../expense-component/expense-item-component'

import {
  expenseCreate,
  expenseUpdate,
  expenseDelete,
} from '../../action/expense-actions.js'

import {
  categoryUpdate,
  categoryDelete,
} from '../../action/category-actions.js'

let renderIf = (t, c) => (t ? c : undefined)

let expenseDoesExist = false

class CategoryItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: this.props.item.name,
      budget: this.props.item.budget,
      updateCategory: false,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleUpdateCategory = this.handleUpdateCategory.bind(this)
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    })
    if (e.target.name == 'name') {
      this.props.item.name = e.target.value
      this.props.item.updated = new Date()
    }
    if (e.target.name == 'budget') {
      this.props.item.budget = e.target.value
      this.props.item.updated = new Date()
    }
  }

  handleUpdateCategory() {
    console.log('updateCategory')
    this.setState(state => ({ updateCategory: !state.updateCategory }))
    console.log('after updateCategory', this.state.updateCategory)
  }

  render() {
    console.log('rendering after update')
    let categoryId = this.props.item.id
    return (
      <div className="container">
        <div onDoubleClick={this.handleUpdateCategory}>
          {renderIf(
            this.state.updateCategory,
            <div className="budget-item-update">
              {console.log('rendering after update')}
              <input
                name="name"
                type="text"
                value={this.props.item.name}
                onChange={this.handleChange}
                onBlur={() => this.props.categoryUpdate(this.props.item)}
              />
              <input
                name="budget"
                type="number"
                value={this.props.item.budget}
                onChange={this.handleChange}
                onBlur={() => {
                  this.props.categoryUpdate(this.props.item)
                  this.setState({ updateCategory: false })
                }}
              />
            </div>
          )}

          {renderIf(
            !this.state.updateCategory,
            <div key={this.props.item.id}>
              <h3>
                Category Name:{this.props.item.name}
              </h3>
              <h3>
                Item Budget: {this.props.item.budget}
              </h3>
              <h3>
                Last Updated: {this.props.item.timestamp.toString()}
              </h3>
              <button
                onClick={() => this.props.categoryDelete(this.props.item)}
                className="note-item-delete"
              >
                x
              </button>
              <ExpenseForm
                onComplete={data => {
                  data.categoryId = this.props.item.id
                  this.props.expenseCreate(data)
                  expenseDoesExist = true
                }}
              />
            </div>
          )}
        </div>
        {renderIf(
          expenseDoesExist,
          <ul id="category-expenses">
            {this.props.expenses[categoryId].map((item, i) => {
              return (
                <li key={item.id}>
                  <ExpenseItem
                    item={item}
                    expenseUpdate={this.props.categoryUpdate}
                    expenseDelete={this.props.categoryDelete}
                  />
                </li>
              )
            })}
          </ul>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories,
    expenses: state.expenses,
  }
}

const mapDispatchToProps = (dispatch, getState) => {
  return {
    expenseCreate: expense => {
      dispatch(expenseCreate(expense))
    },
    expenseUpdate: expense => {
      dispatch(expenseUpdate(expense))
    },
    expenseDelete: expense => {
      dispatch(expenseDelete(expense))
    },
    categoryUpdate: category => {
      dispatch(categoryUpdate(category))
    },
    categoryDelete: category => {
      dispatch(categoryDelete(category))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem)
