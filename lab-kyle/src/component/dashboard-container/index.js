import './_dashboard-container.scss'
import React from 'react'
import { connect } from 'react-redux'

import { categoryCreate } from '../../action/category-actions.js'

import CategoryForm from '../category-form'
import CategoryItem from '../category-item'

class DashboardContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.categoryCreate({ name: 'Housing', budget: 1000 })
    this.props.categoryCreate({ name: 'Groceries', budget: 500 })
    this.props.categoryCreate({ name: 'Transportation', budget: 500 })
    this.props.categoryCreate({ name: 'Recreation', budget: 500 })
  }

  render() {
    console.log('dashboard state', this.props.categories)
    return (
      <div className="dashboard-container">
        <div className="header">
          <h1>Budget Tracker</h1>
        </div>
        <CategoryForm
          buttonLabel="Submit"
          onComplete={this.props.categoryCreate}
        />
        <ul>
          {this.props.categories.map(cat =>
            <CategoryItem key={cat.id} category={cat} />
          )}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({ categories: state.categories })

const mapDispatchToProps = dispatch => {
  return {
    categoryCreate: category => dispatch(categoryCreate(category)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer)
