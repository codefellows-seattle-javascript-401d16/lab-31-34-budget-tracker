import React from 'react';
import {connect} from 'react-redux';

import './_dashboard-container.scss';
import CategoryForm from '../category-form';
import CategoryItem from '../category-item';

import {categoryCreate} from '../../action/category-actions.js';


class DashboardContainer extends React.Component{
  render(){
    return (
      <div className='dashboard-container'>

        <main className='dashboard-main'>

          <h1> Dashboard </h1>

          <CategoryForm
            buttonName='create category'
            onComplete={this.props.categoryCreate}
          />

          {this.props.categories.map((item) =>
            <CategoryItem key={item.id} category={item} />
          )}
          
        </main>

      </div>
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
