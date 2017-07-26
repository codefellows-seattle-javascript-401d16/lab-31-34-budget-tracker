import React from 'react';
import {connect} from 'react-redux';
import CategoryForm from '../category-form';
import ExpenseForm from '../expense-form';

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
  }

  render(){
    let {category, categoryUpdate, categoryDelete} = this.props;
    return(
      <div className='category-item'>
        <div>
          <div className='content'>
            <h3> Name: {category.name} ---- Budget: ${category.budget} </h3>
          </div>
          <div>
            <CategoryForm
              category={category}
              onComplete={(data) => {
                data.id = category.id;
                categoryUpdate(data);
              }}
              buttonText='update'
            />

            <div>
              <ExpenseForm
                onComplete={(data)=>{
                  data.categoryID = category.id;
                  expenseCreate(data);
                }}
                buttonText='create expense'
              />

              {this.props.expense.map((item) =>
                <ExpenseItem
                  key={item.id}
                  expense={item}
                />
              )}

            </div>

            <button onClick={() => categoryDelete(category)}>Delete</button>
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = () => ({});


const mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryUpdate: (category) => dispatch(categoryUpdate(category)),
    categoryDelete: (category) => dispatch(categoryDelete(category)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps
)(CategoryItem);
