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
  }

  render(){
    return(
      <form className='category-form' onSubmit={this.handleSubmit}>
        <input
          className='title-input'
          title='name'
          type='text'
          placeholder='title'
          value={this.state.title}
          onChange={this.handleChange} />

        <input
          className='price-input'
          title= 'budget'
          type='number'
          placeholder='#'
          value={this.state.price}
          onChange={this.handleChange} />

        <button
          className='button-input'
          type='submit'>
          submit
        </button>
      </form>
    )
  }
}

export default CategoryForm
