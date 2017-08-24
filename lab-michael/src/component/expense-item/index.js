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
import FlatButton from 'material-ui/flatButton'


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
          <AppBar
          title={expense.title}
          showMenuIconButton={false}
          titleStyle = {{
            fontFamily:'Playfair Display'
          }}
          iconElementRight={<FlatButton label="Edit"
          onClick={()=>{
            this.renderTitleEdit()
          }}
          />}
          style={{
              backgroundColor: '#4ED4A6',
            }}
          />

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
            <p> Expense: {expense.expense} </p>
            <button
            className='delete-button'
            onClick={() =>{
              this.props.expenseDelete(expense); console.log('hitting the delete button!')
            }}>
              Delete
            </button>
          </div>

          <div className='editing'>
           <ExpenseForm
            expense={expense}
            buttonText='Update Expense'
            onComplete={(data)=> {
              data.id = expense.id;
              this.props.expenseUpdate(data);
            }}/>
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
