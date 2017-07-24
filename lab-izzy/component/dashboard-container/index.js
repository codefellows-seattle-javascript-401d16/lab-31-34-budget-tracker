import React from 'react';
import {connect} from 'react-redux';

import {
  categoryCreate,
  categoryUpdate,
  categoryDelete,
} from '../../action/category-actions.js';

import CategoryForm from '../category-form';

class DashboardContainer extends React.Component{
  componentDidMount(){
    this.props.categoryCreate({title: 'living expenses'});
    this.props.categoryCreate({title: 'rent'});
    this.props.categoryCreate({title: 'clothes'});
    this.props.categoryCreate({title: 'international travel'});
  }

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
          </div>
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
