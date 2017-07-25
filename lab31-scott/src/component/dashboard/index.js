import React from 'react';
import {connect} from 'react-redux';
///import classes
import CategoryForm from '../category/category-form';
import {categoryCreate, categoryUpdate, categoryDestroy, categoryReset} from '../../action/category-actions.js';

let renderIf = (test, component) => test ? component : undefined;

class DashboardContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    };
    console.log('DASH', this.props);
  }


  render(){
    return(
      <main className='dashboard'>
        This is the dashboard

        <CategoryForm
          buttonText='Create Category'
          onComplete={this.props.categoryCreate}
        />

        {this.props.categories.map(item =>
          <div key={item.id}>
            <h4>{item.name}</h4>
            <h4>{item.budget}</h4>

            <CategoryForm
              buttonText='Update Category'
              onComplete={this.props.categoryUpdate}
            />
            <CategoryForm
              buttonText='Delete Category'
              onComplete={this.props.categoryDestroy}
            />
          </div>
        )}
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
    categoryUpdate: (category) => dispatch(categoryUpdate(category)),
    categoryDestroy: (category) => dispatch(categoryDestroy(category)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
