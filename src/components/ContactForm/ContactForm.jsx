import style from './ContactForm.module.css';
import { toast } from 'react-toastify';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { handle } from 'managerToken/token';
import { asyncOperationGetContacts } from '../../redux/reduxContacts/contactsOperation';
import { actionAddContact } from 'redux/reduxContacts/contactsAction';
import { postAddNewContact } from 'data-api/api-contacts';
import { getContactMemo } from 'redux/reduxContacts/contact-selectors';
const validationSchema = yup.object({
  name: yup.string('Enter your name').required('Name is required'),
  number: yup
    .number('Enter your number')
    .min(8, 'Number should be of minimum 8 characters length')
    .required('Number is required'),
});

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

  const handleCheckUniqueContact = (arrayItems, nameContact) => {
    const isExistContact = !!arrayItems.find(
      contact => contact.name === nameContact,
    );
    isExistContact && alert('Contact name is already exist');

    return !isExistContact;
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
    },
    validationSchema: validationSchema,
    onSubmit: ({ name, number }) => {
      const isExistContact = handleCheckUniqueContact(items, name);
      const newContact = { name, number };
      if (!isExistContact) {
        return;
      }
      formik.values.name = '';
      formik.values.number = '';
      return onAdd(newContact);
    },
  });

  return (
    <form className={style.add_contact_form} onSubmit={formik.handleSubmit}>
      <div className={style.add_contact_input_wrapper}>
        <TextField
          className={style.add_contact_input}
          id="name"
          name="name"
          label="Name..."
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          className={style.add_contact_input}
          id="number"
          name="number"
          label="Number..."
          type="tel"
          value={formik.values.number}
          onChange={formik.handleChange}
          error={formik.touched.number && Boolean(formik.errors.number)}
          helperText={formik.touched.number && formik.errors.number}
        />
      </div>
      <Button
        className={style.add_contact_button}
        color="primary"
        variant="contained"
        type="submit"
      >
        Add Contact
      </Button>
    </form>
  );
}

export default ContactForm;
