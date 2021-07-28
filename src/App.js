import react from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Pages/Home';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <switch>
        <route path='/' exact component= {Home} />

      </switch>
    </Router>
 
    </>
  );
}

export default App;
