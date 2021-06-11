import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import style from './ContactForm.module.css';
import { handleAxios } from 'managerToken/token';
import { asyncOperationGetContacts } from '../../redux/contacts/operations';
import { actionAddContact } from 'redux/contacts/actions';
import { postAddNewContact } from 'data-api/api-contacts';
import { getToken } from 'redux/authorization/selectors';
import { getContactMemo } from 'redux/contacts/selectors';

const phoneRegExp = '^[0-9]+$';

const validationSchema = yup.object({
  name: yup
    .string('Enter your name')
    .required('Name is required')
    .min(3, 'Minimal length 3')
    .max(14, 'Maximal length 14'),
  number: yup
    .string('Enter your number')
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('Number is required')
    .min(10, 'Number should has 10 characters')
    .max(10, 'Number should has 10 characters'),
});

function ContactForm() {
  const contacts = useSelector(getContactMemo);
  const token = useSelector(getToken);

  const dispatch = useDispatch();
  const onAdd = async contact => {
    await postAddNewContact(contact);
    dispatch(actionAddContact(contact));
  };

  useEffect(() => {
    if (token !== null || token !== '') {
      handleAxios.setToken(token);
      dispatch(asyncOperationGetContacts());
    }
  }, [dispatch, token]);

  const handleCheckUniqueContact = (name, number) => {
    const isExistName = contacts.some(contact => contact.name === name);
    const isExistPhone = contacts.some(contact => contact.number === number);
    isExistName &&
      toast.warn('⚠️ You have contact with same name!', {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    isExistPhone &&
      toast.error('🚀 Number has been using!', {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    return !isExistPhone;
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
    },
    validationSchema: validationSchema,
    onSubmit: ({ name, number }) => {
      const isExistContact = handleCheckUniqueContact(name, number);
      const newContact = { name, number };
      if (!isExistContact) return;
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
        Create
      </Button>
    </form>
  );
}

export default ContactForm;
