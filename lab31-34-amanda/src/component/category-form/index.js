import React from 'react'

class CategoryForm extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      name: props.category ? props.category.name : '',
      budget: props.budget ? props.category.budget: 0,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e){
    this.setState({name: e.target.value})
  }

  handleSubmit(e){
    e.preventDefault()
    console.log('this is rendering!',this.props.category)
    this.props.onComplete(Object.assign({}, this.state))
    //clear the form if not being used for update
    // if(!props.category)
    //   this.setState({title: ''})
  }

  render(){
    return(
      <form className='category-form' onSubmit={this.handleSubmit}>
        <input
          className='title-input'
          name='name'
          type='text'
          placeholder='title'
          value={this.state.name}
          onChange={this.handleChange} />

        <input
          className='price-input'
          name= 'budget'
          type='number'
          placeholder='amout'
          value={this.state.price}
          onChange={this.handleChange} />

        <button
          className='button-input'
          type='submit'>
          {this.props.buttonName}
        </button>
      </form>
    )
  }
}

export default CategoryForm
