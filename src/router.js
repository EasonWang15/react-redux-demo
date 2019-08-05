import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home.jsx'
import Add from './Add.jsx'

class RouterMap extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/home' component={ Home }></Route>
                    <Route path='/add' component={ Add }></Route>
                </Switch>
            </Router>
        )
    }
}
export default RouterMap