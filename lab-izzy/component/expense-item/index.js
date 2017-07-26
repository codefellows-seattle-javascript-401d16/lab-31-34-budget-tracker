import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from '../expense-form';

import {
  expenseCreate,
  expenseUpdate,
  expenseDelete,
} from '../../action/expense-actions.js';

let renderIf = (t, c) => t ? c : undefined;

class ExpenseItem extends React.Component {
  constructor(props){
    console.log('$$$$', props);
    super(props);
    this.state = {
      editing: false,
    };
  }

  render(){
    let {expense, category, categoryID} = this.props;
    console.log('this.props', this.props);
    return (

      <div onDoubleClick={() => this.setState(state => ({editing: !state.editing}))}>

        {renderIf(!this.state.editing,
          <div>
            <button onClick={() => this.props.expenseRemove(expense)}>
              delete
            </button>

            <h3> title: {expense.name} </h3>
            <h3> price: {expense.price} </h3>
          </div>
        )}

        {renderIf(this.state.editing,
          <ExpenseForm
            expense={expense}
            buttonName='update expense'
            onComplete={(data) => {
              data.id = expense.id;
              this.props.expenseUpdate(data);
            }} />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  expenseCreate: (expense) => dispatch(expenseCreate(expense)),
  expenseUpdate: (expense) => dispatch(expenseUpdate(expense)),
  expenseDelete: (expense) => dispatch(expenseDelete(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseItem);
