import { Component } from 'react';
import { Form } from './Form';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmitHandler = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    if (
      !this.state.contacts.some(
        existingContact => existingContact.name === contact.name
      )
    ) {
      this.setState(prevState => ({
        contacts: [contact, ...prevState.contacts],
      }));
    } else {
      alert(contact.name + ' is already in contacts!');
    }
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const contacts = this.state.contacts;

    if (contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  render() {
    const normalizedFilter = this.state.filter.toLocaleLowerCase();
    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <div>
        <Form onSubmit={this.formSubmitHandler}></Form>
        <Filter value={this.state.filter} onChange={this.changeFilter}></Filter>
        <ContactList
          list={visibleContacts}
          onDeleteContact={this.deleteContact}
        ></ContactList>
      </div>
    );
  }
}
