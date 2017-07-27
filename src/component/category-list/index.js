import React from 'react'
import {connect} from 'react-redux'
import CategoryForm from '../category-form'
import {
  categoryUpdate,
  categoryDelete,
} from '../../action/category-action.js'

class CategoryList extends React.Component{
  render(){
    let{category, categoryUpdate, categoryDelete} = this.props
    console.log('props', this.props)
    return(
      <div className='category-list'>
        <div>
          <div className='remove'>
            <h2>{category.title}</h2>
            <button onClick={() => categoryDelete(category)}>
              delete
            </button>
          </div>
          <div className='edit'>
            <CategoryForm
              submitText='Update Category'
              category={category}
              onComplete={categoryUpdate} />
          </div>
        </div>
      </div>
    )
  }
}

let mapStateToProps = () => ({})
let mapDispatchToProps = dispatch => ({
  categoryUpdate: (category) => dispatch(categoryUpdate(category)),
  categoryDelete: (category) => dispatch(categoryDelete(category)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList)
