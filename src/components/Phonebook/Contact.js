import React from 'react';
import PropTypes from 'prop-types';
import s from './Phonebook.module.css';
// import Loader from 'react-loader-spinner';

export default function Contact({ name, number, id, onDelete }) {
  return (
    <>
      {name}: <span className={s.number}> {number} </span>
      <button className={s.button} onClick={() => onDelete(id)}>
        {/* {isDeleting && <Loader type="Puff" color="#00BFFF" height={12} width={12} />} */}
        Delete
      </button>
    </>
  );
}

Contact.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
  onDelete: PropTypes.func,
};
