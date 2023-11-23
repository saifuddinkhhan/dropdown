import React, { useState } from 'react';
import './Dropdown.css'; // You can style your dropdown in a separate CSS file
//import "./App.css"

const Dropdown = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <div className='wrapper'>
    <div className="dropdown-container">
      <div className="dropdown-btn" onClick={toggleDropdown}>
        {selectedItem || 'Select an option'}
      </div>
      {isOpen && (
        <div className="dropdown-list">
          {items.map((item, index) => (
            <div
              key={index}
              className="dropdown-list-item"
              onClick={() => handleItemClick(item)}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
    </div>

    
    
  );
  
};

export default Dropdown;
