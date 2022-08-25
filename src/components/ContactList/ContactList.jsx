import React from 'react';
import PropTypes from 'prop-types';

// import classNames from 'classnames';

// import 'components/ContactList/ContactList.css';
import css from 'components/ContactList/ContactList.module.css' //todo = старый вариант импорта стилей




export const ContactList = ({ visibleContacts, onDeleteTodo }) => (
  <ul className={css.ContactList}>
    {visibleContacts.map(({ id, name, number }) => (
      <li
        key={id}
        className={css.ContactListItem}
      >
        <p className={css.ContactListText}>{name}: <span className={css.ContactListNumber}>{number}</span></p>
        <button
          type="button"
          className={css.ContactListBtn}
          onClick={() => onDeleteTodo(id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);


ContactList.propTypes = {
  visibleContacts: PropTypes.array.isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
};



// export default Filter;
