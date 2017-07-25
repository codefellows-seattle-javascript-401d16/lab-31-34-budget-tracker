import React from 'react';

class BudgetForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: props.category ? props.category.title : '',
      budget: props.category ? props.category.budget : 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(props) {
    if(props.category)
      this.setState(props.category);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete(Object.assign({}, this.state));
  }

  render() {
    return (
      <form className='budget-form' onSubmit={this.handleSubmit}>
        <input
          name='title'
          type='text'
          placeholder='Budget Category'
          value={this.state.title}
          onChange={this.handleChange}
        />
        <input
          name='budget'
          type='number'
          step={0.1}
          placeholder='Budgeted Amount'
          value={this.state.budget}
          onChange={this.handleChange}
        />

        <button type='submit'> {this.props.submitText} </button>
      </form>
    );
  }
}

export default BudgetForm;
