import React from 'react';

class ExpenseForm extends React.Component{
  constructor(props){
    super(props);
    this.state = props.expense
      ? {...props.expense}
      : {name: '', price: 0, categoryID: props.categoryID};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(props){
    console.log('yaaaas', props);
    if(props.expense)
      this.setState({...props.expense});
    if(props.categoryID)
      this.setState({categoryID: props.categoryID});
  }

  handleChange(e){
    this.setState({name: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.onComplete(this.state);
    if(!this.props.expense)
      this.setState({name: '', price: 0});
  }

  render(){
    return (
      <form className='expense-form' onSubmit={this.handleSubmit}>
        <input
          name='name'
          type='text'
          placeholder='expense name'
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          name='price'
          type='number'
          min='0'
          step='any'
          placeholder='expense amount'
          value={this.state.price}
          onChange={this.handleChange}
        />
        <button type='submit'> {this.props.buttonName} </button>
      </form>
    );
  }
}

export default ExpenseForm;
