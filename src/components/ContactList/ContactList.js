import style from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { actionRemoveContact } from 'redux/reduxContacts/contactsAction';
import { deleteContact } from 'data-api/api-contacts';

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
      <ul className={style.contactUl}>
        {data.map(({ id, name, number }) => {
          return (
            <li className={style.contactLi} key={id}>
              <p className={style.name}>{name}</p>
              <p className={style.phone}>{number}</p>
              <p
                onClick={() => {
                  onRemove(id);
                }}
                className={style.p__delete}
              >
                Delete
              </p>
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
