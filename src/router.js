import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Home from './Home.jsx'
import Add from './Add.jsx'

class RouterMap extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/home' component={ Home }></Route>
                    <Route path='/add' component={ Add }></Route>
                    <Redirect exact form="/" to="/add"></Redirect>
                </Switch>
            </Router>
        )
    }
}
export default RouterMap