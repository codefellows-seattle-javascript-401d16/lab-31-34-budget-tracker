import React from 'react';
import {connect} from 'redux';

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
      </div>
    );
  }
}

export default DashboardContainer;
