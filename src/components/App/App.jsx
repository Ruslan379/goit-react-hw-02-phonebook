import React, { Component } from 'react';

import { nanoid } from 'nanoid';

import { Container } from 'components/Container/Container';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';




// * +++++++++++++++++++++++++++ CLASS ++++++++++++++++++++++++++++++++++
export class App extends Component {
  state = {
    contacts: [],
    filter: ''
  };


// * +++++++++++++++++++++++++++ МЕТОДЫ ++++++++++++++++++++++++++++++++++

  //! Добавление контакта в this.state.contacts
  addСontact = (name, number) => {
    const contact = {
      id: nanoid(),  
      name,
      number,
    };
    this.setState(({ contacts }) => ({
      contacts: [...contacts, contact],
    }));
  };


  
  //! NEW - передача пропсов name и number из ContactForm
  //! alert с предупреждением о наявности контакта
  formSubmitHandler = (name, number) => {
    const contacts = this.state.contacts 
    
    if (contacts.find(item => item.name.toLowerCase() === name.toLowerCase())) {
        alert(`${name} is already in contacts.`);
        return;
    } else {
      this.addСontact(name, number); 
      }
  };



  //! запись значения из input-(Find contacts by name) в this.setState.filter
  changeFilter = (event) => {
    this.setState({ filter: event.currentTarget.value });
  };


  //! Создание нового массива объектов из this.state.contacts с учетом значения поиска из this.state.filter
  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };


  //! Создание нового массива объектов из this.state.contacts с учетом удаления контакта по его contact.id
  deleteTodo = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };


// * +++++++++++++++++++++++++++ RENDER ++++++++++++++++++++++++++++++++++
  render() {

    const { contacts, filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    const totalContacts = contacts.length;


// * +++++++++++++++++++++++++++ MARKUP ++++++++++++++++++++++++++++++++++
    return (
      <Container>

        <h1>Phonebook</h1>

        <ContactForm onSubmit={this.formSubmitHandler} />

        <h2>Contacts</h2>
        <p>Total: {totalContacts}</p>

        <Filter
          value={filter}
          onChange={this.changeFilter}
        />
  
        <ContactList
          visibleContacts={visibleContacts}
          onDeleteTodo={this.deleteTodo}
        />

      </Container>
    );
  }
}
