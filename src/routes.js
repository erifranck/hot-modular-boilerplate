import React from 'react'
import {HashRouter, Switch} from 'react-router-dom'
import AppRoute from './components/AppRouter'
import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'

const Routes = () => (
  <HashRouter>
    <Switch>
        <AppRoute path='/' Component={Home} Layout={Layout} exact />
        <AppRoute path='/about' Component={About} Layout={Layout} />
        <AppRoute path='/portfolio' Component={Portfolio} Layout={Layout} />
    </Switch>
  </HashRouter>
)

export default Routes
