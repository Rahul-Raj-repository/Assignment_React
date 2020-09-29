import React, {Component} from "react"
import { Route, BrowserRouter as Router, Switch} from "react-router-dom"
import Home from "./Components/Home"

class App extends Component{
  render(){
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>
      </Router>
    )
  }
}

export default App