import './_dashboard-container.scss'
import React from 'react'
import { connect } from 'react-redux'
import CategoryForm from '../category-form'
import CategoryItem from '../category-item'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'
// import Playform from '../materialUI'
import TextField from 'material-ui/TextField'
import categoryIcon from 'material-ui/svg-icons/'
import ActionAndroid from 'material-ui/svg-icons/action/android'
import { categoryCreate } from '../../action/category-action.js'
import Paper from 'material-ui/Paper'


class DashboardContainer extends React.Component {
  componentDidMount() {
    this.props.categoryCreate({ title: 'nice it mounted' })
  }

  render() {
    console.log('categories', this.props.categories)
    return (
      <MuiThemeProvider>
      <main className="dashboard-container">
        <h1> Michaels Budget Tracker! </h1>
        <CategoryForm

          buttonText="create a category"
          onComplete={this.props.categoryCreate}
        />
        {console.log('hitting category item', this.props.categories)}
        {this.props.categories.map(item =>
          <div key={item.id}>
            <Paper zDepth={5} />
            <CategoryItem category={item} />
          </div>
        )}
      </main>
      </MuiThemeProvider>
    )
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories,
  }
}

const mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryCreate: category => dispatch(categoryCreate(category)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer)
