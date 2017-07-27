import React from 'react';
import uuid from 'uuid';

class CategoryForm extends React.Component{
  constructor(props){
    super(props);
    this.state = props.category ? {...props.category} : {title: ''};
    // this.state = {
    //   title: props.category ? props.category.title : '',
    //   budget: props.category ? props.category.budget : 0,
    // };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(props){
    console.log('yaaaas', props);
    if(props.category)
      this.setState(props.category);
  }

  handleChange(e){
    let {name, value, type} = e.target;
    if(type === 'number') {
      try{
        this.setState({
          [name]: Number(value),
        });
      } catch(err) {
        console.error(err);
      }
    } else {
      this.setState({
        [name]: value,
      });
    }
  }
  // this.setState({title: e.target.value});



  handleSubmit(e){
    e.preventDefault();
    this.props.onComplete({...this.state});
    // clear the form if its not being used for update
    if(!this.props.category)
      this.setState({title: ''});
  }

  render(){
    return (
      <form className='category-form' onSubmit={this.handleSubmit}>
        <input
          name='title'
          type='text'
          placeholder='title'
          value={this.state.title}
          onChange={this.handleChange}
        />
        <input
          name='budget'
          type='number'
          min='0'
          step='any'
          placeholder='budget'
          value={this.state.budget}
          onChange={this.handleChange}
        />
        <button type='submit'> {this.props.buttonName} </button>
      </form>
    );
  }
}

export default CategoryForm;
