//引入React
import React, { Component } from 'react'
//引入routes
import routes from './config/routes.js'
//引入两个路由组件
import Login from './pages/Login/Login.jsx'
import Admin from './pages/Admin/Admin.jsx'
//引入路由组件
import { BrowserRouter as Router, Route } from 'react-router-dom'

export default class App extends Component {
    render() {
        return (
            <Router>
               {
                   /*  <Route path='/login' component={Login} />
                <Route path='/' component={Admin} /> */

                routes.map((route,index)=>(
                    <Route key={index} {...route} />
               ))
               }
            </Router>
        )
    }
}