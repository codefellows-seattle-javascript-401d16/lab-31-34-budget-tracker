import React from 'react'
import {connect} from 'react-redux'
import ExpenseForm from '../expense-form'
import ExpenseItem from '../expense-item'
import {renderIf} from '../../lib/util.js'
import CategoryForm from '../category-form'
import {expenseCreate} from '../../action/expense-actions.js'

import {
  categoryUpdate,
  categoryDelete,
} from '../../action/category-actions.js'


class CategoryItem extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      editing: false,
    }
  }
  render() {

    let {category, categoryUpdate, categoryDelete, expenses} = this.props
    let totalExpenses = 0

    if(expenses[category.id].length >= 1) {
      for(let i = 0; i < expenses[category.id].length; i++){
        totalExpenses += parseInt(expenses[category.id][i].price, 10)
      }
    }

    return (
      <div>
        <div onDoubleClick={() => this.setState(state => ({editing: !state.editing}))}>
          <h3> item name: {
            category.name
          } </h3>
          <h3> item budget: ${category.budget - totalExpenses} </h3>
        </div>

        {renderIf(this.state.editing === true,
          <CategoryForm
            category={category}
            buttonText='update budget'
            onComplete={(data) => {
              data.id = category.id
              categoryUpdate(data)
            }}
          />
        )}

        <ExpenseForm
          buttonText='add expense'
          onComplete={(data) => {
            data.categoryID = category.id
            this.props.expenseCreate(data)
          }
        }
        />

        <ul>
        {this.props.expenses[category.id].map((item =>
          <li key={item.id}>
          <ExpenseItem
            categoryID = {this.props.category.id}
            expense={item}
          />
          </li>
        ))}
        </ul>

        <button onClick = {() => categoryDelete(category)}>
        delete category
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
  categoryUpdate: (category) => dispatch(categoryUpdate(category)),
  categoryDelete: (category) => dispatch(categoryDelete(category)),
  expenseCreate: (expense) => dispatch(expenseCreate(expense)),
})

export default connect(mapStateToProps, mapDispatchToProps
)(CategoryItem)
