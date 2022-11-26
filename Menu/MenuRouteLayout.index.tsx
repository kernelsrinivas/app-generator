import * as React from 'react';
import * as icons from 'react-icons/all';
import { NavLink, Outlet } from 'react-router-dom';
import { views } from '../Data';

/** https://colorswall.com/palette/17 */

export const MenuRouteLayout = () => {
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
        <main style={{ backgroundColor: '#dcedc8', width: '90%', padding: 20 }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};
