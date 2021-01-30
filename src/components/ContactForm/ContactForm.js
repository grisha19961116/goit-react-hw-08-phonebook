import style from './ContactForm.module.css';
import { toast } from 'react-toastify';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { handle } from 'managerToken/token';
import { asyncOperationGetContacts } from '../../redux/reduxContacts/contactsOperation';
import { actionAddContact } from 'redux/reduxContacts/contactsAction';
import { postAddNewContact } from 'data/api-contacts';
import { getContactMemo } from 'redux/reduxContacts/contact-selectors';

function ContactForm() {
  const { items } = useSelector(getContactMemo);

  const {
    logIn: { token },
  } = useSelector(state => state);

  const dispatch = useDispatch();
  const onAdd = async newContact => {
    await postAddNewContact(newContact);
    dispatch(actionAddContact(newContact));
  };

  useEffect(() => {
    if (token !== null || token !== '') {
      handle.setToken(token);
      dispatch(asyncOperationGetContacts());
    }
  }, [dispatch, token]);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleChangeForm = ({ target }) => {
    const { name, value } = target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        console.log('Sorry, we are not have ' + name + '.');
    }
  };
  const handleCheckUniqueContact = (arrayItems, nameContact) => {
    const isExistContact = !!arrayItems.find(
      contact => contact.name === nameContact,
    );
    isExistContact && alert('Contact is already exist');

    return !isExistContact;
  };

  const validateFrom = () => {
    if (!name || !phone) {
      toast('Some filed is empty');
      return false;
    }

    return handleCheckUniqueContact(items, name);
  };

  const resetForm = () => {
    setName('');
    setPhone('');
  };

  const handleFromSubmit = e => {
    e.preventDefault();
    const isValidForm = validateFrom();

    if (!isValidForm) return;
    const number = phone;
    const newContact = { name, number };
    resetForm();
    return onAdd(newContact);
  };

  return (
    <form onSubmit={handleFromSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Enter name"
        value={name}
        onChange={handleChangeForm}
      ></input>
      <input
        type="tel"
        name="phone"
        placeholder="Enter phone number"
        value={phone}
        onChange={handleChangeForm}
      ></input>
      <button type="submit">Add Contact</button>
    </form>
  );
}

export default ContactForm;
