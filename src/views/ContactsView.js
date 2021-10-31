import React from 'react';
import Phonebook from '../components/Phonebook';
import NewContact from '../components/NewContact';
import FilterInput from '../components/FilterInput';

const HomeView = () => (
  <>
    <NewContact />
    <FilterInput />
    <Phonebook />
  </>
);

export default HomeView;
