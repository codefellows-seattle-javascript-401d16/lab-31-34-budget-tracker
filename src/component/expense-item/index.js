import React from 'react'
import {connect} from 'react-redux'
import {renderIf} from '../../lib/util.js'
import CategoryForm from '../category-form'
import ExpenseForm from '../expense-form'

import {
  expenseUpdate,
  expenseDelete,
} from '../../action/expense-actions.js'

class ExpenseItem extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      editing: false,
    }
  }
  render(){
    return(
      <h1>SDG</h1>
    )
  }
}

export default ExpenseItem
