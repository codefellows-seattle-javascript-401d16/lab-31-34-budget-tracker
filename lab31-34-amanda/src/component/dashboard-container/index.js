import React from 'react'
import {connect} from 'react-redux'

import { categoryCreate, categoryUpdate,categoryDelete}
  from '../../action/category-action.js'

import CategoryForm from '../category-form'
import CategoryItem from '../category-render'

class DashboardContainer extends React.Component {

  render(){
    return (
      <main className='dashboard-container'>
        <h2> dashboard </h2>
        <CategoryForm
          buttonText='create category'
          onComplete={this.props.categoryCreate}
        />

        <CategoryItem
          categoryUpdate={this.props.categoryUpdate}
          categoryDelete={this.props.categoryDelete}/>
      </main>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    categorys:state,
  }
}

const mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryCreate: (category) => dispatch(categoryCreate(category)),
    categoryUpdate: (category) => dispatch(categoryUpdate(category)),
    categoryDelete: (category) => dispatch(categoryDelete(category)),
  }
}

export default connect( mapStateToProps, mapDispatchToProps)(DashboardContainer)
