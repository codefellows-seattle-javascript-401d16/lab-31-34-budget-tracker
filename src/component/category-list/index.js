import React from 'react'
import {connect} from 'react-redux'
import CategoryForm from '../category-form'
import ExpenseForm from '../expense-form'
import {categoryUpdate, categoryDelete} from '../../action/category-action.js'
import {expenseCreate} from '../../action/expense-action.js'
import ExpenseList from '../expense-list'

class CategoryList extends React.Component{
  render(){
    let{category, categoryUpdate, categoryDelete, expenses} = this.props
    console.log('props', this.props)
    return(
      <div className='category-list'>
        <div>
          <div className='remove'>
            <h2>{category.title}</h2>
            <button onClick={() => categoryDelete(category)}>
              delete
            </button>
          </div>
          <div className='edit'>
            <CategoryForm
              submitText='Update Category'
              category={category}
              onComplete={categoryUpdate} />
          </div>
        </div>
        <main>
          <ExpenseForm
            categoryID={category.id}
            submitText='New Expense'
            onComplete={this.props.expenseCreate} />
          <ul>
            {expenses.map(expense =>
              <ExpenseList key={expense.id} expense={expense} />
            )}
          </ul>
        </main>
      </div>
    )
  }
}

let mapStateToProps = (state, props) => ({
  expenses: state.expenses[props.category.id],
})
let mapDispatchToProps = dispatch => ({
  categoryUpdate: (category) => dispatch(categoryUpdate(category)),
  categoryDelete: (category) => dispatch(categoryDelete(category)),
  expenseCreate: (expense) => dispatch(expenseCreate(expense)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList)
