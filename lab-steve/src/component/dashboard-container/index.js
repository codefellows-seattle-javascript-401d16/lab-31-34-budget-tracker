import React from 'react';
import {connect} from 'react-redux';
import {
  categoryCreate,
} from '../../action/category-actions.js';

import CategoryForm from '../category-form';

class DashboardContainer extends React.Component {
  componentDidMount(){
    this.props.categoryCreate({name: 'test1', budget: 200});
    this.props.categoryCreate({name: 'test2', budget: 400});
  }
  render() {
    console.log('categories: ', this.props.categories);
    return (
      <main className='dashboard-container'>
        <h2> Dashboard </h2>
        <CategoryForm
          buttonText='Create Category'
          onComplete={this.props.categoryCreate}
        />
        {this.props.categories.map((item) =>
          <div key={item.id}>
            <h3> {item.name} </h3>
            <h4> ${item.budget} </h4>
          </div>
        )}
      </main>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    categories: state,
  };
};

const mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryCreate: (category) => dispatch(categoryCreate(category)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
