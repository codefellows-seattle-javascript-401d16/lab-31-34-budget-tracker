import React from 'react'
import {connect} from 'react-redux'
import CategoryForm from '../category-form'
import {
  categoryUpdate,
  categoryDelete,
} from '../../action/category-action.js'

import {
  expenseCreate,
  expenseDelete,
  expenseInsert,
} from '../../action/expense-action.js'

import ExpenseForm from '../expense-form'
import DropZone from '../drop-zone'
import ExpenseItem from '../expense-item'
import Util from '../../lib/util.js'


import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import categoryIcon from 'material-ui/svg-icons/'
import ActionAndroid from 'material-ui/svg-icons/action/android'
import AppBar from 'material-ui/appbar'
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper'
import FlatButton from 'material-ui/FlatButton'

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

class CategoryItem extends React.Component {
  constructor(props){
    super(props)
    this.state= {
      PopOpen:false,
      editing:false,
    }
    this.handleDropZoneComplete = this.handleDropZoneComplete.bind(this)
    this.renderTitleEdit = this.renderTitleEdit.bind(this)
  }

  handleDropZoneComplete(err, expense){
    if (err)
      return console.error(err)
    this.props.expenseDelete(expense)

    expense.categoryID = this.props.category.id
    console.log('this.props!!',this.props);
    console.log('expenseDelete',expenseDelete);
    this.props.expenseInsert(expense)
  }

  handleClickPop(){
    event.preventDefault();

    this.setState({
      PopOpen: true,
      anchorEl: event.currentTarget,
    });
    console.log(this.state.PopOpen,'popopen!!');
  }

  renderTitleEdit(){
    // event.preventDefault();
    this.setState(prevState => ({
      editing: !prevState.editing
    }));
    console.log(this.state.editing,'popEdit!!!');
    }

  handleClosePop(){
    this.setState({
      PopOpen: false,
    });
    console.log('pop close!!',this.state.PopOpen);
  };

  render(){
    console.log('this.propsssssssin category!!!',this.props)
    let {category} = this.props
    let Updated = <CategoryForm
     category={category}
     buttonText='update'
     onComplete={this.props.categoryUpdate}
     />
    return (
      <Paper zDepth={5}>
          <div className='category-item'>
          <DropZone onComplete={this.handleDropZoneComplete}>
          <div className='content'>
          <AppBar
          title={category.title}
          showMenuIconButton={false}
          titleStyle = {{
            fontFamily:'Playfair Display'
          }}
          iconElementRight={<FlatButton label="Edit"
          onClick={()=>{
            this.renderTitleEdit()
          }}
          />
        }
          />
          <Popover
            open={this.state.PopOpen}
            anchorEl={this.state.anchorEl}
            onRequestClose={this.handleClosePop}
            anchorOrigin={{horizontal: 'middle', vertical: 'center'}}
            targetOrigin={{horizontal: 'middle'}}
          >
          <Menu>
            <MenuItem primaryText="DELETE Category" onClick={() =>{
              this.props.categoryDelete(category)
            }}
            />
            <MenuItem primaryText="EDIT Category" onClick={()=>{
              this.renderTitleEdit()
            }}
            />
          </Menu>
        </Popover>
        {console.log(this.state.editing,'this is the State!!!')}
        {this.state.editing ?
          <div className='editing'>
          <CategoryForm
          buttonText='Update'
          category={category}
          floatingLabelText={false}
          hintText={false}
          onComplete={this.props.categoryUpdate}
          />
          </div>
          : null
        }
        </div>

          <div className='expense-form'>
          <ExpenseForm
            buttonText='Add Expense'
            onComplete={data=> {
              console.log('this is in the expense form on complete!!!',category.id);
              data.categoryID = category.id
              this.props.expenseCreate(data)
            }}
          />
          </div>
          {console.log('category.id!!!!!!',this.props.expenses)}
          <Table>
          <TableHeader
          adjustForCheckBox={false}
          displaySelectAll={false}
          >
            <TableRow>
              <TableHeaderColumn>Expenses</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
          displayRowCheckbox={false}
          >


          {this.props.expenses.map((item)=>
            <div key={item.id}>
            <ExpenseItem expense={item}/>
            </div>
          )}
          </TableBody>
          </Table>


        </DropZone>
      </div>
    </Paper>
    )
  }
}

let mapStateToProps = (state, props) => {
  return {
    expenses: state.expenses[props.category.id],
  }
}

let mapDispatchToProps = dispatch => ({
  categoryUpdate: (category) => dispatch(categoryUpdate(category)),
  categoryDelete: (category) => dispatch(categoryDelete(category)),
  expenseCreate: (expense) => dispatch(expenseCreate(expense)),
  expenseDelete: (expense) => dispatch(expenseDelete(expense)),
  expenseInsert: (expense) => dispatch(expenseInsert(expense)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CategoryItem)


// {/*iconElementRight={()=>{
//   this.setState(prevState => ({
//     editing: !prevState.editing
//   }));
// }}*/}
// anchorOrigin={{horizontal: 'center', vertical: 'center'}}
// targetOrigin={{horizontal: 'left', vertical: 'top'}}
