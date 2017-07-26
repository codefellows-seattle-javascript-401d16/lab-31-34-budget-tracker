import React from 'react';
import {connect} from 'react-redux';

import CategoryItem from '../category-item/';
import CategoryForm from '../category-form';

import {
  categoryCreate,
  categoryUpdate,
  categoryDelete,
} from '../../action/category-actions.js';

class DashboardContainer extends React.Component {
  componentDidMount(){
  }

  render(){
    return (
      <main className='dashboard'>
        <h2> Budget App </h2>
        <CategoryForm
          buttonText='create category'
          onComplete={this.props.categoryCreate}
        />

        {this.props.categorys.map((item) =>
          <CategoryItem
            key={item.id}
            category={item}
            buttonText='update budget'
            categoryUpdate={this.props.categoryUpdate}
            categoryDelete={this.props.categoryDelete}/>
        )}
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categorys: state,
  };
};


const mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryCreate: (category) => dispatch(categoryCreate(category)),
    categoryUpdate: (category) => dispatch(categoryUpdate(category)),
    categoryDelete: (category) => dispatch(categoryDelete(category)),
  };
};

export default connect( mapStateToProps, mapDispatchToProps)(DashboardContainer);
