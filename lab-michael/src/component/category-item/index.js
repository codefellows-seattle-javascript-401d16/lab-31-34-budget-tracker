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

import ExpenseItem from '../expense-item'




class CategoryItem extends React.Component {
  render(){
    console.log('this.propsssssssin category!!!',this.props)
    let {category} = this.props
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
          onComplete={data=> {
            console.log('this is in the expense form on complete!!!');
            data.categoryID = category.id
            this.props.expenseCreate(data)
          }}
          />
          </div>
          {console.log('category.id!!!!!!',this.props.expenses)}
          {this.props.expenses.map((item)=>
            <div key={item.id}>
            <ExpenseItem expense={item}/>
            </div>
          )}

        </div>
      </div>

    )
  }
}

let mapStateToProps = (state, props) => {
  return {
    expenses: state.expenses[props.category.id],
  }
}

let mapDispatchToProps = dispatch => ({
  categoryUpdate: (category) => dispatch(categoryUpdate(category)),
  categoryDelete: (category) => dispatch(categoryDelete(category)),
  expenseCreate: (expense) => dispatch(expenseCreate(expense)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CategoryItem)
