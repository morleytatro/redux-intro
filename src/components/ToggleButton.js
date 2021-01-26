function ToggleButton(props) {
  return (
    <button
      className="btn"
      onClick={props.handleClick}
    >
      Turn Dark Mode {props.enabled ? 'Off' : 'On'}
    </button>
  );
}

export default ToggleButton;