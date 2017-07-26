import React from 'react';

class ExpenseForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: props.category ? props.category.name : '',
      budget: props.category ? props.category.budget : '',

    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(props){
    if(props.category)
      this.setState(props.category);
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.onComplete(Object.assign({}, ...this.state));
    if(!this.props.category)
      this.setState({name: ''}), this.setState({budget: ''});
  }

  render(){
    return (
      <form className='expense-form' onSubmit={this.handleSubmit} >
        <input
          name='name'
          type='text'
          placeholder='expense name'
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          name='budget'
          type='number'
          placeholder='expense amount'
          value={this.state.budget}
          onChange={this.handleChange}
        />

        <button type='submit'> {this.props.buttonText} </button>
      </form>
    );
  }
}

export default ExpenseForm;
