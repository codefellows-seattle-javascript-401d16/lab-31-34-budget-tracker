import React from 'react';
import {connect} from 'react-redux';

import CategoryForm from '../category-form';
import ExpenseForm from '../expense-form';
import ExpenseItem from '../expense-item';
import {expenseCreate} from '../../action/expense-actions.js';
import {
  categoryUpdate,
  categoryDelete,
} from '../../action/category-actions.js';

class CategoryItem extends React.Component {

  render(){
    console.log('++++++++++++', this.props);
    let {category, expenseCreate, categoryUpdate, categoryDelete} = this.props;
    return (
      <div className='category-item'>
        <header>
          <div className='content'>
            <h2> {category.title} </h2>
            <button onClick={() => categoryDelete(category)}>
            Delete
            </button>
          </div>

          <div className='editing'>
            <CategoryForm
              buttonText='Update'
              category={category}
              onComplete={categoryUpdate}
            />
          </div>
        </header>
        <main>
          <ExpenseForm
            categoryID={category.id}
            buttonText='Create Expense'
            onComplete={expenseCreate}
          />
          <ul><p>Spences</p>
            {this.props.expenses.map(expense =>
              <ExpenseItem key={expense.id} expense={expense} />
            )}
          </ul>
        </main>
      </div>
    );
  }
}

let mapStateToProps = (state, props) => ({
  expenses: state.expenses[props.category.id],
});

let mapDispatchToProps = dispatch => ({
  categoryUpdate: (category) => dispatch(categoryUpdate(category)),
  categoryDelete: (category) => dispatch(categoryDelete(category)),
  expenseCreate: (expense) => dispatch(expenseCreate(expense)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryItem);
