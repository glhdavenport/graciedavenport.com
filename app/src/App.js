import React from 'react';
import './App.css';
import MarkDownFile from './MarkdownRenderer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
        <MarkDownFile />
        </p>
      </header>
    </div>
  );
}

export default App;
