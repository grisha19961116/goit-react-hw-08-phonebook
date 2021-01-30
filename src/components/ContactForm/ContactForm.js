import style from './ContactForm.module.css';
import { toast } from 'react-toastify';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { parse, v4 as uuidv4 } from 'uuid';
import { asyncOperationGetContacts } from '../../redux/contactsOperation';
import { actionAddContact, actionSetToken } from '../../redux/reduxActions';
import { postContacts } from '../../data/api-contacts';
import { getContactMemo } from '../../redux/contact-selectors';

function ContactForm() {
  // Добавь селекторы в файл contacts-selectors.js in my case it dose not have sens))) state => state
  // add memo just for fill all tasks   сделай мемоизацию селекторов там, где необходимо.
  const { items } = useSelector(getContactMemo);
  const { token } = useSelector(state => state);
  console.log(token, `persistor`);
  const addToken = token => dispatch(actionSetToken(token));
  const dispatch = useDispatch();
  const onAdd = async newContact => {
    await postContacts(newContact);
    dispatch(actionAddContact(newContact));
  };

  useEffect(() => {
    dispatch(asyncOperationGetContacts());
  }, [dispatch]);

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

    const newContact = { id: uuidv4(), name, phone };
    resetForm();
    addToken(newContact);
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
