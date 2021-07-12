import React from 'react'
import react from 'react'
import { Route, Switch } from `react-router-dom`

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