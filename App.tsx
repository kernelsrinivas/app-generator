import * as React from 'react';
import * as icons from 'react-icons/all';
import {
  BrowserRouter,
  Link,
  NavLink,
  Outlet,
  Route,
  Router,
  Routes,
} from 'react-router-dom';
import { views } from './Data';
import './style.css';

console.log('IconName', icons.FaAd);

const Layout = () => {
  return (
    <div>
      <p>React Native View Editor</p>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <aside
          style={{
            backgroundColor: 'darkolivegreen',
            width: '10%',
            justifyContent: 'center',
          }}
          id="sidebar"
        >
          {views.map((view) => {
            const Icon = icons[view.iconName]
              ? icons[view.iconName]
              : icons.GrEmptyCircle;
            return (
              <NavLink to={`/${view.id}`} relative="path" title={view.name}>
                {({ isActive }) => (
                  <div
                    id={isActive ? 'icon-active' : 'icon-inactive'}
                    title={view.name}
                  >
                    <Icon size={'2em'} />
                  </div>
                )}
              </NavLink>
            );
          })}
        </aside>
        <main style={{ backgroundColor: '#CCC', width: '75%', padding: 10 }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
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
