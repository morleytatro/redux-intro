import { useState } from 'react';

import ToggleButton from './ToggleButton';

function Container() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode(current => !current);
  }

  return (
    <div className={'container ' + (darkMode ? ' dark' : 'light')}>
      <ToggleButton enabled={darkMode} handleClick={toggleDarkMode}/>
      <ToggleButton enabled={darkMode} handleClick={toggleDarkMode}/>
      <ToggleButton enabled={darkMode} handleClick={toggleDarkMode}/>
    </div>
  )
}

export default Container;