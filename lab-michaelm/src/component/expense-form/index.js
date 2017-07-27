import React from 'react';

class ExpenseForm extends React.Component{
  constructor(props){
    super(props);
    this.state = props.expense ? {...props.expense} : {name: '', price: 0, categoryID: props.categoryID};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(props){
    if(props.expense)
      this.setState(props.expense);
    if(props.categoryID)
      this.setState({categoryID: props.categoryID});
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.onComplete({...this.state});

    if(!this.props.expense)
      this.setState({name: '', price: 0});
  }

  render(){
    return(
      <div className='expense-form'>
        <h3> Create Expense </h3>

        <form onSubmit={this.handleSubmit} >
          <input
            type='text'
            name='name'
            placeholder='expense name'
            value={this.state.name}
            onChange={this.handleChange}
          />

          <input
            name='price'
            type='number'
            value={this.state.price}
            onChange={this.handleChange}
          />

          <button type='submit'> {this.props.buttonText} </button>
        </form>
      </div>
    );
  }
}

export default ExpenseForm;
