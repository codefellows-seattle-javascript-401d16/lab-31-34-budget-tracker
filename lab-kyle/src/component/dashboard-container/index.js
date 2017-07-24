import React from 'react'
import { connect } from 'react-redux'

import {
  categoryCreate,
  categoryUpdate,
  categoryDelete,
} from '../../action/category-actions.js'

import CategoryForm from '../category-form'

class DashboardContainer extends React.Component {
  render() {
    console.log('dashboard container')
    return (
      <div className="dashboard-container">
        <h1>Budget Tracker</h1>
        <CategoryForm
          buttonLabel="Submit"
          onComplete={this.props.categoryCreate}
        />
        <ul>
          {this.props.categorys.map(cat =>
            <li key={cat.id}>
              <p>
                Name: {cat.name}
              </p>
              <p>
                Budget: {cat.budget}
              </p>
            </li>
          )}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({ categorys: state })

const mapDispatchToProps = dispatch => {
  return {
    categoryCreate: category => dispatch(categoryCreate(category)),
    categoryUpdate: category => dispatch(categoryUpdate(category)),
    categoryDelete: category => dispatch(categoryDelete(category)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer)
