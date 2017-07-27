import React from 'react';
import {connect} from 'react-redux';

import {
  categoryCreate,
} from '../../action/category-actions.js';

import CategoryForm from '../category-form';
import CategoryItem from '../category-item';

class DashboardContainer extends React.Component {
  render(){
    return (
      <main className='dashboard-container'>
        <h1> Budget Dashboard </h1>
        <CategoryForm
          buttonText='create category'
          onComplete={this.props.categoryCreate}
          />
        {this.props.categories.map((category) =>
            <CategoryItem
              key={category.id}
              category={category}
            />
          )}
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
  };
};

const mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryCreate: (category) => dispatch(categoryCreate(category)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardContainer);
