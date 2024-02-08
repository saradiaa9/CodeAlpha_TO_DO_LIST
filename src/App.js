// App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Todo from './Todo'; // Assuming Todo component is defined in './Todo.js'

function App() {
  return (
    <div className="App">
      <BrowserRouter>        
        <Routes>
          <Route path="/" element={<Todo />} />          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
