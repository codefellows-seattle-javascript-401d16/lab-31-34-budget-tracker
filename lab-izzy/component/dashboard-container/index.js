import React from 'react';
import {connect} from 'react-redux';

import {
  categoryCreate,
  categoryUpdate,
  categoryDelete,
} from '../../action/category-actions.js';

import CategoryForm from '../category-form';
import CategoryItem from '../category-item';

class DashboardContainer extends React.Component{
  render(){
    console.log('categories', this.props.categories);
    return (
      <main className='dashboard-container'>

        <h1> Dashboard </h1>

        <CategoryForm
          buttonName='create category'
          onComplete={this.props.categoryCreate}
        />

        {this.props.categories.map((item) =>
          <div key={item.id}>
            <h2> {item.title} </h2>
            <CategoryItem
              category={item}
              onClick={this.props.categoryDelete}
              categoryUpdate={(data) => {
                data.id = item.id;
                this.props.categoryUpdate(data);
              }} />
          </div>
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
    categoryUpdate: (category) => dispatch(categoryUpdate(category)),
    categoryDelete: (category) => dispatch(categoryDelete(category)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
