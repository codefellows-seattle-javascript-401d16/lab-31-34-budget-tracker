import React from 'react';
import {connect} from 'redux';
///import classes
import CategoryForm from '../category/category-form';
// import {categoryCreate, categoryUpdate, }

class DashboardContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    };
    this.onComplete = this.onComplete.bind(this);
  }

  onComplete(){
    this.props.categoryCreate(category);
  }

  render(){
    return(
      <div className='dashboard'>
        This is the dashboard
        <CategoryForm />
      </div>
    );
  }
}

export default DashboardContainer;
