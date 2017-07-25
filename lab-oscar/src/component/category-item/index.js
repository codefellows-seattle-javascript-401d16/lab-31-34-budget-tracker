import React from 'react';
import {connect} from 'react-redux';

import CategoryForm from '../category-form';

import {
  categoryDelete,
  categoryUpdate,
} from '../../actions/category-actions.js'

class CategoryItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let {category, categoryUpdate, categoryDelete} = this.props
    return (
      <div>
        <div>
            <div>
               <p><strong>Category Name:</strong> {category.Name}
                  <strong> Budget Amount:</strong> {category.Budget}
                <strong>Created On:</strong> {category.timestamp.format("MMM Do YYYY")}
                <button type='button'  onClick={()=>{categoryDelete(category)}}> Delete</button>
              </p>
            </div>
            <div>
               <CategoryForm
                 buttonText='Update Category'
                 category={category}
                 onComplete={(data) => {
                  data.id = category.id;
                   data.timestamp = category.timestamp;
                  categoryUpdate(data);
                 }}
               />
            </div>
          </div>
        </div>
    )
  }
}

let mapStateToProps = () => ({});

let mapDispatchToProps = dispatch => ({
  categoryUpdate: (category) => dispatch(categoryUpdate(category)),
  categoryDelete: (category) => dispatch(categoryDelete(category)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryItem)
