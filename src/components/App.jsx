import { Component } from "react";
import { Form } from "./Form/Form";
import { ContactsList } from "./ContactsList/ContactsList";
import { SearchInput } from "./SearchInput/SearchInput";
import { nanoid } from "nanoid";

export class App extends Component {
  key = "contacts";

  state = {
    contacts: [],
    filter: "",
    // key: "contacts",
  };

  componentDidMount() {
    const storageItems = JSON.parse(localStorage.getItem(this.key));

    if (storageItems) {
      this.setState({ contacts: storageItems })
    }
  }

  componentDidUpdate(prevProps, prevState){
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem(this.key, JSON.stringify(this.state.contacts))
    }
  }

  formDataGetter = (data) => {
    const { name, number } = data;
    const newContact = {
      name: name,
      number: number,
      contactId: nanoid(),
    };

    if ((this.state.contacts.map(contact => contact.name)).includes(name)) {
      window.alert(`${name} is already in contacts`)
      return
    }

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  handleSearch = (filter) => {
    this.setState({ filter });
  };

  hendleDeleteContact = (idData) => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.contactId !== idData)
      }
    })
  }

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <>
        <h1>Phonebook</h1>
        <Form onDataSubmit={this.formDataGetter} />
        <h2>Contacts</h2>
        <SearchInput onFilter={this.handleSearch} />
        <ContactsList contacts={filteredContacts} onDelete={this.hendleDeleteContact} />
      </>
    );
  }
}