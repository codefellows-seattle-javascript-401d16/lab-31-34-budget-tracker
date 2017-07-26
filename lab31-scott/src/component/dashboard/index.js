import React from 'react';
import {connect} from 'react-redux';
///import classes
import CategoryForm from '../category/category-form';
import CategoryItem from '../category/category-item';
import {categoryCreate, categoryReset} from '../../action/category-actions.js';

let renderIf = (test, component) => test ? component : undefined;

class DashboardContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    };
  }


  render(){
    console.log('DASH props: ', this.props);
    console.log('DASH state: ', this.state);
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
      </main>
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
