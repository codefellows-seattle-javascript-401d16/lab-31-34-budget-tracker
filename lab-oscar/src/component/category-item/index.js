import React from 'react';
import {connect} from 'react-redux';
import './_category-item.scss';

import CategoryForm from '../category-form';
import ExpenseForm from '../expense-form';
import ExpenseItem from '../expense-item';

import {
  categoryDelete,
  categoryUpdate,
} from '../../actions/category-actions.js';

import {
  expenseCreate,
} from '../../actions/expenses-actions.js';

class CategoryItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editView: false,
    }
    this.handleEditView = this.handleEditView.bind(this)
  }
handleEditView(){
  let currentSate = this.state.editView
  this.setState({
    editView: !currentSate,
  })
}
  render() {
    let {category, categoryUpdate, categoryDelete} = this.props
    return (
      <div  className='category-container'>
        <div>
          {!this.state.editView ?
                 <div className='category-header'>
                     <span><span><strong>NAME: </strong></span>{category.Name}</span>
                     <span><span><strong>BUDGET: </strong></span>{category.Budget}</span>
                     <img className='delete-button' src='https://cdn3.iconfinder.com/data/icons/streamline-icon-set-free-pack/48/Streamline-70-16.png' onClick={()=>{categoryDelete(category)}} />
                     <img className='edit-button'
                       src='https://cdn4.iconfinder.com/data/icons/48-bubbles/48/15.Pencil-16.png'
                       onClick={this.handleEditView}
                     />
                     <img className='add-button'
                       src='https://cdn3.iconfinder.com/data/icons/navigation-icons-1/32/add-16.png'
                     />
                 </div>
                :
                 <div className='category-header'>
                   <CategoryForm
                     handleEditView={this.handleEditView}
                     classToggleName='category-edit-form'
                     buttonText='Update Category'
                     category={category}
                     onComplete={(data) => {
                     data.id = category.id;
                     data.timestamp = category.timestamp;
                     categoryUpdate(data);
                     }}
                   />
                 </div>
            }
          </div>
          <ExpenseForm
            buttonText='Submit Expense'
            onComplete={(data) => {
              data.categoryID = category.id;
              this.props.expenseCreate(data);
            }}
          />


          {this.props.expenses[category.id].map((item) => {
              return <ExpenseItem key={item.id} expense={item}/>
          })}

        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses,
  }
}

let mapDispatchToProps = dispatch => ({
  categoryUpdate: (category) => dispatch(categoryUpdate(category)),
  categoryDelete: (category) => dispatch(categoryDelete(category)),
  expenseCreate: (expense) => dispatch(expenseCreate(expense)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryItem)
