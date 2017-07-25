import React from 'react';
import CategoryForm from '../category-form';

class CategoryItem extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    let {category} = this.props;
    return (
      <div>
        <h3> Name: {category.name} ---- Budget: {category.budget} </h3>
        <CategoryForm
          category={category}
          onComplete={(data) => {
            data.id = category.id;
            this.props.categoryUpdate(data);
          }}
          buttonText='update budget'
        />

        <button onClick = {() => this.props.categoryDelete(category)}> Delete </button>
      </div>
    );
  }
}

export default CategoryItem;
