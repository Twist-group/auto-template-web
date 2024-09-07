// App.tsx or index.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './components/welcome';  
import Login from './components/Login';     

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />  
        <Route path="/login" element={<Login />} /> 
      </Routes>
    </Router>
  );
}

export default App;
