import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MenuRouteLayout } from './Menu/MenuRouteLayout.index';
import './style.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MenuRouteLayout />}>
          <Route index path="/1" element={<div>List View</div>} />
          <Route path="/2" element={<div>GridView</div>} />
          <Route path="/3" element={<div>CardView</div>} />
          <Route path="/4" element={<div>FormView</div>} />
          <Route path="/5" element={<div>TableView</div>} />
          <Route path="/6" element={<div>ChartView</div>} />
          <Route path="/7" element={<div>Tab View</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
