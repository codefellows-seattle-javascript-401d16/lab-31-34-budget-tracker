import React from 'react';
import {connect} from 'react-redux';

import './_expense-item.scss';
import Draggable from '../draggable';
import ExpenseForm from '../expense-form';

import {
  expenseDelete,
  expenseUpdate,
} from '../../actions/expenses-actions.js';

class ExpenseItem extends React.Component {
  constructor(props) {
    console.log('propDecrease', props);
    super(props)
    this.state = {
      showExpenseOpts: false,
      showExpeses: true,
      dropReady: false
    }
    this.handleShowItemOpts = this.handleShowItemOpts.bind(this)
    this.handleShowExpeses = this.handleShowExpeses.bind(this)
  }

componentWillReceiveProps(props){
    let newDropReady = props.dropzone
    this.setState({dropReady: newDropReady})
}

handleShowExpeses() {
  let currentSate = this.state.showExpeses;
  this.setState({showExpeses: !currentSate})
}
handleShowItemOpts() {
  let currentSate = this.state.showExpenseOpts;
  this.setState({showExpenseOpts: !currentSate})
}

  render() {
    let {expense,
         categoryUpdate,
         categoryDelete,
         expenseDelete,

         } = this.props
    return (
      <Draggable
        dataTransferItem={expense}
      >
          <div className={this.state.dropReady ? 'dropzone-expense' : 'expense-item-container'}>

            {this.state.showExpeses ?
              <div className='expense-item-box'>
                <title><strong>Expense: </strong></title><span>{expense.expenseName}</span><br />

                <amount><strong>Amount: </strong></amount><span>$ {expense.price}</span>
              </div>
            :
              <div className='expense-item-box'>
                <ExpenseForm
                    expense={expense}
                    updateItemClass='expense-form-update'
                    showExpensesFunc={this.handleShowExpeses}
                    showItemOpts={this.handleShowItemOpts}
                    onComplete={(data) => {
                    data.categoryID = expense.categoryID;
                    data.id = expense.id;
                    this.props.expenseUpdate(data);
                    }}
                />
              </div>
            }
          <div className='expense-item-menu'>
            <img
              className='expense-item-menu-img'
              src='https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Menu_Icon-24.png'
              onClick={this.handleShowItemOpts}
            />
          </div>

          {this.state.showExpenseOpts ?
            <div className='expense-item-menu-opts'>
              <img
                className='expense-item-opts-buttons'
                src='https://cdn4.iconfinder.com/data/icons/48-bubbles/48/15.Pencil-16.png'
                onClick={this.handleShowExpeses}
              />
              <img
                className='expense-item-opts-buttons' src='https://cdn3.iconfinder.com/data/icons/streamline-icon-set-free-pack/48/Streamline-70-16.png' onClick={()=>{expenseDelete(expense)}}
              />
            </div>
          :
          <div className='expense-item-menu-opts'>
          </div>
          }


        </div>
     </Draggable>
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
