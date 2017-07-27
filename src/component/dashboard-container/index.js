import React from 'react'
import {connect} from 'react-redux'
import {
  categoryCreate,
  categoryUpdate,
  categoryDelete,
  categoryReset,
} from '../../action/category-action.js'

import CategoryForm from '../category-form'
import CategoryList from '../category-list'

class DashboardContainer extends React.Component {
  componentDidMount(){
    this.props.categoryCreate({title: 'groceries'})
    this.props.categoryCreate({title: 'work'})
    this.props.categoryCreate({title: 'toys'})
    this.props.categoryCreate({title: 'travel'})
  }
  render(){
    console.log('props', this.props.state)
    return(
      <main className='dashboard'>
        <h2>Dashboard</h2>
        <CategoryForm
          submitText='Create Category'
          onComplete={this.props.categoryCreate}
        />
        {this.props.categorys.map((item) =>
          <div key={item.id}>
            console.log(item)
            <h3>{item.title}</h3>
            <CategoryList categoryDelete={this.categoryDelete} />
          </div>
        )}
      </main>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    categorys: state,
  }
}

const mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryCreate: (category) => dispatch(categoryCreate(category)),
    categoryUpdate: (category) => dispatch(categoryUpdate(category)),
    categoryDelete: (category) => dispatch(categoryDelete(category)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer)
