import { useSelector, useDispatch } from 'react-redux';
import style from './NavigationLinks.module.css';
import NavigationLink from './NavigationLink/NavigationLink';
import { asyncSignOut } from 'redux/reduxSignInAndOut/reduxSignInAndOutOperation';

const NavigationLinks = () => {
  const {
    logIn: { token, name },
  } = useSelector(state => state);
  const dispatch = useDispatch();
  const signOut = async () => {
    dispatch(await asyncSignOut());
  };
  return (
    <div className={style.navigation__wrapper}>
      {token !== '' && (
        <>
          {name && <span className={style.usr_name}>{`<<${name}>>`}</span>}
          <NavigationLink
            to={'/'}
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
