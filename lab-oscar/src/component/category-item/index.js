import React from 'react';
import CategoryForm from '../category-form';

class CategoryItem extends React.Component {
  constructor(props) {
    super(props)
    console.log('item~~', props);
  }

  render() {
    let {category} = this.props
    return (
      <div>
        {category.map((item) =>
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
          </div>)}
      </div>
    )
  }
}

export default CategoryItem;
// {this.props.categorys.map((item) =>
//   <div key={item.id}>
//   <p><strong>Category Name:</strong> {item.Name}
//      <strong> Budget Amount:</strong> {item.Budget}
//      <strong>Created On:</strong> {item.timestamp.format("MMM Do YYYY")}
//   </p>
//   <button type='button'  onClick={()=>{this.props.categoryDelete(item)}}> Delete</button>
//   <CategoryForm buttonText='Update Category'
//     category={item}
//     onComplete={(data) => {
//       data.id = item.id;
//       data.timestamp = item.timestamp;
//       this.props.categoryUpdate(data);
//     }}
//   />
