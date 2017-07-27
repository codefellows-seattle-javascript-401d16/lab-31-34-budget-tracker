import React from 'react'



class CategoryForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = props.category ? {...props.category} : {name: '', budget: 0}
    this.onHandleChange = this.onHandleChange.bind(this)
    this.onHandleComplete = this.onHandleComplete.bind(this)
  }
  componentWillReceiveProps(props) {
    if (props.category)
      this.setState(props.category)
  }

  onHandleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  onHandleComplete(event) {
    event.preventDefault()
    this.props.onComplete({...this.state})
    if(!this.props.category)
      this.setState({name: ''})
  }
  //Render
  render() {
    return (
      <form onSubmit={this.onHandleComplete}>
        <input
          name='name'
          type='text'
          value={this.state.name}
          onChange={this.onHandleChange}
          placeholder='Enter Name'
        />
        <input
          name='budget'
          type='number'
          value={this.state.budget}
          onChange={this.onHandleChange}
          placeholder='300'
        />
        <button type='submit'>
          {this.props.title}
        </button>
      </form>
    )
  }
}

export default CategoryForm