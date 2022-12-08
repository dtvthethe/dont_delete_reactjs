import React from 'react';
import ReactDOM from 'react-dom/client';
import Car1 from './Car1';
import Car2 from './Car2';

const root = ReactDOM.createRoot(document.getElementById('root'));
const car2 = <Car2/>

root.render(
  <Car1 />
);
