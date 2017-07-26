import React from 'react';
import {connect} from 'react-redux';
// TODO: why doesn't this work?
// import {createCategory, updateCategory, deleteCategory} from '../../actions';
import Actions from '../../actions';
import CategoryForm from '../category-form';
import CategoryItem from '../category-item';


const Dashboard = (props) => {
  return (
    <main className='dashboard'>
      <h1>Budget Dashboard</h1>
      <CategoryForm
        buttonText='Create Category'
        onSubmit={props.createCategory}
      />
      {props.categories.map(category => (
        <CategoryItem
          key={category.id.concat(category.timestamp.valueOf())}
          category={category}
          update={props.updateCategory}
          remove={props.deleteCategory}
          addExpense={props.createExpense}
          updateExpense={props.updateExpense}
          deleteExpense={props.deleteExpense}
          expenses={props.expenses.filter(expense => expense.categoryId === category.id)}
        />
      ))}
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
    expenses: state.expenses,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createCategory: (category) => dispatch(Actions.createCategory(category)),
    updateCategory: (category) => dispatch(Actions.updateCategory(category)),
    deleteCategory: (category) => dispatch(Actions.deleteCategory(category)),
    createExpense: (expense) => dispatch(Actions.createExpense(expense)),
    updateExpense: (expense) => dispatch(Actions.updateExpense(expense)),
    deleteExpense: (expense) => dispatch(Actions.deleteExpense(expense)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
