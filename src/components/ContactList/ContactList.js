import style from './ContactList.module.css';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { actionRemoveContact } from '../../redux/reduxActions';
import { deletePostContacts } from '../../data/api-contacts';

const ContactList = () => {
  // Добавь селекторы в файл contacts-selectors.js in my case it dose not have sens))) state => state
  const { items, filter, isLoading } = useSelector(state => state);
  const dispatch = useDispatch();
  const onRemove = async idContact => {
    await deletePostContacts(idContact);
    dispatch(actionRemoveContact(idContact));
  };

  const getVisibleContacts = (items, filterInput) => {
    return items.filter(contact =>
      contact.name.toLowerCase().includes(filterInput.toLowerCase()),
    );
  };

  if (items.length === 0) return null;

  return (
    <>
      <h2>{isLoading}</h2>
      <ul>
        {filter !== '' &&
          getVisibleContacts(items, filter).map(({ id, name, phone }) => {
            return (
              <li key={id}>
                {name} : {phone}
                <button
                  onClick={() => {
                    onRemove(id);
                  }}
                  className={style.button__delete}
                >
                  Delete
                </button>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default ContactList;
