import './_category-form.scss'
import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import categoryIcon from 'material-ui/svg-icons/'
import ActionAndroid from 'material-ui/svg-icons/action/android'
import AppBar from 'material-ui/appbar'
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
      <MuiThemeProvider>
      <form className='category-form' onSubmit={this.handleSubmit}>
      <TextField
      name="title"
      hintText="Category Title"
     floatingLabelText="Category Title"
     value={this.state.title}
     onChange={this.handleChange}
     />
     <br/>
     <RaisedButton
     className="category-submit"
      label="Create Category"
      primary={true}
      onClick={this.handleSubmit}
      icon={<ActionAndroid/>}
      />
      </form>
      </MuiThemeProvider>
    )
  }
}

export default CategoryForm
