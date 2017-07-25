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

        {this.props.categorys.map((item) =>
          <div key={item.id}>
            <h3> {item.name} </h3>
          </div>
        )}
      </main>
    )
  }
}

const mapStateToProps = (state) => { //connect
  return {
    categorys:state,
  }
}

const mapDispatchToProps = (dispatch, getState) => { //connect
  return {
    categoryCreate: (category) => dispatch(categoryCreate(category)),
    categoryUpdate: (category) => dispatch(categoryUpdate(category)),
    categoryDelete: (category) => dispatch(categoryDelete(category)),
  }
}

export default connect( mapStateToProps, mapDispatchToProps)(DashboardContainer)
