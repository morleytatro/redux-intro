import { useState } from 'react';

import ToggleButton from './ToggleButton';

function Container() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode(current => !current);
  }

  return (
    <div className={'container ' + (darkMode ? ' dark' : 'light')}>
      <div className="flex">
        <ToggleButton enabled={darkMode} handleClick={toggleDarkMode}/>
        <ToggleButton enabled={darkMode} handleClick={toggleDarkMode}/>
        <ToggleButton enabled={darkMode} handleClick={toggleDarkMode}/>
      </div>
      <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eius cupiditate quos illum dolorem necessitatibus expedita ad quisquam magni, modi maxime deserunt obcaecati, nisi natus placeat mollitia quas quod recusandae!</p>
      <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eius cupiditate quos illum dolorem necessitatibus expedita ad quisquam magni, modi maxime deserunt obcaecati, nisi natus placeat mollitia quas quod recusandae!</p>
    </div>
  )
}

export default Container;