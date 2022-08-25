import React, { Component } from 'react';

import { nanoid } from 'nanoid';
// import shortid from 'shortid';

import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as yup from 'yup';

import 'components/ContactForm/ContactForm.css';
import styled from 'styled-components';



// * +++++++++++++++++++++++++++ CLASS ++++++++++++++++++++++++++++++++++

//! FORMIK
// export class ContactForm extends Component {
//   state = {
//     name: '',
//     number: ''
//   };

export const ContactForm = () => {

  const contactInputId = nanoid();
  


//!  +++++++++++++++++++++++++++ FORMIK ++++++++++++++++++++++++++++++++++
  const initialValues = {
    name: '',
    number: ''
  };

  const Input = styled(Field)`
  // color: #2a2a2a;
  color: red;
`;

  
  const handleSubmitFormik = (values, { resetForm }) => {
    console.log(values); //!
    resetForm();
  };  
  
//!  _______________________________ FORMIK _______________________________



  
  
// * +++++++++++++++++++++++++++ МЕТОДЫ ++++++++++++++++++++++++++++++++++
//! FORMIK
  // handleChange = event => {
  //   // console.log(event.currentTarget); //!
  //   // console.log(event.currentTarget.name); //!
  //   // console.log(event.currentTarget.value); //!

  //   // this.setState({ name: event.currentTarget.value });
  //   // this.setState({ [event.currentTarget.name]: event.currentTarget.value });

  //   const { name, value } = event.currentTarget;
    
  //     this.setState({ [name]: value });
  // };


//! FORMIK
  // reset = () => {
  //   this.setState({ name: '', number: '' });
  // };


//! FORMIK
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

  //   //! принимаем props от ContactForm contacts={contacts} из App
  //   const contacts = this.props.contacts
  //   // this.state.contacts.push({ name: this.state.name, id: nanoid() });

  //   //! alert с предупреждением о наявности контакта
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
  // render() {//! FORMIK
    // const { name, number } = this.state; //! FORMIK
    // const { contacts } = this.props; //!
    // console.log("contacts: ", contacts); //!
    // console.log("this.props.contacts: ", this.props.contacts); //!
    



// * +++++++++++++++++++++++++++ MARKUP ++++++++++++++++++++++++++++++++++
    return (
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmitFormik}
      >
        <Form
          className="Form"
          // onSubmit={this.handleSubmit} //! FORMIK
        >

          {/* <label htmlFor={this.contactInputId}> //! FORMIK */}
          <label>
            Name
            <br />
            <Input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              // value={name} //! FORMIK
              // onChange={this.handleChange} //! FORMIK
              // id={this.contactInputId} //! FORMIK
            />
          </label>
          <br />

          {/* <label htmlFor={this.contactInputId}> //! FORMIK */}
          <label>
            Number
            <br />
            <Input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              // value={number} //! FORMIK
              // onChange={this.handleChange} //! FORMIK
              // id={this.contactInputId} //! FORMIK
            />
          </label>
          <br />

          <button
            className="Form__btn"
            type="submit">
              Add contact
          </button>
        </Form>
      </Formik>
    );
  }
// }

// export default ContactForm;
