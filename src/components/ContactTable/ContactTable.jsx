import { useSelector, useDispatch } from 'react-redux';
import { useState, createRef } from 'react';

import style from './ContactTable.module.css';
import { getVisibleContactsMemo } from '../../redux/contacts/selectors';
import {
  actionRemoveContact,
  actionUpdateContact,
} from 'redux/contacts/actions';
import { deleteContact, updateContact } from 'data-api/api-contacts';

const myRef = createRef();

const ContactTable = () => {
  const visibleContacts = useSelector(getVisibleContactsMemo);
  const [id, setId] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [refInput, setRefInput] = useState(false);
  const dispatch = useDispatch();

  const onRemove = async idUp => {
    if (id && id !== idUp) return;
    await deleteContact(idUp);
    dispatch(actionRemoveContact(idUp));
  };

  const onOpenUpdate = async (idUp, i) => {
    if (id && id !== idUp) return;
    if (!refInput) {
      const inputOne = document.getElementById(i + 'first');
      const inputSecond = document.getElementById(i + 'second');
      myRef.current = { inputOne, inputSecond };
      setRefInput(true);
    }
    const ref = myRef.current;

    const tdUpdate = document.getElementById(i + 'td-update');
    const tdName = document.getElementById(i + 'td-name');
    const tdNumber = document.getElementById(i + 'td-number');
    const tdDelete = document.getElementById(i + 'td-delete');
    const checkOne = document.getElementById(i + 'first');
    const checkSecond = document.getElementById(i + 'second');
    if (!checkOne && !checkSecond) {
      tdName.append(ref.inputOne);
      tdNumber.append(ref.inputSecond);
    }
    if (checkOne && checkSecond) {
      myRef.current = { inputOne: checkOne, inputSecond: checkSecond };
    }
    let { inputOne, inputSecond } = myRef.current;
    const name = inputOne.value;
    const number = inputSecond.value;

    setId(idUp);
    let check = isOpen;
    check = !check;
    setIsOpen(() => check);
    // inputOne.defaultValue = name
    // inputSecond.defaultValue = number
    if (check) {
      inputOne.classList.remove(style.input_hidden);
      inputSecond.classList.remove(style.input_hidden);
      tdUpdate.classList.remove(style.contact_update);
      tdDelete.classList.add(style.delete_no_cursor);
      inputOne.classList.add(style.input_active);
      inputSecond.classList.add(style.input_active);
      tdUpdate.classList.add(style.contact_update_active);
      tdUpdate.textContent = 'Done';
    }
    if (!check) {
      const contactUp = { name, number };
      await updateContact(idUp, contactUp);
      const contact = { id: idUp, name, number };
      dispatch(actionUpdateContact(contact));
      tdName.textContent = name;
      tdNumber.textContent = number;
      inputOne.classList.remove(style.input_active);
      inputSecond.classList.remove(style.input_active);
      tdDelete.classList.remove(style.delete_no_cursor);
      tdUpdate.classList.remove(style.contact_update_active);
      inputOne.classList.add(style.input_hidden);
      inputSecond.classList.add(style.input_hidden);
      tdUpdate.classList.add(style.contact_update);
      tdUpdate.textContent = 'Update';
      setId(null);
    }
  };

  return visibleContacts.length !== 0 ? (
    <table className={style.contact_table}>
      <tbody>
        {visibleContacts.map(({ id, name, number }, i) => {
          return (
            <tr className={style.contact_tbody_tr} key={i}>
              <td id={i + 'td-name'} className={style.contact_name}>
                {name}
                <input
                  id={i + 'first'}
                  className={style.input_hidden}
                  type="text"
                  defaultValue=""
                ></input>
              </td>
              <td id={i + 'td-number'} className={style.contact_number}>
                {number}
                <input
                  id={i + 'second'}
                  className={style.input_hidden}
                  type="tel"
                  defaultValue=""
                ></input>
              </td>
              <td
                id={i + 'td-update'}
                className={style.contact_update}
                onClick={() => onOpenUpdate(id, i)}
              >
                Update
              </td>
              <td
                id={i + 'td-delete'}
                className={style.contact_delete}
                onClick={() => onRemove(id)}
              >
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
