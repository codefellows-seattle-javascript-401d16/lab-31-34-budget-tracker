import React from 'react';
import {connect} from 'redux';
///import classes
import CategoryForm from '../category/category-form';


class DashboardContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    };
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
