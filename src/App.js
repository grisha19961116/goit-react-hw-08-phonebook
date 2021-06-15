import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

import canvasStars from './canvas/starsSky';
import ContactTable from 'components/ContactTable/ContactTable.jsx';
import ContactForm from 'components/ContactForm/ContactForm.jsx';
import RegistrationForm from 'components/Registration/RegistrationForm';
import SignInForm from 'components/SignIn/SignIn';
import NavigationLinks from 'components/NavigationLinks/NavigationLinks';
import Filter from 'components/Filter/Filter.jsx';
import Loader from 'components/Loader/Loader.jsx';
import { getToken } from 'redux/authorization/selectors';
import { getLoad } from 'redux/loading/selectors';
import style from './App.module.css';

function App() {
  const token = useSelector(getToken);
  const isLoading = useSelector(getLoad);

  useEffect(() => {
    window.addEventListener('DOMContentLoaded', canvasStars);
    return () => window.removeEventListener('DOMContentLoaded', canvasStars);
  }, []);

  return (
    <Route path={'/'}>
      <div className={style.wrapped_content_absolute}>
        <canvas id="canvas"></canvas>
        <NavigationLinks />
        <Switch>
          {token !== '' && (
            <Route exact path="/">
              <Redirect to={'/contacts'} />
            </Route>
          )}
          {token === '' && (
            <Route exact path="/contacts">
              <Redirect to={'/login'} />
            </Route>
          )}

          <Route exact path="/login">
            <SignInForm />
            {token !== '' && <Redirect to={'/contacts'} />}
          </Route>

          <Route exact path="/register">
            <RegistrationForm />
            {token !== '' && <Redirect to={'/contacts'} />}
          </Route>
          {token !== '' && (
            <Route exact path="/contacts">
              <h2 className={style.title__form}>Form Contact </h2>
              <ContactForm />
              <h2 className={style.title_list}>Contacts list</h2>
              <h3 className={style.title_list_warn}>
                * Contact updates are only available with an empty filter *
              </h3>
              <Filter />
              <ContactTable />
              {isLoading && <Loader />}
            </Route>
          )}
        </Switch>
      </div>
    </Route>
  );
}

export default App;
