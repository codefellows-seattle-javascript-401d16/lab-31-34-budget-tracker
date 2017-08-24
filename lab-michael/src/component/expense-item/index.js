import './_expense-item.scss'
import React from 'react'
import {connect} from 'react-redux'
import ExpenseForm from '../expense-form'
import {
  expenseUpdate,
  expenseDelete,
} from '../../action/expense-action.js'

import Draggable from '../draggable'


import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import categoryIcon from 'material-ui/svg-icons/'
// import ActionAndroid from 'material-ui/svg-icons/action/feedback'
import AppBar from 'material-ui/appbar'
import ActionAndroid from 'material-ui/svg-icons/communication/forum'
import FlatButton from 'material-ui/FlatButton'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

class ExpenseItem extends React.Component {
  constructor(props){
    super(props)
    this.state={
      editing:false,
    }
    this.renderTitleEdit = this.renderTitleEdit.bind(this)
  }

  renderTitleEdit(){
    // event.preventDefault();
    this.setState(prevState => ({
      editing: !prevState.editing
    }));
    console.log(this.state.editing,'popEdit!!!');
    }


  render(){
    let {expense} = this.props
    return (
          <div className='expense-item'>
          <Draggable dataTransferItem={expense}>
          <div>
          <div className='content'>
          <TableRow>
          <TableRowColumn><FlatButton
              label="Update"
              style={{fontFamily:"Playfair Display"}}
              onClick={()=>{
                this.renderTitleEdit()
              }}
            />
            <FlatButton
                label="Delete"
                style={{fontFamily:"Playfair Display"}}
                onClick={() =>{
                  this.props.expenseDelete(expense); console.log('hitting the delete button!')
                }}
              />
            </TableRowColumn>
            <TableRowColumn
            style={{fontFamily:"Playfair Display"}}
            >{expense.title}</TableRowColumn>
          </TableRow>



          {this.state.editing ?
            <div className='editing'>
            <ExpenseForm
            buttonText='Update'
            expense={expense}
            floatingLabelText={false}
            hintText={false}
            onComplete={this.props.expenseUpdate}
            />
            </div>
            : null
          }
            {console.log('this is expense!!',expense)}
          </div>
        </div>
        </Draggable>
      </div>

    )
  }
}

let mapStateToProps = () => ({})

let mapDispatchToProps = dispatch => ({
  expenseUpdate: (expense) => dispatch(expenseUpdate(expense)),
  expenseDelete: (expense) => dispatch(expenseDelete(expense)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ExpenseItem)
