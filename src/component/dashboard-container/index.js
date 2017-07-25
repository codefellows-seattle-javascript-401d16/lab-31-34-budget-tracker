import React from 'react'
import {connect} from 'react-redux'

import {
  categoryCreate,
} from '../../action/category-actions.js'

import {
  expenseCreate,
} from '../../action/expense-actions.js'

import ExpenseForm from '../expense-form'
import CategoryForm from '../category-form'
import CategoryItem from '../category-item'

class DashboardContainer extends React.Component {
  componentDidMount(){
    console.log('componentDidMount')
  }

  render(){
    return (
      <main className='dashboard-container'>
        <h2> Dashboard </h2>
        <CategoryForm
          buttonText='create category'
          onComplete={this.props.categoryCreate}
          />

        {this.props.categories.map((item) =>
          <CategoryItem
            key={item.id}
            category={item}
          />
        )}
      </main>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
  }
}


const mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryCreate: (category) => dispatch(categoryCreate(category)),
    // categoryUpdate: (category) => dispatch(categoryUpdate(category)),
    // categoryDelete: (category) => dispatch(categoryDelete(category)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer)
