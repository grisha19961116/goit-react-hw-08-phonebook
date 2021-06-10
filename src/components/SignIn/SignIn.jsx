import React from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { getEmail } from 'redux/authorization/selectors';
import { asyncSignIn } from 'redux/authorization/operations';
import style from './SignIn.module.css';

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

const SignInForm = () => {
  const dispatch = useDispatch();
  const signIn = async credentials => {
    dispatch(await asyncSignIn(credentials));
  };
  const emailLc = useSelector(getEmail);

  const formik = useFormik({
    initialValues: {
      email: emailLc !== '' ? emailLc : '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: credentials => signIn(credentials),
  });

  return (
    <form className={style.signIn_form} onSubmit={formik.handleSubmit}>
      <div className={style.signIn_input_wrapper}>
        <TextField
          className={style.signIn_input}
          id="email"
          name="email"
          label="Email..."
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          className={style.signIn_input}
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
  );
};

export default SignInForm;
