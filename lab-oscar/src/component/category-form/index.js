import React from 'react';
import './_category-form.scss';

class CategoryForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      Name: props.category ? props.category.Name : '',
      Budget: props.category? props.category.Budget : '',
      categoryNameIputFieldPlaceholder: 'Enter a new Category',
      categoryBudgetInputFieldPalceholder: 'Enter a Budget',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(props){
    if(props.category)
    this.setState(props.category)
  }

  handleChange(e){
    console.log('target', e.target.name );
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.onComplete({...this.state})
    if(!this.props.category)
      this.setState({Name: '', Budget: ''})
    if(this.props.categoryContainer)
      this.props.categoryContainer('true')
      if(this.props.handleEditView)
      this.props.handleEditView('false')
  }

  render(){
    let {classToggleName, buttonText} = this.props;
    let {categoryNameIputFieldPlaceholder, categoryBudgetInputFieldPalceholder} = this.state;

    return(
      <form className={classToggleName? classToggleName : 'category-form'} onSubmit={this.handleSubmit} >
        <input
          name='Name'
          type='text'
          placeholder={categoryNameIputFieldPlaceholder}
          value={this.state.Name}
          onChange={this.handleChange}
        />
        <input
          name='Budget'
          type='text'
          placeholder={categoryBudgetInputFieldPalceholder}
          value={this.state.Budget}
          onChange={this.handleChange}
        />
        {buttonText == 'Update Category' ?
          <img className='update-button'
            src='https://cdn0.iconfinder.com/data/icons/ie_Glossy_button/16/button_9.png'
            onClick={this.handleSubmit}
            onSubmit={this.handleSubmit}
          />
        :
          <button type='submit'> {this.props.buttonText} </button>
        }
      </form>
    )
  }
}

export default CategoryForm;
