import React from 'react';

class ExpenseItem extends React.Component {
  render(){
    return(
      <div>
        <h4>{this.props.expense.name}</h3>
        <h5>Budget: ${this.props.expense.price}</h4>
      </div>
    )
  }
}

export default ExpenseItem;
