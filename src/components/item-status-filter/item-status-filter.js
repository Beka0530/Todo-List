import React from 'react';

import './item-status-filter.css';

const ItemStatusFilter = ({onFilter, filter}) => {

    const buttons = [
        {name: 'all', label: 'All'},
        {name: 'active', label: 'Active'},
        {name: 'done', label: 'Done'}
    ];

  return (
      <div className="btn-group">
          {buttons.map((btn) => {
              const isActive = filter === btn.name
              const name = isActive ? 'btn-info' : 'btn-outline-secondary'
                  return (
                      <button onClick={(e) => {
                          onFilter(e.target.textContent.toLowerCase())
                      }}
                              key={btn.name}
                              type="button"
                              className={`btn ${name}`}>{btn.label}</button>
                  )}
          )}
    </div>
  );
};

export default ItemStatusFilter;
