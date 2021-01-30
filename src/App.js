import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import ContactList from 'components/ContactList/ContactList.js';
import ContactForm from 'components/ContactForm/ContactForm.js';
import Filter from 'components/Filter/Filter.js';
import style from './App.module.css';

function App() {
  return (
    <>
      <h2>From Contact</h2>
      <ContactForm />
      <h2>Contacts list</h2>
      <Filter />
      <ContactList />
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
