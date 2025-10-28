import React from "react"
import { HashRouter as Router, Route, Link } from "react-router-dom"
import ImageViewerBase from './components/ImageViewerBase.jsx'
import ImageViewerList from './components/ImageViewerList.jsx'
import './viewer-buttons-simple.css'
const App = () => (
  <Router>
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      background: 'transparent'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '15px 30px',
        background: 'rgba(255, 255, 255, 0.9)',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <nav>
          <Link to="/" style={{
            marginRight: "20px",
            textDecoration: 'none',
            color: '#333',
            fontWeight: 'bold'
          }}>Vista Básica</Link>
          <Link to="/list" style={{
            textDecoration: 'none',
            color: '#333',
            fontWeight: 'bold'
          }}>Vista Lista</Link>
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
      <div style={{
        flex: 1,
        padding: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Route exact path="/" component={ImageViewerBase} />
        <Route path="/list" component={ImageViewerList} />
      </div>
    </div>
  </Router>
);

export default App;