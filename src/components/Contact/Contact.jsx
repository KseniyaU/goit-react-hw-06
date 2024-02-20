import { IoPerson } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { deleteContact } from '../../redux/contactsSlice.js'
import { useDispatch } from 'react-redux'


import css from '../Contact/Contact.module.css'

export const Contact = ({ contact: { id, name, number } }) => {
      const dispatch = useDispatch();

    const onDeleteContact = (id) => {
    dispatch(deleteContact(id));
  }
    
    return (
        <>
            <div>
                <p><IoPerson />  { name}</p>
                <p><IoCall />  {number}</p>
            </div>
            <button onClick={() => onDeleteContact(id)} type="button" className={ css.btnDelete}>Delete</button>
        </>
    )
}