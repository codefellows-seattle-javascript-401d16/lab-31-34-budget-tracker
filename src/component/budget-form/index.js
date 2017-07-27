import React from 'react';

class BudgetForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.budget ? {...props.budget} : {title: '', budget: 0};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(props) {
    if(props.budget)
      this.setState(props.budget);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onComplete({...this.state});
    if(!this.props.budget) {
      this.setState({ title: '', budget: 0 });
    }
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
          placeholder='Budget Amount'
          value={this.state.budget}
          onChange={this.handleChange}
        />
        <button type='submit'>
        submitText</button>
      </form>
    );
  }
}

export default BudgetForm
