import React from 'react';
import {connect} from 'react-redux';

import CategoryForm from '../category-form';

import {categoryDelete} from '../../action/category-action.js';

class CategoryItem extends React.Component {
  render() {
    let {category, categoryDelete} = this.props;

    return(
      <div className ='category-item'>
        <div>
          <div className = 'category-delete'>
            <h2> {category.name} </h2>
            <h2> {category.budget} </h2>
            <button onClick={() => categoryDelete(category)}>
              delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}

let mapStateToProps = () => ({});

let mapDispatchToProps = dispatch => ({
  categoryDelete: (category) => dispatch(categoryDelete(category)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryItem);
