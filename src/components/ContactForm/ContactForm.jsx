import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { nanoid } from 'nanoid';
// import shortid from 'shortid';

// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as yup from 'yup';

// import 'components/ContactForm/ContactForm.css';
// import styled from 'styled-components';
import css from 'components/ContactForm/ContactForm.module.css' //todo = старый вариант импорта стилей




// * +++++++++++++++++++++++++++ CLASS ++++++++++++++++++++++++++++++++++

export class ContactForm extends Component {

  static defaultProps = {
    initialName: '',
    initialNumber: ''
  };

  static propTypes = {
    initialName: PropTypes.string.isRequired,
    initialNumber: PropTypes.string.isRequired,

    name: PropTypes.string,
    number: PropTypes.string
  };



  state = {
    name: this.props.initialName,
    number: this.props.initialNumber
  };




  contactInputId = nanoid();
  

// * +++++++++++++++++++++++++++ МЕТОДЫ ++++++++++++++++++++++++++++++++++
  //! Ввод значений в поля инпутов
  handleChange = event => {
    // console.log(event.currentTarget); //!
    // console.log(event.currentTarget.name); //!
    // console.log(event.currentTarget.value); //!

    // this.setState({ name: event.currentTarget.value });
    // this.setState({ [event.currentTarget.name]: event.currentTarget.value });

    const { name, value } = event.currentTarget;
    
      this.setState({ [name]: value });
  };

  

  //! Очистка полей ФОРМЫ
  reset = () => {
    this.setState({ name: '', number: '' });
  };



//! NEW - Submit ФОРМЫ
  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state; 
    this.props.onSubmit(name, number);
    this.reset();
  };





  //? old - Submit ФОРМЫ
  // handleSubmit = event => {
  //   event.preventDefault();
  //   const { name, number } = this.state; 
  //   // console.log(event); //!
  //   // console.log("this.props.contacts: ", this.props.contacts); //!

  //   // console.log(this.state); //!
  //   // console.log(this.state.contacts); //!

  //   // this.state.contacts.push(this.state.name);

  //   // const contactsObj = { name: this.state.name, id: nanoid() }
  //   // console.log(contactsObj); //!

  //   //? принимаем props от ContactForm contacts={contacts} из App
  //   const contacts = this.props.contacts
  //   // this.state.contacts.push({ name: this.state.name, id: nanoid() });

  //   //? alert с предупреждением о наявности контакта
  //   // console.log("contacts[0]: ", contacts[0]); //!

  //   if (contacts.find(item => item.name.toLowerCase() === name.toLowerCase())) {
  //     // console.log("if name:", name); //!
  //       alert(`${name} is already in contacts.`);
  //       return;
  //   } else {
  //     // console.log("else name:", name); //!
  //     contacts.push({ id: nanoid(), name: name, number: number, });
  //     }
    
  //   this.props.onSubmit(this.state, this.props.contacts);

  //   // console.log("contacts[0].name: ", contacts[0].name); //!

  //   this.reset();
  // };


// * +++++++++++++++++++++++++++ RENDER ++++++++++++++++++++++++++++++++++
  render() {
    const { name, number } = this.state;
    // const { contacts } = this.props; //!
    // console.log("contacts: ", contacts); //!
    // console.log("this.props.contacts: ", this.props.contacts); //!
    



// * +++++++++++++++++++++++++++ MARKUP ++++++++++++++++++++++++++++++++++
    return (
      <form
          className={css.Form}
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

        <button
          className={css.FormBtn}
          type="submit">
            Add contact
          </button>
        </form>
      
    );
  }
}

// export default ContactForm;