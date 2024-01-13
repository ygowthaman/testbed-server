import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="app-content">
        <Header />
        <MainContent />
      </div>
    )
  }
}

export default App;