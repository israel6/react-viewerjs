import React from "react"
import { HashRouter as Router, Route, Link } from "react-router-dom"
import BaseDemoComponent from './components/BaseDemoComponent'
import ListDemoComponent from './components/ListDemoComponent'
const App = () => (
  <Router>
    <div>
      <nav style={{margin: "20px"}}>
        <Link to="/" style={{marginRight: "20px"}}>Vista Básica</Link>
        <Link to="/list">Vista Lista</Link>
      </nav>
      <Route exact path="/" component={BaseDemoComponent} />
      <Route path="/list" component={ListDemoComponent} />
    </div>
  </Router>
);

export default App;