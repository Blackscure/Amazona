import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/Product';

function App() {
  return (
      <BrowserRouter> 
    <div className="grid-container">
    <header className="row">
        <div>
            <a className="brand" href="/"><span>W</span>orld <span>C</span>olours <span>T</span>echnology</a>
        </div>
        <div>
            <a href="/cart">Cart</a>
            <a href="/signin">Sign In</a>
        </div>
    </header> 
    <main>
        <Route path='/product/:id' component={ProductScreen}></Route>
        <Route path="/" component={HomeScreen} exact></Route>
        
    </main>
    <footer className="row center">
         All right reserved
    </footer>
 </div>
 </BrowserRouter>
  );
}

export default App;
