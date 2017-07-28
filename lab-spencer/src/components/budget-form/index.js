import React from 'react';

class BudgetForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title || '',
      budget: props.budget || '',
      editing: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleSubmit({...this.state});
    this.setState({title: '', budget: ''});
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
          required
        />
        <input
          name='budget'
          type='number'
          step={0.01}
          placeholder='Budgeted Money ($)'
          value={this.state.budget}
          onChange={this.handleChange}
          required
        />
        <button
          name='submit-budget'
          type='submit'
        >Add Category</button>
      </form>
    );
  }
}

export default BudgetForm;
