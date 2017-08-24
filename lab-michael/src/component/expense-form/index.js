import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import categoryIcon from 'material-ui/svg-icons/'
// import ActionAndroid from 'material-ui/svg-icons/action/feedback'
import AppBar from 'material-ui/appbar'
import ActionAndroid from 'material-ui/svg-icons/communication/forum'
class ExpenseForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = props.expense ? { ...props.expense } : { title: '' }
    // this.state = props.category ? {...props.category}:{expense:''}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    // console.log('EXPENSE FORM',this.props.expense);
  }

  componentWillReceiveProps(props) {
    if (props.expense) this.setState(props.expense)
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
    // console.log('this.propsssss on expense FORM',this.props);
  }

  handleSubmit(e) {
    e.preventDefault()
    // console.log('this.props on handleSubmit!',this.state);
    // console.log(this.props);
    this.props.onComplete({ ...this.state })
    // if(!this.props.expense.categoryID)
    //   this.setState({categoryID:this.props.expense.categoryID})
    if (!this.props.expense) {
      this.setState({ title: '' })
      this.setState({ expense: '' })
    }
  }

  render() {
    return (
      <form className="expense-form" onSubmit={this.handleSubmit}>
        <TextField
        name="title"
        hintText="Expense Title"
       value={this.state.title}
       onChange={this.handleChange}
       floatingLabelStyle = {{
         fontFamily:'Playfair Display'
       }}
       hintStyle = {{
         fontFamily:'Playfair Display'
       }}
       inputStyle = {{
         fontFamily:'Playfair Display'
       }}
       />


        <RaisedButton
        className="category-submit"
         label={this.props.buttonText}
         primary={true}
         onClick={this.handleSubmit}
         icon={<ActionAndroid/>}
         labelStyle = {{
           fontFamily:'Playfair Display'
         }}
         />
      </form>
    )
  }
}

export default ExpenseForm
