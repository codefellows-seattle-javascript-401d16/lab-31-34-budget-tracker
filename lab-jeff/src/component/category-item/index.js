import React from 'react';
import CategoryForm from '../category-form';

class CategoryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
    };
  }

  render() {
    let {category} = this.props;
    return (
      <div>
        <h3>budget item: {category.title}</h3>
        <h3>amount budgeted: ${category.budget}</h3>

        <CategoryForm
          category={category}
          onComplete={(data) => {
            data.id = category.id;
            this.props.categoryUpdate(data);
          }}
          buttonText='update budget'
        />

        <button onClick = {() => this.props.categoryDelete(category)}>
        delete
        </button>
      </div>
    );
  }
}

export default CategoryItem;
