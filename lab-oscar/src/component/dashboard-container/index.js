import React from 'react';
import {connect} from 'react-redux';

import {
  categoryCreate,
  categoryUpdate,
  categoryDelete,
} from '../../actions/category-actions.js';

import CategoryForm from '../category-form';

class DashboardContainer extends React.Component {

  render() {
    return (
      <main className='dashboard-container'>
        <h2>DashBoard</h2>

        <CategoryForm buttonText='Create a Category'
          onComplete={this.props.categoryCreate}
        />


        {this.props.categorys.map((item) =>
          <div key={item.id}>
          <p><strong>Category Name:</strong> {item.Name}
             <strong> Budget Amount:</strong> {item.Budget}
             <strong>Created On:</strong> {item.timestamp.format("MMM Do YYYY")}
          </p>
          <button type='button'  onClick={()=>{this.props.categoryDelete(item)}}> Delete</button>
          <CategoryForm buttonText='Update Category'
            category={item}
            onComplete={(data) => {
              data.id = item.id;
              data.timestamp = item.timestamp;
              this.props.categoryUpdate(data);
            }}
          />
          </div>
        )}
      </main>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    categorys: state,
  }
}

const mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryCreate: (category) => dispatch(categoryCreate(category)),
    categoryDelete: (category) => dispatch(categoryDelete(category)),
    categoryUpdate: (category) => dispatch(categoryUpdate(category)),
  }
}
export default connect( mapStateToProps, mapDispatchToProps)(DashboardContainer);
