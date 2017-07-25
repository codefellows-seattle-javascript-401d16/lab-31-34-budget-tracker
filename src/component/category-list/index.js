import React from 'react'
import CategoryForm from '../category-form'
import {
  categoryCreate,
  categoryUpdate,
  categoryDelete,
  categoryReset,
} from '../../action/category-action.js'

class CategoryList extends React.Component{
  render(){
    return(
      <div className='category-list'>
        {this.props.categorys.map((item, i) =>
          <div key={i}>
            <button onClick={() => {this.props.categoryDelete(item)}}>
              delete
            </button>
          </div>
        )}
      </div>
    )
  }
}

export default CategoryList
