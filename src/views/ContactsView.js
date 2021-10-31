import React from 'react';
import Phonebook from '../components/Phonebook';
import Form from '../components/Form';
import FilterInput from '../components/FilterInput';

const HomeView = () => (
  <>
    <Form />
    <FilterInput />
    <Phonebook />
  </>
);

export default HomeView;
