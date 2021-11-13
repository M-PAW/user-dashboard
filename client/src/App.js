import React from 'react';
import Navigation from './Components/Navigation';
import AppRouter from './Router/Router';
import isAuthenticated from './utils/isAuthenticated';

function App() {
  return (
    <div className="App">
      {isAuthenticated()?<Navigation/>:null}
      <AppRouter />
    </div>
  );
}

export default App;
