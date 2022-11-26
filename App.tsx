import * as React from 'react';
import './style.css';

const views = [
  {
    id: 1,
    name: 'List View',
  },
  {
    id: 2,
    name: 'Grid View',
  },
  {
    id: 3,
    name: 'Card View',
  },
  {
    id: 4,
    name: 'Form View',
  },
  {
    id: 5,
    name: 'Table View',
  },
  {
    id: 5,
    name: 'Chart View',
  },
  {
    id: 5,
    name: 'Tab View',
  },
];

export default function App() {
  return (
    <div>
      <p>React Native View Generator</p>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <aside style={{ backgroundColor: '#F90', padding: 10, width: '25%' }}>
          {views.map((view) => {
            return <div>{view.name}</div>;
          })}
        </aside>
        <main style={{ backgroundColor: '#CCC', width: '75%', padding: 10 }}>
          <p>hello</p>
        </main>
      </div>
    </div>
  );
}
