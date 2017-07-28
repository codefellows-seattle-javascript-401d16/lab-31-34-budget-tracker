import './_category-item.scss'

import React from 'react'
import {connect} from 'react-redux'
import Dropzone from '../dropzone'
import ExpenseForm from '../expense-form'
import ExpenseItem from '../expense-item'
import CategoryForm from '../category-form'
import {renderIf} from '../../lib/util.js'

import {
  categoryUpdate,
  categoryDelete,
} from '../../action/category-actions.js'

import {
  expenseCreate,
  expenseInsert,
  expenseDelete,
} from '../../action/expense-actions.js'

class CategoryItem extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      editing: false,
    }
    this.handleDropzoneComplete = this.handleDropzoneComplete.bind(this)
  }

  handleDropzoneComplete(err, expense) {
    if (err)
      return console.error('handleDropzoneComplete err', err)
    //remove from old category
    this.props.expenseDelete(expense)
    // update new category id
    expense.categoryID = this.props.category.id
    // insert into new category
    this.props.expenseInsert(expense)

  }

  render() {

    let {category, categoryUpdate, categoryDelete, expenses, expenseCreate} = this.props
    let expensesTotal = 0

    if(expenses[category.id].length >= 1) {
      for(let i = 0; i < expenses[category.id].length; i++){
        expensesTotal += parseInt(expenses[category.id][i].price, 10)
      }
    }

    return (
        <div className='category-item-main'>
        <div className='category-item' >
        <Dropzone onComplete={this.handleDropzoneComplete} >
          <header onDoubleClick={() => this.setState(state => ({editing: !state.editing}))}>
            <div className='content'>
              <h3 className='category-item-name'> {category.name} </h3>
              <h3 className='category-item-budget'> ${category.budget - expensesTotal} </h3>
              <button onClick = {() => categoryDelete(category)}>
              delete category
              </button>
            </div>

            {renderIf(this.state.editing,
              <div onDoubleClick={() => this.setState({editing: !this.state.editing})} className='editing' >
                <CategoryForm
                  category={category}
                  buttonText='update budget'
                  onComplete={categoryUpdate}
                  />
              </div>
            )}
          </header>

        <main>
          <ExpenseForm
            categoryID={category.id}
            buttonText='add expense'
            onComplete={expenseCreate}
          />

          <ul>
          {expenses[category.id].map((item =>
            <ExpenseItem
              key={item.id}
              categoryID = {this.props.category.id}
              expense={item}
            />
          ))}
          </ul>
        </main>
        </Dropzone>
      </div>
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
  expenseInsert: (expense) => dispatch(expenseInsert(expense)),
  expenseDelete: (expense) => dispatch(expenseDelete(expense)),
})

export default connect(mapStateToProps, mapDispatchToProps
)(CategoryItem)
