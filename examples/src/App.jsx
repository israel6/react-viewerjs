import React from "react"
import { HashRouter as Router, Route, Link } from "react-router-dom"
import ImageViewerBase from './components/ImageViewerBase.jsx'
import ImageViewerList from './components/ImageViewerList.jsx'
const App = () => (
  <Router>
    <div>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px',
        backgroundColor: '#f5f5f5'
      }}>
        <nav>
          <Link to="/" style={{marginRight: "20px"}}>Vista Básica</Link>
          <Link to="/list">Vista Lista</Link>
        </nav>
        <img 
          src="./imgs/logo.png" 
          alt="Logo Municipio" 
          style={{
            height: '60px',
            marginLeft: 'auto'
          }}
        />
      </div>
      <Route exact path="/" component={ImageViewerBase} />
      <Route path="/list" component={ImageViewerList} />
    </div>
  </Router>
);

export default App;