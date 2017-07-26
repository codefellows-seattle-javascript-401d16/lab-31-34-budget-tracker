import React from 'react'
import {connect} from 'react-redux'
import CategoryForm from '../category-form'
import {
  categoryUpdate,
  categoryDelete,
} from '../../action/category-action.js'

import {
  expenseCreate,
} from '../../action/expense-action.js'

import ExpenseForm from '../expense-form'




class CategoryItem extends React.Component {
  render(){
    console.log('this.propsssssssin category!!!',this.props)
    let {category, categoryUpdate, categoryDelete} = this.props
    return (
          <div className='category-item'>
          <div>
          <div className='content'>
            <p> Title: {category.title} </p>
            <button
            className='delete-button'
            onClick={() =>{
              categoryDelete(category)
            }}>
              Delete
            </button>
          </div>

          <div className='editing'>
           <CategoryForm
            category={category}
            buttonText='update'
            onComplete={categoryUpdate}
            />
          </div>

          <div className='expense-form'>
          <ExpenseForm
          buttonTest='creating an expense'
          onComplete={this.props.expenseCreate}
          />
          </div>

          {this.props.expenses[category.id].map((item)=>
            <div key={item.id}>
            <h3> {item.title}</h3>
            <h3> {item.expense}</h3>
            <ExpenseItem expense={item}/>
            </div>
          )}

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
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CategoryItem)
