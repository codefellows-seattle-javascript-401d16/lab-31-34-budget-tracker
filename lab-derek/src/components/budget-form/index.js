import React from 'react';

class BudgetForm extends React.Component {
  constructor(props){
    super(props);
    this.state = props.category ? {...props.budgetCategory} : {title: '', budget: 0};
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
    this.props.handleSubmit({...this.state});
    if(!this.props.category) {
      this.setState({title: '', budget: 0});
    }
  }

  render() {
    return (
      <form className='budget-form' onSubmit={this.handleSubmit}>
        <input>
          name='title'
          type='text'
          placeholder='Budget Category'
          value={this.state.title}
          onChange={this.handleChange}
        </input>
        <input>
          name='budget'
          type='number'
          step={0.1}
          placeholder='Budgeted Amount'
          value={this.state.budget}
          onChange={this.handleChange}
        </input>
      </form>
    );
  }
}

export default BudgetForm;
