import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';


const rootElement = document.getElementById("root");

// Use createRoot directly
const root = createRoot(rootElement);

root.render(
    
  <Router>
    
      <App />
    
    
  </Router>,

);
