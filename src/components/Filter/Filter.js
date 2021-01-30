import style from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { actionSetFilter } from '../../redux/reduxActions';

const Filter = () => {
  const { filter } = useSelector(state => state);
  const dispatch = useDispatch();
  const handleFilterChange = valueInput =>
    dispatch(actionSetFilter(valueInput));
  return (
    <input
      className={style.input__filter}
      type="text"
      name="filter"
      value={filter}
      onChange={({ target }) => handleFilterChange(target.value)}
      placeholder="Enter name for Search"
    />
  );
};
export default Filter;
