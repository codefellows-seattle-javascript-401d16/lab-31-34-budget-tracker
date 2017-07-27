import React from 'react';
import {connect} from 'react-redux';

// importing an action
import {
  categoryCreate as categoryActionCreate,
} from '../../action/category-actions.js';

import CategoryForm from '../category-form';
import CategoryItem from '../category-item';

class DashboardContainer extends React.Component {
  render(){
    return (
      <main className='dashboard-container'>
        <h1> On Dashboard! </h1>
        <CategoryForm
          buttonText='Create Category'
          onComplete={this.props.categoryCreate}
        />

        {this.props.categories.map((item) =>
          <CategoryItem key={item.id}
            category={item}
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
    categoryCreate: (category) => dispatch(categoryActionCreate(category)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardContainer);
