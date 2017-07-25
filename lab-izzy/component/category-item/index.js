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
  }

  render(){
    let {category} = this.props;
    return (
      <li onDoubleClick={() => this.props.categoryUpdate({editing: true})}>
        {renderIf(!category.editing,
          <div>
            <button onClick={() => this.props.categoryDelete(category)}>
              delete
            </button>

            <p> <strong>Category: </strong> {this.props.category.title} </p>
            <p> <strong>Budget: </strong> {this.props.category.budget} </p>

          </div>
        )}

        {renderIf(category.editing,
          <div>
            <button onClick={() => this.props.categoryUpdate(category)}>
              update
            </button>

            <CategoryForm
              category={category}
              buttonName='update category'
              handleSubmit={(data) => {
                data.id = category.id;
                this.state.categoryUpdate(data);
              }}
            />
          </div>
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
