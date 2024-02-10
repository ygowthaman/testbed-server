import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/js/dist/button';
import 'bootstrap/js/dist/dropdown';
import './App.css'
import Header from './components/Header';
import MainComponent from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="app-content">
      <BrowserRouter>
        <Header />
        <MainComponent />
      </BrowserRouter>
    </div>  )
}

export default App
