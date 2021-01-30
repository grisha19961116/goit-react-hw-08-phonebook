import style from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { actionRemoveContact } from 'redux/reduxContacts/contactsAction';
import { deleteContact } from 'data/api-contacts';

const ContactList = () => {
  const { items, filter, isLoading } = useSelector(state => state);
  const dispatch = useDispatch();
  const onRemove = async idContact => {
    await deleteContact(idContact);
    dispatch(actionRemoveContact(idContact));
  };

  const getVisibleContacts = (items, filterInput) => {
    return items.filter(contact =>
      contact.name.toLowerCase().includes(filterInput.toLowerCase()),
    );
  };
  const renderList = array => {
    let data = array;
    if (!data) {
      data = getVisibleContacts(items, filter);
    }
    return (
      <ul>
        {data.map(({ id, name, number }, index) => {
          return (
            <li key={index}>
              {name} : {number}
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
    );
  };

  if (items.length === 0) return null;

  return (
    <>
      <h2>{isLoading}</h2>
      {filter !== '' && renderList(false)}
      {filter === '' && renderList(items)}
    </>
  );
};

export default ContactList;
