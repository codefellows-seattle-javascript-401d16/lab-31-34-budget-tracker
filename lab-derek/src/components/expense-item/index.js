import React from 'react';

class ExpenseItem extends React.Component {
  render(){
    return(
      <div>
        <h4>{this.props.expense.name}</h4>
        <h5>Budget: ${this.props.expense.price}</h5>
      </div>
    )
  }
}

export default ExpenseItem;
