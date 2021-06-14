import React from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { validationSchemaRegistration } from '../../validation.js/validation';
import { asyncRegistNewUser } from 'redux/authorization/operations';
import style from './RegistrationForm.module.css';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const onRegisteration = async user => {
    dispatch(await asyncRegistNewUser(user));
  };
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: validationSchemaRegistration,
    onSubmit: filledForm => {
      onRegisteration(filledForm);
    },
  });

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
