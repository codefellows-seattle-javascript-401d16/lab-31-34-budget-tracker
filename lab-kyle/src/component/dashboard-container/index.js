import React from 'react'
import { connect } from 'react-redux'

import {
  categoryCreate,
  categoryUpdate,
  categoryDelete,
} from '../../action/category-actions.js'

class DashboardContainer extends React.Component {
  render() {
    return (
      <div className="dashboard-container">
        <h1>Budget Tracker</h1>
      </div>
    )
  }
}

export default DashboardContainer
