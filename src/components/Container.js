import { useSelector } from 'react-redux';

import ToggleButton from './ToggleButton';

function Container() {
  // this is a hook!
  // reaching out to the global state
  const darkMode = useSelector(state => state.darkMode);

  return (
    <div className={'container ' + (darkMode ? ' dark' : 'light')}>
      <div className="flex">
        <ToggleButton/>
        <ToggleButton/>
        <ToggleButton/>
      </div>
      <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eius cupiditate quos illum dolorem necessitatibus expedita ad quisquam magni, modi maxime deserunt obcaecati, nisi natus placeat mollitia quas quod recusandae!</p>
      <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eius cupiditate quos illum dolorem necessitatibus expedita ad quisquam magni, modi maxime deserunt obcaecati, nisi natus placeat mollitia quas quod recusandae!</p>
    </div>
  )
}

export default Container;