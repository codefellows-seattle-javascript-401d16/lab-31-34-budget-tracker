import React from 'react'
import { connect } from 'react-redux'

import { categoryCreate } from '../../action/category-actions.js'

import CategoryForm from '../category-form'
import CategoryItem from '../category-item'

class DashboardContainer extends React.Component {
  render() {
    return (
      <div className="dashboard-container">
        <h1>Budget Tracker</h1>
        <CategoryForm
          buttonLabel="Submit"
          onComplete={this.props.categoryCreate}
        />
        <ul>
          {this.props.categories.map((cat, i) =>
            <CategoryItem key={i} category={cat} />
          )}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({ categories: state })

const mapDispatchToProps = dispatch => {
  return {
    categoryCreate: category => dispatch(categoryCreate(category)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer)
