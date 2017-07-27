import React from 'react';

class ExpenseForm extends React.Component {
  constructor(props){
    super(props);
    this.state  = props.expense
      ? {...props.expense}
      : {title: '', price: '', categoryID: props.categoryID};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentWillReceiveProps(props) {
    if (props.expense)
      this.setState({...props.expense});
    if (props.categoryID)
      this.setState({categoryID: props.categoryID});
  }
  handleChange(e){
    this.setState({[e.target.name]: e.target.value});
  }
  handleSubmit(e){
    e.preventDefault();
    this.props.onComplete(this.state);
    if(!this.props.expense)
      this.setState({title: ''});
  }

  render() {
    return (
      <form className='expense-form' onSubmit={this.handleSubmit} >
        <input
          name='title'
          type='text'
          placeholder='expense category'
          value={this.state.title}
          onChange={this.handleChange}
        />
        <input
          name='price'
          type='number'
          placeholder='expense amount'
          value={this.state.price}
          onChange={this.handleChange}
        />
        <button type='submit'> {this.props.buttonText} </button>
      </form>
    );
  }
}

export default ExpenseForm;
