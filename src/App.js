import React from 'react';
import {Routes} from './Routes'

// contexts
import { GlobalProvider } from './context/globalContext';


function App() {
  return (
    <GlobalProvider>
      <Routes />
    </GlobalProvider>
  );
}

export default App;
