import React from 'react'
import { connect } from 'react-redux'

import {
  categoryCreate,
  categoryUpdate,
  categoryDelete,
} from '../../action/category-actions.js'

import CategoryForm from '../category-form-component'
import CategoryItem from '../category-item-component'

class DashboardContainer extends React.Component {
  render() {
    console.log('props', this.props)
    return (
      <main className="dashboard-container">
        <h2> dashboard </h2>
        <CategoryForm categoryCreate={this.props.categoryCreate} />
        <ul id="categories">
          {this.props.categories.map((item, i) => {
            return (
              <li key={i}>
                {console.log('item in dashboard', item)}
                <CategoryItem
                  item={item}
                  categoryDelete={this.props.categoryDelete}
                  categoryUpdate={this.props.categoryUpdate}
                />
              </li>
            )
          })}
        </ul>
        ) }
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
