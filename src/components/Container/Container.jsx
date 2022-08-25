import React from 'react';
import PropTypes from 'prop-types';
// import './Container.css';
// import 'components/Container/Container.css';

import css from 'components/Container/Container.module.css' //todo = старый вариант импорта стилей


export const Container = ({ children }) =>
    <div className={css.Container}>
        {children}
    </div>;


Container.propTypes = {
    children: PropTypes.node.isRequired,
};



// export default Container;
