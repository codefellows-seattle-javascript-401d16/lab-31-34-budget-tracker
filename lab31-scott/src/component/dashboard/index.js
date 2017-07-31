import React from 'react';
import {connect} from 'react-redux';
///import classes
import CategoryForm from '../category/category-form';
import CategoryItem from '../category/category-item';
import {categoryCreate, categoryReset} from '../../action/category-actions.js';
import './_dashboard.scss';

let renderIf = (test, component) => test ? component : undefined;

class DashboardContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      totalBudget: 10000,
    };
  }


  render(){
    console.log('DASH props: ', this.props);
    console.log('DASH state: ', this.state);
    return(
      <div className='dashboard'>
        <header>
          <h6>2017 Travel Budget</h6>
          <h4>${this.state.totalBudget}</h4>
          <div className='graph'>
            graph goes here
          </div>
        </header>
        <main>
          <CategoryItem
          />
          <CategoryForm
            buttonText='+'
            onComplete={this.props.categoryCreate}
            category=''
          />
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('DASH MSTP: ', state);
  return {
    categories: state.categories,
    expenses: state.expenses,
  };
};

const mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryCreate: (category) => dispatch(categoryCreate(category)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
