import React from 'react';
import {Switch,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contacts from './components/Contacts';
import About from './components/About';
import ProductDetail from './components/ProductDetail';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
          <Switch>
            <Route  exact path="/" component={Home} />
            <Route path="/Contacts" component={Contacts} />
            <Route path="/About" component={About} />
            <Route path="/:id/:cost" component={ProductDetail}/>
          </Switch>
      </header>
    </div>
  );
}
export default App;
