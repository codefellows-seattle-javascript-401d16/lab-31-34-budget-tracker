import React from 'react'
import { connect } from 'react-redux'

import {
  categoryUpdate,
  categoryDelete,
} from '../../action/category-actions.js'

import CategoryForm from '../category-form'

class CategoryItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="category-item">
        <li>
          <p>
            Name: {this.props.category.name}
          </p>
          <p>
            Budget: {this.props.category.budget}
          </p>
          <CategoryForm
            buttonLabel="edit"
            category={this.props.category}
            onComplete={this.props.categoryUpdate}
          />
          <button
            onClick={() => this.props.categoryDelete(this.props.category)}
          >
            {' '}Delete{' '}
          </button>
        </li>
      </div>
    )
  }
}

const mapStateToProps = state => ({ catagories: state })

const mapDispatchToProps = dispatch => {
  return {
    categoryUpdate: category => dispatch(categoryUpdate(category)),
    categoryDelete: category => dispatch(categoryDelete(category)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem)
