import React from 'react'
import {connect} from 'react-redux'
import CategoryForm from '../category-form'
import CategoryItem from '../category-item'

import {
  categoryCreate,
  categoryUpdate,
  categoryDelete,
} from '../../action/category-action.js'


class DashboardContainer extends React.Component{
  componentDidMount(){
    this.props.categoryCreate({title: 'nice it mounted'})
  }

  render(){
    console.log('categories', this.props.categories);
  return(
    <main className='dashboard-container'>
    <h1> dashboard</h1>
    <CategoryForm
    buttonTest='creating a category'
    onComplete={this.props.categoryCreate}
    />
    {this.props.categories.map((item)=>
      <div key={item.id}>
      <h3> {item.title}</h3>
      <CategoryItem category={item}/>
      </div>
    )}
    </main>
    )
  }
}

const mapStateToProps = (state)=> {
  return{
    categories: state.categories,
  }
}

const mapDispatchToProps = (dispatch, getState)=> {
  return {
    categoryCreate:(category)=> dispatch(categoryCreate(category)),
    categoryUpdate:(category)=> dispatch(categoryUpdate(category)),
    categoryDelete:(category)=> dispatch(categoryDelete(category)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer)
