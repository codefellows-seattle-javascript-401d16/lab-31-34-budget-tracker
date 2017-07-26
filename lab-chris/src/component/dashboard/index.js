import React from 'react';
import {connect} from 'react-redux';

import CategoryItem from '../category-item/';
import CategoryForm from '../category-form';
import ExpenseItem from '../expense-item/';
import ExpenseForm from '../expense-form';

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
        <div>
          <h3>Expense</h3>
          <ExpenseForm
            buttonText='create expense'
            onComplete={this.props.expenseCreate}
          />

          {this.props.expense.map((item) =>
            <ExpenseItem
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
    categorys: state,
  };
};


const mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryCreate: (category) => dispatch(categoryCreate(category)),
  };
};

export default connect( mapStateToProps, mapDispatchToProps)(DashboardContainer);
