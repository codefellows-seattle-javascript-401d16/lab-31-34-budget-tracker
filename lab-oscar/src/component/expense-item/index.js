import React from 'react';
import {connect} from 'react-redux';

import ExpenseForm from '../expense-form';

class ExpenseItem extends React.Component {
  constructor(props) {
    console.log('000', props );
    super(props)
  }


  render() {
    return (
      <div>
      <div className="test">
        {this.props.expenses[this.props.category].map((item) => {
            return <h2>{item.expenseName}</h2>
        })}
      </div>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses,
  }
}

let mapDispatchToProps = dispatch => ({

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpenseItem)
