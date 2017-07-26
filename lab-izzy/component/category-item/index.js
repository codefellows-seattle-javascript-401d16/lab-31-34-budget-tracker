import React from 'react';
import {connect} from 'react-redux';
import CategoryForm from '../category-form';
import ExpenseForm from '../expense-form';
import ExpenseItem from '../expense-item';

import {
  expenseCreate,
  expenseUpdate,
  expenseDelete,
} from '../../action/expense-actions.js';

import {
  categoryCreate,
  categoryUpdate,
  categoryDelete,
} from '../../action/category-actions.js';

let renderIf = (t, c) => t ? c : undefined;

class CategoryItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      editing: false,
    };
  }

  render(){
    let {category, expenses} = this.props;
    console.log('props', this.props);
    return (
      <main>
        <div onDoubleClick={() => this.setState(state => ({editing: !state.editing}))}>
          {renderIf(!this.state.editing,
            <div>
              <button onClick={() => this.props.categoryDelete(category)}>
                delete
              </button>

              <p> <strong>Category: </strong> {this.props.category.title} </p>
              <p> <strong>Budget: </strong> {this.props.category.budget} </p>

            </div>
          )}

          <div className='editing'>
            {renderIf(this.state.editing,
              <CategoryForm
                category={category}
                buttonName='update category'
                onComplete={(data) => {
                  data.id = category.id;
                  this.props.categoryUpdate(data);
                }}
              />
            )}
          </div>
          <div className='expense-form'>

            <ExpenseForm
              expense={expenses}
              buttonName='create expense'
              onComplete={(data) => {
                data.categoryID = category.id;
                this.props.expenseCreate(data);
              }}
            />

          </div>
          {this.props.expenses[category.id].map((item) =>
            <div key={item.id}>
              <h2> {item.name} </h2>
              <ExpenseItem
                category={item.categoryID}
                expense={item}
                onClick={this.props.expenseDelete}
                categoryID={this.props.category.id}
                categoryUpdate={(data) => {
                  data.id = item.id;
                  this.props.expenseUpdate(data);
                }} />
            </div>
          )}
        </div>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  // categories: state.categories,
  expenses: state.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  expenseCreate: (expense) => dispatch(expenseCreate(expense)),
  expenseUpdate: (expense) => dispatch(expenseUpdate(expense)),
  expenseDelete: (expense) => dispatch(expenseDelete(expense)),
  categoryUpdate: (category) => dispatch(categoryUpdate(category)),
  categoryDelete: (category) => dispatch(categoryDelete(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);
