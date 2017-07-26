import React from 'react';
import {connect} from 'react-redux';

class DashboardContainer extends React.Component {

  render () {
    return (
      <main>
      </main>
    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
