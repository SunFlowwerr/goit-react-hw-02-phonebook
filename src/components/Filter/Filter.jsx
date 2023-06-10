import PropTypes from 'prop-types';

export const Filter = ({ value, onChange }) => (
  <label
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      width: '250px',
      height: '20px',
      marginLeft: '40px',
      marginBottom: '20px',
      fontSize: '18px',
    }}
  >
    Find contact by name:
    <input
      style={{
        width: '250px',
        height: '40px',
      }}
      type="text"
      value={value}
      onChange={onChange}
    ></input>
  </label>
);
Event.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
