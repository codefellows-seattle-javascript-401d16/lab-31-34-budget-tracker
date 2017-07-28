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
      categoryFormClassError: 'category-form',
      submitCount: 0,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(props){
    if(props.category)
    this.setState(props.category)
  }

  handleChange(e){
    let {categoryFormClassError, submitCount} = this.state;

    this.setState({
      [e.target.name]: e.target.value
    })
    if(categoryFormClassError === 'category-form-error' && submitCount === 1)
      this.setState({
        categoryFormClassError: 'category-form-success'
      })
  }

  handleSubmit(e){
    e.preventDefault()
    let {Name, Budget, submitCount} = this.state;
    if(!this.props.category)
      this.setState({Name: '', Budget: ''})
    if(this.props.categoryContainer)
      this.props.categoryContainer('true')
    if(this.props.handleEditView)
      this.props.handleEditView('false')
    if(!this.state.Name || !this.state.Budget)
      this.setState({
        categoryFormClassError: 'category-form-error',
        categoryNameIputFieldPlaceholder: 'Category Name is Required',
        categoryBudgetInputFieldPalceholder: 'Budget Amount is Required',
        submitCount: 1,
      })
    if(this.state.Name && this.state.Budget) {
    this.props.onComplete({Name, Budget})
    this.setState({
      categoryFormClassError: 'category-form',
      submitCount: 0,
    })
    }
  }

  render(){
    let {classToggleName, buttonText} = this.props;
    let {categoryNameIputFieldPlaceholder, categoryBudgetInputFieldPalceholder, categoryFormClassError} = this.state;

    return(
      <form className={classToggleName ? classToggleName : categoryFormClassError} onSubmit={this.handleSubmit} >
        <input
          name='Name'
          type='text'
          maxLength='10'
          placeholder={categoryNameIputFieldPlaceholder}
          value={this.state.Name}
          onChange={this.handleChange}
        />
        <input
          name='Budget'
          type='text'
          maxLength='4'
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
