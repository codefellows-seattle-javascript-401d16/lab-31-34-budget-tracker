import React from 'react'
import CategoryForm from '../category-form'
import {
  categoryUpdate,
  categoryDelete,
} from '../../action/category-action.js'




class CategoryItem extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      editing: false,
    }
  }

  render(){
    let {category} = this.props
    return (
          <div>
            <p> Title: {category.title} </p>
            {/*}<p> Text Content: {category.textContent} </p>*/}
            <button className='delete-button'
            onClick={() =>{
              categoryDelete(category); console.log('hitting the delete button!')
            }}>
              Delete
            </button>
          </div>

           <CategoryForm
            category={category}
            submitTitle='Update Note'
            handleSubmit={(item) => {
              item.id = category.id
              this.props.categoryUpdate(item)
            }} />
    )
  }
}

export default CategoryForm
