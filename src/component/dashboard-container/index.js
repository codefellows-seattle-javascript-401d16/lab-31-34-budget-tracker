import './_dashboard-container.scss'

import React from 'react'
import {connect} from 'react-redux'

import {
  categoryCreate,
} from '../../action/category-actions.js'


import ExpenseForm from '../expense-form'
import CategoryForm from '../category-form'
import CategoryItem from '../category-item'

class DashboardContainer extends React.Component {
  render(){
    return (
      <main className='dashboard-container'>
        <div className='dashboard-category-form'>
          <h2 className='dashboard-title'> Budg-It </h2>
          <CategoryForm
            buttonText='create category'
            onComplete={this.props.categoryCreate}
            />
        </div>
        <div className='dashboard-category-item'>
          {this.props.categories.map((item) =>
            <CategoryItem
              key={item.id}
              category={item}
            />
          )}
        </div>
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer)
