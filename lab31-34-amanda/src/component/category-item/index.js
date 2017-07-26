import React from 'react';
import {connect} from 'react-redux';

import CategoryForm from '../category-form';

import {categoryDelete,categoryUpdate} from '../../action/category-action.js';

class CategoryItem extends React.Component {
  render() {
    let {category, categoryDelete, categoryUpdate} = this.props;
    return(
      <div className='category-item'>
        <div>
          <div className='category-delete'>
            <h2> {category.name} </h2>
            <h2> {category.budget} </h2>
            <button onClick={() => categoryDelete(category)}>
              delete
            </button>
          </div>

          <div className='category-update'>
            <CategoryForm
              buttonText='update'
              category={category}
              onComplete={categoryUpdate}
            />
          </div>
        </div>
      </div>
    );
  }
}

let mapStateToProps = () => ({});

let mapDispatchToProps = dispatch => ({
  categoryUpdate: (category) => dispatch(categoryUpdate(category)),
  categoryDelete: (category) => dispatch(categoryDelete(category)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryItem);
