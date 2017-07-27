import React from 'react';
import {connect} from 'react-redux';

import CategoryForm from '../category-form';
import CategoryItem from '../category-item';

import {categoryCreate} from '../../action/category-actions.js';


class DashboardContainer extends React.Component{
  render(){
    return (
      <main className='dashboard-container'>

        <h1> Dashboard </h1>

        <CategoryForm
          buttonName='create category'
          onComplete={this.props.categoryCreate}
        />

        {this.props.categories.map((item) =>
          <CategoryItem key={item.id} category={item} />
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

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
