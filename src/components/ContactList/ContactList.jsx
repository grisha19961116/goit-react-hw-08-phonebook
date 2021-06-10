import { useSelector, useDispatch } from 'react-redux';

import style from './ContactList.module.css';
import { getVisibleContactsMemo } from '../../redux/contacts/selectors';
import { actionRemoveContact } from 'redux/contacts/actions';
import { deleteContact } from 'data-api/api-contacts';

const ContactList = () => {
  const visibleContacts = useSelector(getVisibleContactsMemo);
  const dispatch = useDispatch();
  const onRemove = async id => {
    await deleteContact(id);
    dispatch(actionRemoveContact(id));
  };

  return visibleContacts.length !== 0 ? (
    <table className={style.contact_table}>
      <thead className={style.contact_thead}>
        <tr className={style.contact_thead_tr}>
          <th className={style.contact_thead_tr_th}>Contact name</th>
          <th className={style.contact_thead_tr_th}>Phone number</th>
        </tr>
      </thead>
      <tbody className={style.contact_tbody}>
        {visibleContacts.map(({ id, name, number }) => {
          return (
            <tr className={style.contact_tbody_tr} key={id}>
              <td className={style.contact_tbody_tr_td}>{name}</td>
              <td className={style.contact_tbody_tr_td}>{number}</td>
              <td
                className={style.contact_tbody_tr_td}
                onClick={() => onRemove(id)}
              >
                delete
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  ) : null;
};

export default ContactList;
