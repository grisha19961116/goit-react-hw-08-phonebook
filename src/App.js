import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import ContactList from 'components/ContactList/ContactList.js';
import ContactForm from 'components/ContactForm/ContactForm.js';
import RegistrationForm from 'components/Registration/RegistrationForm';
import SignInForm from 'components/SignIn/SignIn';
import NavigationLinks from 'components/NavigationLinks/NavigationLinks';
import Filter from 'components/Filter/Filter.js';
import { useSelector } from 'react-redux';
import style from './App.module.css';

function App() {
  const {
    logIn: { token },
    registration,
  } = useSelector(state => state);
  return (
    <BrowserRouter>
      <Route path={'/'}>
        <NavigationLinks />
        <Switch>
          <Route exact path="/login">
            <SignInForm />
            {token !== '' && <Redirect to={'/contacts'} />}
          </Route>
          <Route exact path="/register">
            <RegistrationForm />
            {registration && <Redirect to={'/login'} />}
          </Route>
          {token !== '' && (
            <Route path="/contacts">
              <h2>From Contact </h2>
              <ContactForm />
              <h2>Contacts list</h2>
              <Filter />
              <ContactList />
            </Route>
          )}
        </Switch>
      </Route>
      <ToastContainer></ToastContainer>
    </BrowserRouter>
  );
}

export default App;
