import React from 'react';
import CategoryForm from '../category-form';

export default class CategoryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
    };
    this.handleDoubleClick = this.handleDoubleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  handleDoubleClick(evt) {
    evt.preventDefault();
    this.setState({
      editing: true,
    });
  }

  handleSubmit(category) {
    this.props.update({
      ...category,
      id: this.props.category.id,
    });
    this.setState({
      editing: false,
    });
  }

  handleDeleteClick() {
    console.log('hi');
    this.props.remove(this.props.category);
  }

  render() {
    return (
      <div>
        {!this.state.editing &&
          <h2
            onDoubleClick={this.handleDoubleClick}
          >{this.props.category.name}</h2>
        }
        {this.state.editing &&
          <div>
            <CategoryForm
              buttonText='Update'
              onSubmit={this.handleSubmit}
              name={this.props.category.name}
            />
            <button
              onClick={this.handleDeleteClick}
            >
              Delete
            </button>
          </div>
        }
      </div>
    );
  }
}
