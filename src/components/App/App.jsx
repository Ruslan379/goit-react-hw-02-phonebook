import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { nanoid } from 'nanoid';
// import shortid from 'shortid';


import { Container } from 'components/Container/Container';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';




// * +++++++++++++++++++++++++++ CLASS ++++++++++++++++++++++++++++++++++
export class App extends Component {

  static defaultProps = {
    initialContacts: [],
    initialFilter: ''
  };


  static propTypes = {
    initialContacts: PropTypes.array.isRequired,
    initialFilter: PropTypes.string.isRequired,

    contacts: PropTypes.array,
    filter: PropTypes.string
  };



  state = {
  //   contacts: [
  //   {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  //   {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  //   {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  //   {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  // ],
    contacts: this.props.initialContacts,
    filter: this.props.initialFilter
    // name: '',
    // number: ''
  };


// * +++++++++++++++++++++++++++ МЕТОДЫ ++++++++++++++++++++++++++++++++++
  //! перенесен в ContactForm
  // contactInputId = nanoid();


//! Добавление контакта в this.state.contacts
  addСontact = (name, number) => {
    this.setState({ contacts: [ ...this.state.contacts, { id: nanoid(), name, number }  ] }) //* Так ПРАВИЛЬНО!!!
    // this.state.contacts.push({ id: nanoid(), name, number }); //? Так Работает, но НЕЛЬЗЯ!!!
    // this.setState({ contacts: [this.state.contacts.push({ id: nanoid(), name, number })] }); //! Так НЕ РАБОТАЕТ!!!
  };



  //! alert с предупреждением о наявности контакта
  alertInputContact = (name, number) => {
    const contacts = this.state.contacts 
    
    if (contacts.find(item => item.name.toLowerCase() === name.toLowerCase())) {
        alert(`${name} is already in contacts.`);
        return;
    } else {
      // this.setState({ contacts }); // Обновление state.contacts - Уже НЕ НАДО!!!
      this.addСontact(name, number); 
      // записываю contacts в хранилище localStorage: ==>  НЕ ЗДЕСЬ, в componentDidUpdate!!!
      // localStorage.setItem('contacts', JSON.stringify(contacts));
      // this.saveLocalStorage(contacts);
      }
  };



  //! NEW - передача пропсов name и number из ContactForm
  formSubmitHandler = (name, number) => {
    // console.log("name: ", name); //!
    // console.log("number: ", number); //!
    // this.setState({ name, number }); //? 
    // console.log("state ДО: ", this.state); //!

    //! alert с предупреждением о наявности контакта
    this.alertInputContact(name, number)
    // const contacts = this.state.contacts 
    // // console.log("contacts ДО: ", contacts); //!
    
    // if (contacts.find(item => item.name.toLowerCase() === name.toLowerCase())) {
    //     alert(`${name} is already in contacts.`);
    //     return;
    // } else {
    //   // this.setState({ name, number }); 
    // // this.setState({ contacts }); //? Обновление state.contacts - Уже НЕ НАДО!!!
    //   this.addСontact(name, number); 
    //   //? записываю contacts в хранилище localStorage:
    //   localStorage.setItem('contacts', JSON.stringify(contacts));
    //   }
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



//? old formSubmitHandler
  // formSubmitHandler = (newState = {}, newContacts) => {
  //   // console.log("newState: ", newState); //!
  //   // console.log("newContacts: ", newContacts); //!
  //   // console.log("this.state: ", this.state); //!
  //   // console.log("this.state.contacts: ", this.state.contacts); //!

  //   // this.setState(prevState => ({
  //   //   contacts: prevState.contacts.push({id: 'id-5', name: 'Ruslan Fate', number: '777-77-77'}),
  //   // }));

  //   this.setState({ contacts: newContacts });
  // }

  //? перенесен в ContactForm
  // handleChange = event => {
  //   // console.log(event.currentTarget); //!
  //   // console.log(event.currentTarget.name); //!
  //   // console.log(event.currentTarget.value); //!

  //   // this.setState({ name: event.currentTarget.value });
  //   // this.setState({ [event.currentTarget.name]: event.currentTarget.value });

  //   const { name, value } = event.currentTarget;
  //   this.setState({ [name]: value });
  // };

  //? перенесен в ContactForm
  // reset = () => {
  //   this.setState({ name: '', number: '' });
  // };

  //? перенесен в ContactForm
  // handleSubmit = event => {
  //   event.preventDefault();
  //   const { contacts, name, number } = this.state;

  //   // console.log(this.state); //!
  //   // console.log(this.state.contacts); //!

  //   // this.state.contacts.push(this.state.name);

  //   // const contactsObj = { name: this.state.name, id: nanoid() }
  //   // console.log(contactsObj); //!

  //   // this.state.contacts.push({ name: this.state.name, id: nanoid() });
  //   contacts.push({ id: nanoid(), name: name, number: number, });

  //   // this.props.onSubmit(this.state);

  //   this.reset();
  // };

// * +++++++++++++++++++++++++++ RENDER ++++++++++++++++++++++++++++++++++
  render() {

    const { contacts, filter } = this.state;
    // const { contacts } = this.state;
    // console.log("contacts: ", contacts); //!
    //  console.log("contactInputId: ", this.contactInputId); //!


    const visibleContacts = this.getVisibleContacts();
    // console.log("visibleContacts: ", visibleContacts); //!

    const totalContacts = contacts.length;



// * +++++++++++++++++++++++++++ MARKUP ++++++++++++++++++++++++++++++++++
    return (
      <Container>

        <h1>Phonebook</h1>

        <ContactForm
          // contacts={contacts}
          onSubmit={this.formSubmitHandler}
        />

        {/* <form
          className="Form"
          onSubmit={this.handleSubmit}>

          <label htmlFor={this.contactInputId}>
            Name
            <br />
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange={this.handleChange}
              id={this.contactInputId}
            />
          </label>
          <br />

          <label htmlFor={this.contactInputId}>
            Number
            <br />
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={number}
              onChange={this.handleChange}
              id={this.contactInputId}
            />
          </label>
          <br />

          <button type="submit">
            Add contact
          </button>
        </form> */}

        <h2>Contacts</h2>
        <p>Total: {totalContacts}</p>

        <Filter
          value={filter}
          onChange={this.changeFilter}
        />
          
          {/* <label>
            Find contacts by name
            <br />
          <input
            type="text"
            value={filter}
            onChange={this.changeFilter} />
          </label> */}
        
        <ContactList
          visibleContacts={visibleContacts}
          onDeleteTodo={this.deleteTodo}
        />
        
          {/* <ul>
            {visibleContacts.map(({ id, name, number }) => (
              <li key={id}>
                <p>{name}: {number}</p>
              </li>
            ))}
          </ul> */}

      </Container>
    );
  }
}

// export default App;



//! old --------------------------------------------
// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };