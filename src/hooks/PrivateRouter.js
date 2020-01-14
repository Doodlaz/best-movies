import React from 'react'
import { Route } from 'react-router-dom'

const PrivateRoute = ({ component: Component, path, ...rest }) => {

  return <Route { ...rest } path={ path } render={ props => <Component { ...props } /> } />

}

export default PrivateRoute
