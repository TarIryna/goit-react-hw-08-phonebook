import { Button, Modal } from 'react-bootstrap';
import { useState } from 'react';
import Form from '../Form';
import s from './NewContact.module.css';

const NewContact = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button className={s.button} variant="primary" onClick={handleShow}>
        Добавить новый контакт
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Добавить новый контакт</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form />
        </Modal.Body>
      </Modal>
    </>
  );
};
export default NewContact;
