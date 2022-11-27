import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MenuRouteLayout } from './Menu/MenuRouteLayout.index';
import './style.css';
import { CardViewEditor } from './View/CardView.index';
import { ChartViewEditor } from './View/ChartView.index';
import { FormViewEditor } from './View/FormView.index';
import { GridViewEditor } from './View/GridView.index';
import { ListViewEditor } from './View/ListView.index';
import { TableViewEditor } from './View/TableView.index';
import { TabViewEditor } from './View/TabView.index';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MenuRouteLayout />}>
          <Route index path="/1" element={<ListViewEditor />} />
          <Route path="/2" element={<GridViewEditor />} />
          <Route path="/3" element={<CardViewEditor />} />
          <Route path="/4" element={<FormViewEditor />} />
          <Route path="/5" element={<TableViewEditor />} />
          <Route path="/6" element={<ChartViewEditor />} />
          <Route path="/7" element={<TabViewEditor />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
