import React from 'react'
import {Route} from 'react-router-dom'

const AppRoute = ({path, exact, Layout, Component}) => (
  <Route
      path={path}
      exact={exact}
      render={props => {
          const renderView = (
            <Layout>
              <Component>
                {props.children}
              </Component>
            </Layout>
          )
          return renderView
        }
      }
  />
)

export default AppRoute
