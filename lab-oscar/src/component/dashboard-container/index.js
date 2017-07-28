import React from 'react';
import {connect} from 'react-redux';

import './_dashboard-container.scss';

import {
  categoryCreate as categoryActionCreate,
} from '../../actions/category-actions.js';

import CategoryForm from '../category-form';
import CategoryItem from '../category-item';

class DashboardContainer extends React.Component {
 constructor(props){
   super(props)
   this.state = {
     categoryContainer: false,
   }
   this.handleCategoryView = this.handleCategoryView.bind(this);
 }
 handleCategoryView(view) {
   this.setState({
     categoryContainer: view,
   })
 }
  render() {
    return (
      <main className='dashboard-container'>
        <div className='header'>
          <div>
            <img className='app-logo'
              src='https://cdn1.iconfinder.com/data/icons/business-237/65/icons-07-128.png'
              alt='Exense Tracker'
            />
          </div>
          <h2>Expense Tracker</h2>

          <CategoryForm buttonText='Create a Category'
            onComplete={this.props.categoryCreate}
            categoryContainer={this.handleCategoryView}
          />
        </div>
        {this.state.categoryContainer ?
        <div>
          {this.props.categorys.map((item) =>
            <CategoryItem key={item.id} category={item} />
          )}
        </div>
        :
        <div></div>
        }
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
