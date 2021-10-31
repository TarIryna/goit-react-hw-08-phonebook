import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import Contact from './Contact';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import s from './Phonebook.module.css';

const Phonebook = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getVisibleContacts);
  const isFetching = useSelector(contactsSelectors.getLoading);
  const onDelete = id => dispatch(contactsOperations.deleteContact(id));
  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);
  return (
    <ul className={s.contactList}>
      {isFetching && (
        <div className={s.loader}>
          <Loader type="Puff" color="#00BFFF" height={50} width={50} timeout={3000} />
        </div>
      )}
      {contacts &&
        contacts
          .sort((a, b) => (a.name > b.name ? 1 : -1))
          .map(({ id, name, number }) => (
            <li className={s.name} key={id}>
              <Contact id={id} name={name} number={number} onDelete={onDelete} />
            </li>
          ))}
    </ul>
  );
};

export default Phonebook;
