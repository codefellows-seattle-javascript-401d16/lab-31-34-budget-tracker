import React from 'react';
import {connect} from 'react-redux';
import CategoryForm from '../category-form';
import {categoryUpdate, categoryDestroy} from '../../../action/category-actions.js';
import ExpenseForm from '../../expense/expense-form';
import {expenseCreate, expenseReset} from '../../../action/expense-actions.js';
import ExpenseItem from '../../expense/expense-item';
import '../../../style/main.scss';

class CategoryItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    };
  }

  render(){
    console.log('CAT ITEM props: ', this.props);
    console.log('CAT ITEM state: ', this.state);
    return(
      <div className='category-list'>
        {this.props.categories.map(category => {
          return <div key={category.id} className='category-item'>
            <h3>{category.name}</h3>
            <h3>${category.budget}</h3>
            <CategoryForm
              buttonText='Update Category'
              onComplete={this.props.categoryUpdate}
              category={category}
            />
            <button
              onClick={() => this.props.categoryDestroy(category)}
            >
              Delete Category
            </button>
            <ExpenseForm
              onComplete={this.props.expenseCreate}
              buttonText='Create Expense'
              categoryID={category.id}
            />
            <ExpenseItem
              categoryID={category.id}
            />
          </div>;
        })}

      </div>
    );
  }
}
// is this mapping state of the module it's hosted in?
const mapStateToProps = (state) => {
  console.log('CAT MSTP: ', state);
  return {categories: state.categories};
};

const mapDispatchToProps = (dispatch, action) => {
  return{
    categoryUpdate: (category) => dispatch(categoryUpdate(category)),
    categoryDestroy: (category) => dispatch(categoryDestroy(category)),
    expenseCreate: (expense) => dispatch(expenseCreate(expense)),
    expenseReset: (expense) => dispatch(expenseReset(expense)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);
