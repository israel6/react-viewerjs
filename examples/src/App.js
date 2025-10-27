import React from "react"
import { HashRouter as Router, Route, Link } from "react-router-dom"
import BaseDemoComponent from './components/BaseDemoComponent'
import ListDemoComponent from './components/ListDemoComponent'
const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={BaseDemoComponent} />
      <Route path="/list" component={ListDemoComponent} />
    </div>
  </Router>
);

export default App;