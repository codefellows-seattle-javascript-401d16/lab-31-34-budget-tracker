import React from 'react';
import {connect} from 'react-redux';

import ExpenseForm from '../expense-form';
import ExpenseItem from '../expense-item';
import CategoryForm from '../category-form';

import {categoryDelete,categoryUpdate} from '../../action/category-action.js';
import {expenseCreate} from '../../action/expense-action.js';

class CategoryItem extends React.Component{

  render() {
    let {category, categoryDelete, categoryUpdate, expenses} = this.props;
    return(
      <div className='category-item'>
        <header>
          <div className='category-delete'>
            <h2> {category.name} </h2>
            <h2> {category.budget} </h2>
            <button onClick={() => categoryDelete(category)}>
              delete
            </button>
          </div>
          <div className='category-update'>
            <CategoryForm
              buttonText='update'
              category={category}
              onComplete={categoryUpdate}
            />
          </div>

        </header>

        <main>
          <ExpenseForm
            categoryID={category.id}
            buttonText='create expense'
            onComplete={this.props.expenseCreate}
          />

          <ul>
            {expenses.map(expense =>
              <ExpenseItem key={expense.id} expense={expense} />
            )}
          </ul>
        </main>
      </div>

    );
  }
}

let mapStateToProps = (state, props) => {
  console.log(state, 'STAAATTEEE');
  return{
    expenses: state.expenses[props.category.id],
  };
};

let mapDispatchToProps = dispatch => ({
  categoryUpdate: (category) => dispatch(categoryUpdate(category)),
  categoryDelete: (category) => dispatch(categoryDelete(category)),
  expenseCreate: (expense) => dispatch(expenseCreate(expense)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryItem);
