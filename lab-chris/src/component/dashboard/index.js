import React from 'react';
import {connect} from 'react-redux';

import CategoryItem from '../category-item/';
import CategoryForm from '../category-form';

import {
  categoryCreate,
} from '../../action/category-actions.js';

class DashboardContainer extends React.Component {
  render(){
    return (
      <main className='dashboard'>
        <h2> Budget App </h2>
        <div>
          <CategoryForm
            buttonText='create category'
            onComplete={this.props.categoryCreate}
          />

          {this.props.categorys.map((item) =>
            <CategoryItem
              key={item.id}
              category={item}
            />
          )}
        </div>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categorys: state.categorys,
  };
};


const mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryCreate: (category) => dispatch(categoryCreate(category)),
  };
};

export default connect( mapStateToProps, mapDispatchToProps)(DashboardContainer);
