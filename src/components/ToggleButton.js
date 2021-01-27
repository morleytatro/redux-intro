import { useDispatch, useSelector } from 'react-redux';

// when updating Redux state, we have to 'dispatch' an 'action'

function ToggleButton() {
  const darkMode = useSelector(state => state.darkMode);
  
  // returns a function called dispatch which allows us to updated the state
  const dispatch = useDispatch();

  return (
    <button
      className="btn"
      onClick={() => dispatch({ type: 'TOGGLE_DARK_MODE', payload: null })}
    >
      Turn Dark Mode {darkMode ? 'Off' : 'On'}
    </button>
  );
}

export default ToggleButton;