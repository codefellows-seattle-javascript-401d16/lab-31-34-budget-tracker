// CategoryForm Component
//
// should expect an onComplete prop to be a function
// that function should be invoked with the CategoryForms State when the form is submited
// should expect a buttonText prop to be configure the submit buttons text
// should support and optional category prop that will initialize the state of the form


import React from 'react'

class CategoryForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: props.category ? props.category.name : ''
      budget: props.budget ? props.category.budget: 0

      this.state = { name, budget }
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handelSubmit.bind(this)
  }

  handleChange(e){
    let {name, budget} = e.target
    this.setState({[name]: budget})
  }


  handelSubmit(e){
    e.preventDefault()
    this.props.onComplte(Object.assign({},this.state))
}

render(){
  return(
    <form className='category form' onSubmit={this.handelSubmit}>
    <input
    className='title-input'
    name='title'
    type='text'
    placeholder='title'
    value={this.state.title}
    onChange={this.handleChange} />

    <input
    className='price-input'
    name:'price'
    type='number'
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
