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
    this.state = {
      showExpenseOpts: false;
    }
  }

  render() {
    let {expense, categoryUpdate, categoryDelete, expenseDelete} = this.props
    return (
      <div className='expense-item-container'>
      <div className='expense-item-box'>
        <title><strong>Expense: </strong></title><span>{expense.expenseName}</span><br />

        <amount><strong>Amount: </strong></amount><span>{expense.price}</span>
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
          className='expense-item-opts-buttons' src='https://cdn3.iconfinder.com/data/icons/streamline-icon-set-free-pack/48/Streamline-70-16.png' onClick={()=>{expenseDelete(expense), this.props.expenseCountDecrease()}}
        />
      </div>



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
