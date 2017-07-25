import React from 'react'

class CategoryForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      title: props.category ? props.category.title : '',
    }
    this.handlChange = this.handlChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handlChange(e){
    this.setState({title: e.target.value})
  }
  handleSubmit(e){
    e.preventDefault()
    this.props.onComplete(Object.assign({}, this.state))
  }
  render(){
    return(
      <form className='category-form' onSubmit={this.handleSubmit} >
        <input
          name='title'
          type='text'
          placeholder='title'
          value={this.state.title}
          onChange={this.handlChange}
        />
        <button type='submit'>{this.props.submitText}</button>
      </form>
    )
  }
}

export default CategoryForm
