import React from 'react'
import {connect} from 'react-redux'
import CategoryForm from '../category-form'
import {
  categoryUpdate,
  categoryDelete,
} from '../../action/category-action.js'

import {
  expenseCreate,
  expenseDelete,
  expenseInsert,
} from '../../action/expense-action.js'

import ExpenseForm from '../expense-form'
import DropZone from '../drop-zone'
import ExpenseItem from '../expense-item'





class CategoryItem extends React.Component {
  constructor(props){
    super(props)

    this.handleDropZoneComplete = this.handleDropZoneComplete.bind(this)
  }

  handleDropZoneComplete(err, expense){
    if (err)
      return console.error(err)
    this.props.expenseDelete(expense)

    expense.categoryID = this.props.category.id
    console.log('this.props!!',this.props);
    console.log('expenseDelete',expenseDelete);
    this.props.expenseInsert(expense)
  }

  render(){
    console.log('this.propsssssssin category!!!',this.props)
    let {category} = this.props
    return (
          <div className='category-item'>
          <DropZone onComplete={this.handleDropZoneComplete}>
          <div>
          <div className='content'>
            <p> Title: {category.title} </p>
            <button
            className='delete-button'
            onClick={() =>{
              this.props.categoryDelete(category)
            }}>
              Delete
            </button>
          </div>

          <div className='editing'>
           <CategoryForm
            category={category}
            buttonText='update'
            onComplete={this.props.categoryUpdate}
            />
          </div>

          <div className='expense-form'>
          <ExpenseForm
            buttonText='creating an expense'
            onComplete={data=> {
              console.log('this is in the expense form on complete!!!',category.id);
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
        </DropZone>
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
  expenseDelete: (expense) => dispatch(expenseDelete(expense)),
  expenseInsert: (expense) => dispatch(expenseInsert(expense)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CategoryItem)
