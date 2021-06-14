import { useSelector, useDispatch } from 'react-redux';
import { useState, createRef } from 'react';

import style from './ContactTable.module.css';
import {
  handleCheckUniqueContact,
  checkInputUpdate,
} from '../../validation.js/validation';
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
  const dispatch = useDispatch();

  const onRemove = async idUp => {
    if (id && id !== idUp) return;
    await deleteContact(idUp);
    dispatch(actionRemoveContact(idUp));
  };

  const onOpenUpdate = async (idUp, i, isUsed) => {
    if (id && id !== idUp) return;

    const tdName = document.getElementById(i + 'td-name');
    const tdNumber = document.getElementById(i + 'td-number');
    const tdUpdateAll = document.getElementsByClassName(style.contact_update);
    const tdDeleteAll = document.getElementsByClassName(style.contact_delete);
    const checkOne = document.getElementById(i + 'first');
    const checkSecond = document.getElementById(i + 'second');

    if (checkOne && checkSecond) {
      myRef.current = { inputOne: checkOne, inputSecond: checkSecond };
    }

    const { inputOne, inputSecond } = myRef.current;
    const name = inputOne.value;
    const number = inputSecond.value;
    const contactUp = { name, number };
    const contact = { id: idUp, name, number };
    const arrayBtn = [...Array.from(tdUpdateAll), ...Array.from(tdDeleteAll)];

    if (!checkOne && !checkSecond) {
      tdName.append(inputOne);
      tdNumber.append(inputSecond);
    }

    setId(idUp);
    let check = isOpen;
    check = !check;
    setIsOpen(() => check);
    if (check) {
      arrayBtn.map(el => {
        if (el.id === i + 'td-update') {
          el.style.backgroundColor = 'rgb(247, 171, 7)';
          el.textContent = 'Done';
          return null;
        }
        el.style.pointerEvents = 'none';
      });
      inputOne.classList.remove(style.input_hidden);
      inputSecond.classList.remove(style.input_hidden);
      inputOne.classList.add(style.input_active);
      inputSecond.classList.add(style.input_active);
    }
    if (!check) {
      try {
        const isValid = await checkInputUpdate(contactUp);
        if (!isValid) return setIsOpen(() => !check);
      } catch (err) {
        console.log(err);
      }
      if (
        isUsed.name === contactUp.name &&
        isUsed.number !== contactUp.number
      ) {
        const isExistContact = handleCheckUniqueContact(
          visibleContacts,
          name,
          number,
          false,
          true,
        );
        setIsOpen(() => !check);
        if (!isExistContact) return;
      }
      if (
        isUsed.name !== contactUp.name &&
        isUsed.number === contactUp.number
      ) {
        handleCheckUniqueContact(visibleContacts, name, number, true, false);
      }
      if (
        isUsed.name !== contactUp.name &&
        isUsed.number !== contactUp.number
      ) {
        const isExistContact = handleCheckUniqueContact(
          visibleContacts,
          name,
          number,
        );
        setIsOpen(() => !check);
        if (!isExistContact) return;
      }
      arrayBtn.map(el => {
        if (el.id === i + 'td-update') {
          el.style.backgroundColor = 'rgb(12, 247, 63)';
          el.textContent = 'Update';
        }
        el.style.pointerEvents = '';
      });
      await updateContact(idUp, contactUp);
      dispatch(actionUpdateContact(contact));
      inputOne.classList.remove(style.input_active);
      inputSecond.classList.remove(style.input_active);
      inputOne.classList.add(style.input_hidden);
      inputSecond.classList.add(style.input_hidden);
      inputOne.defaultValue = '';
      inputSecond.defaultValue = '';
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
                onClick={() => onOpenUpdate(id, i, { name, number })}
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
