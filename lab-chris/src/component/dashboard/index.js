import './dashboard.scss';
import React from 'react';
import {connect} from 'react-redux';

import {
  categoryCreate as categoryActionCreate,
} from '../../action/category-actions.js';

import CategoryForm from '../category-form';
import CategoryItem from '../category-item';

class DashboardContainer extends React.Component {
  componentDidMount(){
    this.props.categoryCreate({title: 'ready', budget: 100});
    this.props.categoryCreate({title: 'in progress', budget: 200});
  }

  render(){
    return (
      <main className='dashboard'>
        <h2> Budget App </h2>
        <CategoryForm
          buttonText='create category'
          onComplete={this.props.categoryCreate}
        />

        {this.props.categorys.map((item) =>
          <CategoryItem key={item.id} category={item} />
        )}
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categorys: state.categorys,
  };
};


const mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryCreate: (category) => dispatch(categoryActionCreate(category)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
