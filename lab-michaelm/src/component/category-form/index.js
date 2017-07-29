import React from 'react';

class CategoryForm extends React.Component {
  constructor(props){
    super(props);
    this.state = props.category ? {...props.category} : {name: '', budget: 0};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(props) {
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
    this.props.onComplete({...this.state});

    if(!this.props.category)
      this.setState({name: '', budget: 0});
  }

  render(){
    return (
      <form className='category-form' onSubmit={this.handleSubmit} >
        <input
          name='name'
          type='text'
          placeholder='name'
          value={this.state.name}
          onChange={this.handleChange}
          />

        <input
          name='budget'
          type='number'
          placeholder='budget'
          value={this.state.budget}
          onChange={this.handleChange}
        />
        <button type='submit'> {this.props.buttonText} </button>
      </form>
    );
  }
}

export default CategoryForm;
