import React from 'react';
import {connect} from 'react-redux';

import {
  categoryCreate as categoryActionCreate,
} from '../../actions/category-actions.js';

import CategoryForm from '../category-form';
import CategoryItem from '../category-item';

class DashboardContainer extends React.Component {

  render() {
    return (
      <main className='dashboard-container'>
        <h2>DashBoard</h2>

        <CategoryForm buttonText='Create a Category'
          onComplete={this.props.categoryCreate}
        />
        {this.props.categorys.map((item) =>
          <CategoryItem key={item.id} category={item} />
        )}

      </main>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    categorys: state.categorys,
  }
}

const mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryCreate: (category) => dispatch(categoryActionCreate(category)),
  }
}
export default connect( mapStateToProps, mapDispatchToProps)(DashboardContainer);
