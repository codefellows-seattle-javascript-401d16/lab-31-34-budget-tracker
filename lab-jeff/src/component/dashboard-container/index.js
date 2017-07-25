import React from 'react';
import {connect} from 'react-redux';

import {
  categoryCreate,
  categoryUpdate,
  categoryDelete,
} from '../../action/category-actions.js';

import CategoryForm from '../category-form';
import CategoryItem from '../category-item';

class DashboardContainer extends React.Component {
  componentDidMount() {
    console.log('TEST');
  }

  render() {
    // console.log('categories', this.props.categories);
    return (
      <main className='dashboard-container'>
        <h2>Budget Dashboard</h2>
        <CategoryForm
          buttonText='submit'
          onComplete={this.props.categoryCreate}
        />

        {this.props.categories.map((item) =>
          <CategoryItem
            key={item.id}
            category={item}
            buttonText='update budget item'
            categoryUpdate={this.props.categoryUpdate}
            categoryDelete={this.props.categoryDelete}
          />
        )}
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state,
  };
};

const mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryCreate: (category) => dispatch(categoryCreate(category)),
    categoryUpdate: (category) => dispatch(categoryUpdate(category)),
    categoryDelete: (category) => dispatch(categoryDelete(category)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
