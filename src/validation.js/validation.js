import { toast } from 'react-toastify';
import * as yup from 'yup';

const validationSchemaRegistration = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  name: yup
    .string('Enter your NickName')
    .max(15, 'Nickname can not  be more than 15 charts')
    .required('Nickname is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

const validationSchemaSignIn = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .max(20, 'Password should be less 20 characters')
    .required('Password is required'),
});

const phoneRegExp = '^[0-9]+$';

const validationSchemaContact = yup.object({
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

const checkInputUpdate = contact => {
  return validationSchemaContact.validate(contact).catch(function ({ errors }) {
    if (errors[0] !== '') {
      toast.error(`🚀 ${errors[0]}!`, {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return false;
    }
  });
};

const handleCheckUniqueContact = (
  contacts,
  name,
  number,
  checkName = true,
  checkPhone = true,
) => {
  const isExistName = contacts.some(contact => contact.name === name);
  const isExistPhone = contacts.some(contact => contact.number === number);
  checkName &&
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
  checkPhone &&
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

export {
  validationSchemaRegistration,
  validationSchemaSignIn,
  validationSchemaContact,
  checkInputUpdate,
  handleCheckUniqueContact,
};
