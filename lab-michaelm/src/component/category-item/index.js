import React from 'react';
import {connect} from 'react-redux';

import {renderIf} from '../../lib/util.js';

import UpdateForm from '../update-form';
import ExpenseForm from '../expense-form';
import ExpenseItem from '../expense-item';
import CategoryForm from '../category-form';
import {
  categoryCreate,
  categoryUpdate,
  categoryDelete,
} from '../../action/category-actions.js';

import {
  expenseCreate,
} from '../../action/expense-actions.js';

class CategoryItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      editing: false,
    };
  }
  render() {
    let {category, categoryUpdate, categoryDelete, expenses} = this.props;
    return (
      <div className='category-item'>
        <header>
          <div onDoubleClick={() => this.setState(state => ({editing: !state.editing}))}>
            <h2> item name: {category.name} </h2>
            <h3> item budget: {category.budget} </h3>
          </div>

          {renderIf(this.state.editing,
            <div className="update-form" onDoubleClick={() => this.setState(state => ({editing: state.editing}))}>
              <UpdateForm
                category={category}
                onComplete={categoryUpdate}
                buttonText='update category'
              />
            </div>
          )}
        </header>
        <button onClick = {() => categoryDelete(category)}> delete </button>

        <main>
          <ExpenseForm
            buttonText='add expense'
            onComplete={(data) => {
              data.categoryID = category.id;
              this.props.expenseCreate(data);
            }
          }
          />
          <ul>
            {expenses.map((expense =>
              <ExpenseItem
                key={expense.id}
                expense={expense}
              />
            ))}
          </ul>
        </main>
      </div>
    );
  }
}

let mapStateToProps = (state, props) => {
  return {
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
