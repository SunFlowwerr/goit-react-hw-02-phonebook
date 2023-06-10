import PropTypes from 'prop-types';

export const ContactList = ({ list, onDeleteContact }) => {
  return (
    <ul
      style={{
        display: 'flex',
        flexDirection: 'column',
        margin: '40px',
        gap: '15px',
        width: '100%',
        padding: '0px',
        listStyle: 'inside',
      }}
    >
      <h2
        style={{
          margin: '0px',
        }}
      >
        Contacts:
      </h2>
      {list.map(({ id, name, number }) => (
        <li
          key={id}
          style={{
            display: 'flex',
            flexDirection: 'row',
            padding: '0px',
            fontSize: '18px',
            margin: '0px',
          }}
        >
          <p
            style={{
              margin: '0px',
            }}
          >
            {name}:{' '}
          </p>
          <p
            style={{
              paddingLeft: '7px',
              margin: '0px',
            }}
          >
            {number}
          </p>
          <button
            style={{
              width: '70px',
              height: '30px',
              backgroundColor: '#00BFFF',
              border: '1px solid #00BFFF',
              borderRadius: '4px',
              color: '#fff',
              fontSize: '16px',
              marginLeft: '15px',
            }}
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

Event.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    })
  ),
};
