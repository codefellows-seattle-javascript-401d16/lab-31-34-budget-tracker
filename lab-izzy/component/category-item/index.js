import React from 'react';
import {connect} from 'react-redux';
import CategoryForm from '../category-form';

import {
  categoryCreate,
  categoryUpdate,
  categoryDelete,
} from '../../action/category-actions.js';

let renderIf = (t, c) => t ? c : undefined;

class CategoryItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      editing: false,
    };
  }

  render(){
    let {category} = this.props;
    return (
      <li onDoubleClick={() => this.setState(state => ({editing: !state.editing}))}>
        {renderIf(!this.state.editing,
          <div>
            <button onClick={() => this.props.categoryDelete(category)}>
              delete
            </button>

            <p> <strong>Category: </strong> {this.props.category.title} </p>
            <p> <strong>Budget: </strong> {this.props.category.budget} </p>

          </div>
        )}

        {renderIf(this.state.editing,
          <CategoryForm
            category={category}
            buttonName='update category'
            onComplete={(data) => {
              data.id = category.id;
              this.props.categoryUpdate(data);
            }}
          />
        )}
      </li>
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
    categoryUpdate: (category) => dispatch(categoryUpdate(category)),
    categoryDelete: (category) => dispatch(categoryDelete(category)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);
