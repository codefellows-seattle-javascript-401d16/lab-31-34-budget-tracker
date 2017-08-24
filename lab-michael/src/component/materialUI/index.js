import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'


Class extends React.Component {
  render() {
    return(
      <MuiThemeProvider>
        <RaisedButton label="Default">
      </MuiThemeProvider>
    )
  }
}
