import { useSelector, useDispatch } from 'react-redux';

import style from './NavigationLinks.module.css';
import NavigationLink from './NavigationLink/NavigationLink';
import { asyncSignOut } from 'redux/authorization/operations';
import { getToken, getName } from 'redux/authorization/selectors';

const NavigationLinks = () => {
  const token = useSelector(getToken);
  const name = useSelector(getName);
  const dispatch = useDispatch();
  const signOut = async () => {
    dispatch(await asyncSignOut(name));
  };
  return (
    <div className={style.navigation__wrapper}>
      {token !== '' && (
        <>
          {name && <span className={style.usr_name}>{`<<${name}>>`}</span>}
          <NavigationLink
            to={'/login'}
            text="SignOut"
            onClick={signOut}
            name={name}
          />
        </>
      )}
      {token === '' && <NavigationLink to={'/login'} text="LogIn" />}
      {token === '' && <NavigationLink to={'/register'} text="Register" />}
    </div>
  );
};
export default NavigationLinks;
