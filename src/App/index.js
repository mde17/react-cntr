import React from 'react';
import 'sanitize.css';

import AppHeader from '../AppHeader';
import CounterContainer from '../CounterContainer';
import './styles.css';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <CounterContainer />
    </div>
  );
}

export default App;
