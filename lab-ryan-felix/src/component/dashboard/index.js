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
        />
      ))}
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createCategory: (category) => dispatch(Actions.createCategory(category)),
    updateCategory: (category) => dispatch(Actions.updateCategory(category)),
    deleteCategory: (category) => dispatch(Actions.deleteCategory(category)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
