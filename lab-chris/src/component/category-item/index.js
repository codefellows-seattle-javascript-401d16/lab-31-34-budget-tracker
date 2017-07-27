import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from '../expense-form';
import CategoryForm from '../category-form';
import ExpenseItem from '../expense-item';

import{
  categoryUpdate,
  categoryDelete,
} from '../../action/category-actions.js';

import{
  expenseCreate,
} from '../../action/expense-action.js';

class CategoryItem extends React.Component {
  constructor(props){
    super(props);
    console.log('props', props);
  }

  render(){
    let {category, categoryUpdate, categoryDelete, expense} = this.props;
    return(
      <div className='category-item'>
        <div>
          <div className='content'>
            <h3> Name: {category.name} ---- Budget: ${category.budget} </h3>
          </div>
          <div>
            <CategoryForm
              category={category}
              onComplete={categoryUpdate}
              buttonText='update'
            />

            <div>
              <h4>Expense</h4>
              <ExpenseForm
                onComplete={this.props.expenseCreate}
                buttonText='create expense'
              />
              <ul>
                {expense.map(expense =>
                  <ExpenseItem key={expense.id} expense={expense} />
                )}
              </ul>
            </div>

            <button onClick={() => categoryDelete(category)}>Delete</button>
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state, props) => ({
  expense: state.expense[props.category.id],
});


const mapDispatchToProps = (dispatch) => {
  return {
    categoryUpdate: (category) => dispatch(categoryUpdate(category)),
    categoryDelete: (category) => dispatch(categoryDelete(category)),
    expenseCreate: (expense) => dispatch(expenseCreate(expense)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps
)(CategoryItem);
