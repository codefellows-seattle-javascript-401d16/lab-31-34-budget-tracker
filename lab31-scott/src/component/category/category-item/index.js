import React from 'react';
import {connect} from 'react-redux';
import CategoryForm from '../category-form';
import {categoryUpdate, categoryDestroy} from '../../../action/category-actions.js';
import ExpenseForm from '../../expense/expense-form';
import {expenseCreate, expenseDestroy, expenseReset, expenseInsert} from '../../../action/expense-actions.js';
import ExpenseItem from '../../expense/expense-item';
import '../../../style/main.scss';
import DropZone from '../../drop-zone';
import './_category-item.scss';

class CategoryItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      remainingBudget: '',

    };

    this.handleDropZoneComplete = this.handleDropZoneComplete.bind(this);
    // this.handleRemainingBudget = this.handleRemainingBudget.bind(this);
  }

  componentWillMount(){
    let categoryID = this.props.categories;
    console.log('category ID: ', categoryID);
    let result = this.props.expenses[categoryID];
    console.log('expense catid:', result);
  }

  handleDropZoneComplete(error, expense, category){
    if(error) return console.error(error);
    // send the expense to be removed from the old category
    this.props.expenseDestroy(expense);
    console.log('HDZ props: ', this.props);
    //give the expense a new category ID based on the drop zone
    expense.categoryID = category.id;
    //send the expense into the new INSERT action which routes through the create expense reducer
    this.props.expenseInsert(expense);

  }

  render(){
    console.log('CAT ITEM props: ', this.props);
    console.log('CAT ITEM state: ', this.state);
    return(
      <div>
        <div className='clearfloat'></div>
        <div className='category-list'>
          {this.props.categories.map(category => {
            return <DropZone key={category.id} category={category} onComplete={this.handleDropZoneComplete} >
              <div className='category-item'>
                <div className='category-header'>
                  <h3 className='category-name'>{category.name}</h3>
                  <h6 className='category-budget'>${category.budget}</h6>
                </div>
                <CategoryForm
                  buttonText='Edit Destination'
                  onComplete={this.props.categoryUpdate}
                  category={category}
                />
                <button
                  className='delete-button'
                  onClick={() => this.props.categoryDestroy(category)}
                >
                  Delete Destination
                </button>
                <ExpenseItem
                  category={category}
                />
                <ExpenseForm
                  onComplete={this.props.expenseCreate}
                  buttonText='Create Expense'
                  categoryID={category.id}
                />
                <div className='clearfloat'></div>
              </div>
            </DropZone>;
          })}
        </div>
      </div>
    );
  }
}
// is this mapping state of the module it's hosted in?
const mapStateToProps = (state, props) => {
  console.log('CAT MSTP: ', state);
  console.log('CAT MSTP catid: ', props);
  return {
    categories: state.categories,
    expenses: state.expenses,
  };
};

const mapDispatchToProps = (dispatch, action) => {
  return{
    categoryUpdate: (category) => dispatch(categoryUpdate(category)),
    categoryDestroy: (category) => dispatch(categoryDestroy(category)),
    expenseCreate: (expense) => dispatch(expenseCreate(expense)),
    expenseDestroy: (expense) => dispatch(expenseDestroy(expense)),
    expenseReset: (expense) => dispatch(expenseReset(expense)),
    expenseInsert: (expense) => dispatch(expenseInsert(expense)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);
