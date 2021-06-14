import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import Field from '@material-ui/core/TextField';

import style from './Filter.module.css';
import { actionSetFilter } from 'redux/filter/actions';

const Filter = () => {
  const dispatch = useDispatch();
  const handleFilterChange = value => dispatch(actionSetFilter(value));
  const formik = useFormik({
    initialValues: {
      name: '',
    },
    onChange: () => {},
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
