import React from 'react';

class CategoryForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: props.category ? props.category.name : '',
      budget: props.category ? props.category.budget : undefined,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(props) {
    if(props.category)
      this.setState(props.category);
  }

  handleChange(e) {
    console.log('handleChangeBefore', this.state);
    this.setState({ [e.target.name]: e.target.value});
    if(this.props.category){
      this.props.category[e.target.name] = e.target.value;
    }
    console.log('handleChangeAfter', this.state);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('handleSubmit', this.state);
    this.props.onComplete(Object.assign({}, this.state));
    this.setState({name: '', budget: 0});
  }

  render() {
    return (
      <form className='category-form' onSubmit={this.handleSubmit}>
        <input
          name='name'
          type='text'
          placeholder='Budget Category'
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          name='budget'
          type='number'
          step={0.01}
          placeholder='Budgeted Amount'
          value={this.state.budget}
          onChange={this.handleChange}
        />

        <button type='submit'> {this.props.submitText} </button>
      </form>
    );
  }
}

export default CategoryForm;
