import React from 'react';
import {connect} from 'react-redux';

import './_expense-item.scss';
import ExpenseForm from '../expense-form';

import {
  expenseDelete,
  expenseUpdate,
} from '../../actions/expenses-actions.js';

class ExpenseItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let {expense, categoryUpdate, categoryDelete, expenseDelete} = this.props
    return (
      <div className='expense-item-container'>
      <div className='expense-item-box'>
        <h1>{expense.expenseName}</h1><h2>{expense.price}</h2>
        <button type='button'  onClick={()=>{expenseDelete(expense), this.props.expenseCountDecrease()}}> Delete
        </button>
      </div>

      <div className='expense-item-menu'>
        <img
          className='expense-item-menu-img'
          src='https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Menu_Icon-24.png'
        />
      </div>
      <div className='expense-item-menu-opts'>
        <img
          className='expense-item-opts-buttons'
          src='https://cdn4.iconfinder.com/data/icons/48-bubbles/48/15.Pencil-16.png'
          onClick={this.handleEditView}
        />
        <img
          className='expense-item-opts-buttons' src='https://cdn3.iconfinder.com/data/icons/streamline-icon-set-free-pack/48/Streamline-70-16.png' onClick={()=>{categoryDelete(category)}}
        />
      </div>
      <ExpenseForm
        expense={expense}
        onComplete={(data) => {
          data.categoryID = expense.categoryID;
          data.id = expense.id;
          this.props.expenseUpdate(data);
        }}
      />
    </div>
    )
  }
}

const mapStateToProps = () => ({
})

let mapDispatchToProps = dispatch => ({
  expenseDelete: (expense) => dispatch(expenseDelete(expense)),
  expenseUpdate: (expense) => dispatch(expenseUpdate(expense)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpenseItem)
