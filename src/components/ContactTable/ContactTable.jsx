import { useSelector, useDispatch } from 'react-redux';
import { useState, createRef } from 'react';

import style from './ContactTable.module.css';
import {
  handleCheckUniqueContact,
  checkInputUpdate,
} from '../../validation.js/validation';
import {
  getVisibleContactsMemo,
  getFilter,
} from '../../redux/contacts/selectors';
import {
  asyncOperationRemoveContact,
  asyncOperationUpdateContact,
} from '../../redux/contacts/operations';

const myRef = createRef();

const ContactTable = () => {
  const visibleContacts = useSelector(getVisibleContactsMemo);
  const filter = useSelector(getFilter);
  const [id, setId] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const onRemove = async idUp => {
    if (id && id !== idUp) return;
    myRef.current = null;
    setIsOpen(false);
    setId('');
    dispatch(await asyncOperationRemoveContact(idUp));
  };

  const onOpenUpdate = async (idUp, i, theContact) => {
    if (filter !== '') return;
    if (id && id !== idUp) return;

    const tdName = document.getElementById(i + 'td-name');
    const tdNumber = document.getElementById(i + 'td-number');
    const tdUpdateAll = document.getElementsByClassName(style.contact_update);
    const tdDeleteAll = document.getElementsByClassName(style.contact_delete);
    const checkInputName = document.getElementById(i + 'first');
    const checkInputNumber = document.getElementById(i + 'second');

    if (checkInputName && checkInputNumber) {
      myRef.current = {
        inputName: checkInputName,
        inputNumber: checkInputNumber,
      };
    }

    const { inputName, inputNumber } = myRef.current;
    const name = inputName.value;
    const number = inputNumber.value;
    const contact = { name, number };
    const arrayBtn = [...Array.from(tdUpdateAll), ...Array.from(tdDeleteAll)];

    if (!checkInputName && !checkInputNumber) {
      tdName.append(inputName);
      tdNumber.append(inputNumber);
    }

    setId(idUp);
    let check = isOpen;
    check = !check;
    setIsOpen(check);
    if (check) {
      arrayBtn.map(el => {
        if (el.id === i + 'td-update') {
          el.style.backgroundColor = 'rgb(247, 171, 7)';
          el.textContent = 'Done';
          return null;
        }
        el.style.pointerEvents = 'none';
      });
      inputName.classList.remove(style.input_hidden);
      inputNumber.classList.remove(style.input_hidden);
      inputName.classList.add(style.input_active);
      inputNumber.classList.add(style.input_active);
    }
    if (!check) {
      try {
        const isValid = await checkInputUpdate(contact);
        if (!isValid) return setIsOpen(check);
      } catch (err) {
        console.log(err);
      }
      const { theName, theNumber } = theContact;
      if (theName === name && theNumber !== number) {
        const isExistContact = handleCheckUniqueContact(
          visibleContacts,
          name,
          number,
          false,
          true,
        );
        setIsOpen(check);
        if (!isExistContact) return;
      }
      if (theName !== name && theNumber === number) {
        handleCheckUniqueContact(visibleContacts, name, number, true, false);
      }
      if (theName !== name && theNumber !== number) {
        const isExistContact = handleCheckUniqueContact(
          visibleContacts,
          name,
          number,
        );
        setIsOpen(check);
        if (!isExistContact) return;
      }
      arrayBtn.map(el => {
        if (el.id === i + 'td-update') {
          el.style.backgroundColor = 'rgb(12, 247, 63)';
          el.textContent = 'Update';
        }
        el.style.pointerEvents = '';
      });
      dispatch(await asyncOperationUpdateContact(idUp, contact));
      inputName.classList.remove(style.input_active);
      inputNumber.classList.remove(style.input_active);
      inputName.classList.add(style.input_hidden);
      inputNumber.classList.add(style.input_hidden);
      myRef.current = null;
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
                  defaultValue={name}
                ></input>
              </td>
              <td id={i + 'td-number'} className={style.contact_number}>
                {number}
                <input
                  id={i + 'second'}
                  className={style.input_hidden}
                  type="tel"
                  defaultValue={number}
                ></input>
              </td>
              <td
                id={i + 'td-update'}
                className={style.contact_update}
                onClick={() =>
                  onOpenUpdate(id, i, { theName: name, theNumber: number })
                }
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
