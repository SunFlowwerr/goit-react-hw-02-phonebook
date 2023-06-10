import { Component } from 'react';

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  hendleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  hendleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form
        onSubmit={this.hendleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          margin: '40px',
          gap: '15px',
          width: '250px',
        }}
      >
        <h2
          style={{
            margin: '0px',
          }}
        >
          Phonebook
        </h2>
        <label
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            fontSize: '20px',
          }}
        >
          Name :
          <input
            style={{
              width: '250px',
              height: '20px',
            }}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={this.hendleChange}
          />
        </label>
        <label
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            fontSize: '20px',
          }}
        >
          Number :
          <input
            style={{
              width: '250px',
              height: '20px',
            }}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={this.hendleChange}
          />
        </label>
        <button
          type="submit"
          style={{
            width: '120px',
            height: '40px',
            margin: 'auto',
            marginTop: '10px',
            backgroundColor: '#00BFFF',
            border: '1px solid #00BFFF',
            borderRadius: '4px',
            color: '#fff',
            fontSize: '16px',
          }}
        >
          Add contact
        </button>
      </form>
    );
  }
}
