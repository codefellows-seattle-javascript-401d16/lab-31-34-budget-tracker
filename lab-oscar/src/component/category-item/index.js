import React from 'react';
import {connect} from 'react-redux';
import './_category-item.scss';

import Dropzone from '../dropzone';
import ExpenseItem from '../expense-item';
import ExpenseForm from '../expense-form';
import CategoryForm from '../category-form';

import {
  categoryDelete,
  categoryUpdate,
} from '../../actions/category-actions.js';

import {
  expenseCreate,
  expenseDelete,
  expenseInsert,
} from '../../actions/expenses-actions.js';

class CategoryItem extends React.Component {
  constructor(props) {
console.log('^^^', props);
    super(props)
    this.state = {
      editView: false,
      showExpenseForm: false,
      expenseCount: 0,
      dropReady: false
    }

    this.handleEditView = this.handleEditView.bind(this);
    this.showExpenseForm = this.showExpenseForm.bind(this);
    this.handleDropzoneComplete = this.handleDropzoneComplete.bind(this);
    this.handledropzone = this.handledropzone.bind(this);
  }

  componentWillReceiveProps(props){
    let {expenses, category} = props;
    this.setState({expenseCount: expenses[category.id].length})
  }
handledropzone(){
  let current = this.state.dropReady;
  this.setState({dropReady: !current})
}
showExpenseForm() {
    let currentSate = this.state.showExpenseForm
    this.setState({
      showExpenseForm: !currentSate,
    })
  }

handleEditView(){
  let currentSate = this.state.editView
  this.setState({
    editView: !currentSate,
  })
}

handleDropzoneComplete(err, expense){

  if(err)
    return console.error(err)

  this.props.expenseDelete(expense)


  expense.categoryID = this.props.category.id

  this.props.expenseInsert(expense)
}
  render() {
    let {category, categoryUpdate, categoryDelete, expenses} = this.props
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
                       onClick={this.showExpenseForm}
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
          {this.state.showExpenseForm ?
            <div>
              <div>
                <ExpenseForm
                  buttonText='Submit Expense'
                  showExpenseForm={this.showExpenseForm}
                  onComplete={(data) => {
                    data.categoryID = category.id;
                    this.props.expenseCreate(data);
                  }}
                />
              </div>
              <div className='form-container-bottom'></div>
            </div>
          :
            <div>
              {this.state.expenseCount === 0 ?
                <Dropzone onComplete={this.handleDropzoneComplete} dropzone={this.handledropzone}>
                <div>
                  <div className='empty-expense-box-top-bottom'></div>
                  <div className={this.state.dropReady ?  'dropzone' : 'empty-expense-box'}>
                    <h3>No Expenses</h3>
                  </div>
                  <div className='empty-expense-box-top-bottom'></div>
                </div>
                </Dropzone>
              :
                ''
              }
            </div>
          }
          <div>
          <Dropzone onComplete={this.handleDropzoneComplete} dropzone={this.handledropzone}>
          {this.props.expenses[category.id].map((item) => {
              return <ExpenseItem
                        key={item.id}
                        expense={item}
                        dropzone={this.state.dropReady}
                      />
          })}
        </Dropzone>
          </div>
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
  expenseDelete: (expense) => dispatch(expenseDelete(expense)),
  expenseCreate: (expense) => dispatch(expenseCreate(expense)),
  expenseInsert: (expense) => dispatch(expenseInsert(expense)),
  categoryUpdate: (category) => dispatch(categoryUpdate(category)),
  categoryDelete: (category) => dispatch(categoryDelete(category)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryItem)
