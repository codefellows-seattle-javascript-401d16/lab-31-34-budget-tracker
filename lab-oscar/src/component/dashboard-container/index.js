import React from 'react';
import {connect} from 'react-redux';

import {
  categoryCreate,
  categoryUpdate,
  categoryDelete,
} from '../../actions/category-actions.js';

import CategoryForm from '../category-form';
import CategoryItem from '../category-item';

class DashboardContainer extends React.Component {

  render() {
    return (
      <main className='dashboard-container'>
        <h2>DashBoard</h2>

        <CategoryForm buttonText='Create a Category'
          onComplete={this.props.categoryCreate}
        />
        <CategoryItem
          category={this.props.categorys}
          categoryDelete={this.props.categoryDelete}
          categoryUpdate={this.props.categoryUpdate}
        />
      </main>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    categorys: state,
  }
}

const mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryCreate: (category) => dispatch(categoryCreate(category)),
    categoryDelete: (category) => dispatch(categoryDelete(category)),
    categoryUpdate: (category) => dispatch(categoryUpdate(category)),
  }
}
export default connect( mapStateToProps, mapDispatchToProps)(DashboardContainer);
