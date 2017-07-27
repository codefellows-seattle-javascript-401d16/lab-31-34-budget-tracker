import React from 'react'
import { connect } from 'react-redux'

import {
  categoryCreate,
} from '../../action/category-action.js'

import CategoryForm from '../category-form-component'
import CategoryItem from '../category-item-component'

class DashboardContainer extends React.Component {
  render() {
    return (
      <main className="dashboard-container">
        <h2> dashboard </h2>
        <CategoryForm onComplete={this.props.categoryCreate} />
        <ul id="categories">
          {this.props.categories.map((item, i) => {
            return (
              <li key={i}>
                <CategoryItem
                  item={item}
                  categoryUpdate={this.props.categoryUpdate}
                  categoryDelete={this.props.categoryDelete}
                />
              </li>
            )
          })}
        </ul>
      </main>
    )
  }
}

const mapStateToProps = state => {
  return {
    categories: state,
  }
}

const mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryCreate: category => dispatch(categoryCreate(category)),
    categoryUpdate: category => dispatch(categoryUpdate(category)),
    categoryDelete: category => dispatch(categoryDelete(category)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer)
