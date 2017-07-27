import React from 'react';
import {connect} from 'react-redux';

import {renderIf} from '../../lib/util.js';

import CategoryForm from '../category-form';
import ExpenseForm from '../expense-form';
import ExpenseItem from '../expense-item';
import {
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
    let {category, categoryUpdate, categoryDelete} = this.props;
    return (
      <div className='category-item' onDoubleClick={() => this.setState(state => ({editing: !state.editing}))}>
        <h2> item name: {category.name} </h2>
        <h3> item budget: {category.budget} </h3>

        {renderIf(this.state.editing === true,
          <CategoryForm
            category={category}
            onComplete={(data) => {
              data.id = category.id;
              categoryUpdate(data);
            }}
          buttonText='update'
          />
        )}

        <ExpenseForm
          buttonText='add expense'
          onComplete={(data) => {
            data.categoryID = category.id;
            this.props.expenseCreate(data);
          }
        }
        />

        {this.props.expenses[category.id].map((item =>
          <ExpenseItem
            key={item.id}
            categoryID = {this.props.category.id}
            expense={item}
          />
        ))}
        <button onClick = {() => categoryDelete(category)}>
        -
        </button>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    expenses: state.expenses,
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
