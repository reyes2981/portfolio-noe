import React from 'react'
import react from 'react'
import { Route, Switch } from `react-router-dom`
import Home from './home'
import About from './about'
import Contact from './contact'

class App extends React.Component {
    render () {
        return (
            <div>
                <switch>
                    <Route exact path="/" Component={Home} />
                    <Route exact path="/about" Component={About} />
                    <Route exact path="/contact" Component={Contact} />
                </switch>
            </div>
        )        
    }
}

export default App