import React from 'react'
import {connect} from 'react-redux'
import CategoryForm from '../category-form'
import ExpenseForm from '../expense-form'
import Dropzone from '../drop'
import {categoryUpdate, categoryDelete} from '../../action/category-action.js'
import {expenseCreate, expenseInsert, expenseDelete} from '../../action/expense-action.js'
import ExpenseList from '../expense-list'
import './category-list.scss'

class CategoryList extends React.Component{
  constructor(props){
    super(props)

    this.handleDropzoneComplete = this.handleDropzoneComplete.bind(this)
  }

  handleDropzoneComplete(err, expense){
    if (err)
      return console.error(err)
    this.props.expenseDelete(expense)
    expense.categoryID = this.props.category.id
    this.props.expenseInsert(expense)
  }


  render(){
    let{category, categoryUpdate, categoryDelete, expenses} = this.props
    console.log('props', this.props)
    return(
      <div className='category-list'>
        <Dropzone onComplete={this.handleDropzoneComplete}>
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
        </Dropzone>
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
  expenseInsert: (expense) => dispatch(expenseInsert(expense)),
  expenseCreate: (expense) => dispatch(expenseCreate(expense)),
  expenseDelete: (expense) => dispatch(expenseDelete(expense)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList)
