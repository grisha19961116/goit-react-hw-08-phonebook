import React from 'react';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import asyncRegistNewUser from 'redux/reduxRegistration/reduxRegistrationOperatiom';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import style from './RegistrationForm.module.css';
const validationSchema = yup.object({
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

const RegistrationForm = () => {
  const { registration } = useSelector(state => state);
  const dispatch = useDispatch();
  const onRegisteration = async dataFrom => {
    dispatch(await asyncRegistNewUser(dataFrom));
  };
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: filledForm => {
      onRegisteration(filledForm);
    },
  });

  if (registration) {
    toast('Registration was successful our congratulation');
  }

  return (
    <div>
      <form className={style.signIn_form} onSubmit={formik.handleSubmit}>
        <div className={style.signIn_input_wrapper}>
          <TextField
            id="name"
            name="name"
            label="Name..."
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
          <TextField
            id="email"
            name="email"
            label="Email..."
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            id="password"
            name="password"
            label="Password..."
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
        </div>
        <Button
          className={style.signIn_button}
          color="primary"
          variant="contained"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default RegistrationForm;
