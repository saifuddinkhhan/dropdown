import React from 'react';
import Dropdown from './Dropdown';


//import './Dropdown.css'; // Import the CSS file

const App = () => {
  // Sample items array (you can replace it with your own)
  const items = ["HTML", "CSS", "JavaScript"];

  return (
    <div className='App'> 
      <h1 className='heading'>DROPDOWN</h1>
      <Dropdown items={items} />
    </div>
  );
};

export default App;
