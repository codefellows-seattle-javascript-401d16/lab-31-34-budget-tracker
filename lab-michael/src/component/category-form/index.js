import React from 'react'


class CategoryForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = props.category ? {...props.category}:{title:''}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillReceiveProps(props){
    if(props.category)
    this.setState(props.category)
  }


  handleChange(e){
    this.setState({[e.target.name]: e.target.value})
    // console.log('this.propsssss',this.props);
  }

  handleSubmit(e){
    e.preventDefault()
    // console.log('this.props on handleSubmit!',this.state);
    this.props.onComplete({...this.state})
    if(!this.props.category)
      this.setState({title:''})
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

      <button type='submit'>{this.props.buttonText} </button>
      </form>
    )
  }
}

export default CategoryForm
