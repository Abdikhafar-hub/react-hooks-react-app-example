import React, { useState, useEffect } from 'react';
import ExampleComponent from './ExampleComponent';
import TestComponent from './TestComponent';

const App = () => {
  const [headerText, setHeaderText] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    // Set the header text to "Now" after the component mounts
    setHeaderText('Now');
  }, []);

  return (
    <div>
      <h1>{headerText}</h1>
      <ExampleComponent />
      <TestComponent />
    </div>
  );
};

export default App;
