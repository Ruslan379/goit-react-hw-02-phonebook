import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { nanoid } from 'nanoid';

import css from 'components/ContactForm/ContactForm.module.css' 




// * +++++++++++++++++++++++++++ CLASS ++++++++++++++++++++++++++++++++++

export class ContactForm extends Component {
  state = {
    name: '',
    number: ''
  };


  contactInputId = nanoid();
  

// * +++++++++++++++++++++++++++ МЕТОДЫ ++++++++++++++++++++++++++++++++++
  //! Ввод значений в поля инпутов
  handleChange = event => {
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






// * +++++++++++++++++++++++++++ RENDER ++++++++++++++++++++++++++++++++++
  render() {
    const { name, number } = this.state;

    

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

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};