import React from 'react';
import {connect} from 'react-redux';
///import classes
import CategoryForm from '../category/category-form';
import CategoryItem from '../category/category-item';
import ExpenseForm from '../expense/expense-form';
import {categoryCreate, categoryReset} from '../../action/category-actions.js';

let renderIf = (test, component) => test ? component : undefined;

class DashboardContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    };
    console.log('DASH', this.props);
  }


  render(){
    console.log('DASH PROPS', this.props.categories);
    return(
      <main className='dashboard'>
        This is the dashboard

        <CategoryForm
          buttonText='Create Category'
          onComplete={this.props.categoryCreate}
          category={{}}
        />
        <CategoryItem
        />
        <ExpenseForm
          onComplete={this.props.expenseCreate}
        />
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {categories: state};
};

const mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryCreate: (category) => dispatch(categoryCreate(category)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
