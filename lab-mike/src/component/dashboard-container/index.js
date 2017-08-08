import React from 'react';
import {connect} from 'react-redux';

import {
  categoryCreate,
  categoryUpdate,
  categoryDelete,
} from '../../action/category-actions.js';
import CategoryForm from '../category-form';

class DashboardContainer extends React.Component {
  render () {
    return (
      <main className='dashboard-container'>
        <CategoryForm
          buttonText='Create Category'
          onComplete={this.props.categoryCreate}
        />
      </main>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
