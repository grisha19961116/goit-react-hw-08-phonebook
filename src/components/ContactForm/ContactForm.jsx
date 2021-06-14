import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import style from './ContactForm.module.css';
import {
  handleCheckUniqueContact,
  validationSchemaContact,
} from '../../validation.js/validation';
import { handleAxios } from 'managerToken/token';
import { asyncOperationGetContacts } from '../../redux/contacts/operations';
import { actionAddContact } from 'redux/contacts/actions';
import { postAddNewContact } from 'data-api/api-contacts';
import { getToken } from 'redux/authorization/selectors';
import { getContactMemo } from 'redux/contacts/selectors';

function ContactForm() {
  const contacts = useSelector(getContactMemo);
  const token = useSelector(getToken);

  const dispatch = useDispatch();
  const onAddContact = async contact => {
    const data = await postAddNewContact(contact);
    dispatch(actionAddContact(data));
  };

  useEffect(() => {
    if (token !== null || token !== '') {
      handleAxios.setToken(token);
      dispatch(asyncOperationGetContacts());
    }
  }, [dispatch, token]);

  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
    },
    validationSchema: validationSchemaContact,
    onSubmit: ({ name, number }) => {
      const isExistContact = handleCheckUniqueContact(contacts, name, number);
      const contact = { name, number };
      if (!isExistContact) return;
      formik.values.name = '';
      formik.values.number = '';
      return onAddContact(contact);
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
        Create
      </Button>
    </form>
  );
}

export default ContactForm;
