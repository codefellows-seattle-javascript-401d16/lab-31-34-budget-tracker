import React from 'react'
import { connect } from 'react-redux'

import { categoryUpdate, categoryDestroy } from '../../action/category-actions'
import CategoryForm from '../category-form'

class CategoryItem extends React.Component {

  render() {
    let {categoryDestroy, categoryUpdate, category } = this.props
    return (
      <div>
        <h1>{category.name}</h1>
        <h2>Budget: {category.budget}</h2>
        <button onClick={() => categoryDestroy(category)}>Delete</button>
        <CategoryForm  title='Update' category={category} onComplete={categoryUpdate} />
      </div>
    )
  }
}

const mapStateToProps = () => ({})
const mapDispatchToProps = (dispatch) => {
  return {
    categoryUpdate: (category) => dispatch(categoryUpdate(category)),
    categoryDestroy: (category) => dispatch(categoryDestroy(category)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem)