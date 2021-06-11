import { useSelector, useDispatch } from 'react-redux';

import style from './ContactTable.module.css';
import { getVisibleContactsMemo } from '../../redux/contacts/selectors';
import { actionRemoveContact } from 'redux/contacts/actions';
import { deleteContact } from 'data-api/api-contacts';

const ContactTable = () => {
  const visibleContacts = useSelector(getVisibleContactsMemo);
  const dispatch = useDispatch();
  const onRemove = async id => {
    await deleteContact(id);
    dispatch(actionRemoveContact(id));
  };

  return visibleContacts.length !== 0 ? (
    <table className={style.contact_table}>
      <tbody>
        {visibleContacts.map(({ id, name, number }, i) => {
          return (
            <tr className={style.contact_tbody_tr} key={i}>
              <td className={style.contact_name}>{name}</td>
              <td className={style.contact_number}>{number}</td>
              <td className={style.contact_update}>Update</td>
              <td className={style.contact_delete} onClick={() => onRemove(id)}>
                Delete
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  ) : null;
};

export default ContactTable;
