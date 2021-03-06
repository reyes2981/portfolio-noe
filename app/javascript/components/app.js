import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './home'
import About from './about'
import Contact from './contact'

class App extends React.Component {
    render () {
        return (
            <div>
                <Switch>
                    <Route exact path="/" Component={Home} />
                    <Route exact path="/about" Component={About} />
                    <Route exact path="/contact" Component={Contact} />
                </Switch>
            </div>
        )        
    }
}

export default App