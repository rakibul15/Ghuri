import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Topnav from './Components/Topnav/Topnav';
import { Route, Router, Switch } from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';

function App() {
  return (
    <div>
      <Topnav></Topnav>
      <Header/>
    </div>
  );
}

export default App;
