import React from 'react'
import {Connect} from 'react-redux'
import {
  categoryCreate,
  categoryUpdate,
  categoryDelete,
  categoryReset,
} from '../../action/category-action.js'

import CategoryForm from '../category-form'

class DashboardContainer extends React.Component {
  componentDidMount(){
    this.props.categoryCreate({type: 'groceries'})
    this.props.categoryCreate({type: 'work'})
    this.props.categoryCreate({type: 'toys'})
    this.props.categoryCreate({type: 'travel'})
  }
}
