import React from 'react';
import s from './FilterInput.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { contactsSelectors } from '../../redux/contacts';
import { changeFilter } from '../../redux/contacts/contacts-actions';

const FilterInput = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(contactsSelectors.getFilter);

  return (
    <div className={s.filter}>
      <label className={s.label}>
        Фильтр по имени
        <input
          className={s.input}
          type="text"
          name="filter"
          value={filterValue}
          onChange={e => dispatch(changeFilter(e.target.value))}
        />
      </label>
    </div>
  );
};

export default FilterInput;
