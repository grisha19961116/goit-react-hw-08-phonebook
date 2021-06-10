import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Field from '@material-ui/core/TextField';

import style from './Filter.module.css';
import { actionSetFilter } from 'redux/filter/actions';
const validationSchema = yup.object({
  name: yup.string('Enter your name').required('Name is required'),
});

const Filter = () => {
  const dispatch = useDispatch();
  const handleFilterChange = valueInput =>
    dispatch(actionSetFilter(valueInput));
  const formik = useFormik({
    initialValues: {
      name: '',
    },
    validationSchema: validationSchema,
    onChange: value => {},
  });

  return (
    <form
      className={style.filter_form}
      onChangeCapture={({ target: { value } }) => handleFilterChange(value)}
    >
      <Field
        fullWidth
        id="name"
        name="name"
        value={formik.values.name}
        onChangeCapture={formik.handleChange}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
      />
    </form>
  );
};
export default Filter;
