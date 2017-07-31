import './_dashboard-container.scss';

import React from 'react';
import {connect} from 'react-redux';

import {
  categoryCreate,
} from '../../action/category-actions.js';

import ExpenseForm from '../expense-form';
import CategoryForm from '../category-form';
import CategoryItem from '../category-item';

class DashboardContainer extends React.Component {
  // componentDidMount() {
  //   // this.props.categoryCreate({title: 'transportation', budget: 300});
  // }

  render() {
    // console.log('categories', this.props.categories);
    return (
      <main className='dashboard-container'>
        <div className='dashboard-whitespace'>
          <div className='dashboard-title-and-form'>
            <h2 className='dashboard-header'>Budget Dashboard</h2>
            <CategoryForm
              buttonText='submit'
              onComplete={this.props.categoryCreate}
            />
          </div>
        </div>

        {this.props.categories.map((item) =>
          <CategoryItem
            key={item.id}
            category={item}
            // buttonText='update budget item'
            // categoryUpdate={this.props.categoryUpdate}
            // categoryDelete={this.props.categoryDelete}
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

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
