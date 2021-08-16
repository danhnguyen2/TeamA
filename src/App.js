<<<<<<< Updated upstream

import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/home/Home';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <Footer />
    </div>

  );
}

export default App;
=======
import React, { Component } from "react";
import Routes from "./Routes";

class App extends Component {
  render() {
    return (
      <div>
        <Routes />
      </div>
    )
  }
}

export default App;
>>>>>>> Stashed changes
