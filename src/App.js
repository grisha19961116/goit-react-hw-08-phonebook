import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import ContactList from 'components/ContactList/ContactList.js';
import ContactForm from 'components/ContactForm/ContactForm.jsx';
import RegistrationForm from 'components/Registration/RegistrationForm';
import SignInForm from 'components/SignIn/SignIn';
import NavigationLinks from 'components/NavigationLinks/NavigationLinks';
import Filter from 'components/Filter/Filter.jsx';
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
              <h2 className={style.title__form}>From Contact </h2>
              <ContactForm />
              <h2 className={style.title_list}>Contacts list</h2>
              <Filter />
              <ContactList />
            </Route>
          )}
        </Switch>
      </Route>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </BrowserRouter>
  );
}

export default App;
