import { useState, useEffect } from 'react'

import '../App/App.module.css'
import { ContactList } from '../ContactList/ContactList.jsx'
import { SearchBox } from '../SearchBox/SearchBox.jsx'
import {ContactForm} from '../ContactForm/ContactForm.jsx'
import { useSelector, useDispatch } from 'react-redux'
import { addContact, deleteContact } from '../../redux/contactsSlice.js'
import { inputValue } from '../../redux/filtersSlice.js'



//npm install react-redux
//npm install redux-persist
//npm install @reduxjs/toolkit
//npm install @reduxjs/toolkit react-redux


function App() {

  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filterValue = useSelector(state => state.filters)

    const AddUser = newUser => {
    dispatch(addContact(newUser));
  }

  const onDeleteContact = (id) => {
    dispatch(deleteContact(id));
  }

  

  // const [inputValue, setInputValue] = useState('');
  // const [users, setUsers] = useState(() => {
  //   const savedContacts = window.localStorage.getItem("saved-contacts");
  //   return savedContacts ? JSON.parse(savedContacts) : contacts;
  // })
    console.log(typeof(contacts));

  const handleChange = even => {
    // // console.log(even.target.value);
    // setInputValue(even.target.value)
    dispatch(inputValue(even.target.value))
  }

  // const targetName = 'Rosie Simpson';


  // const visibleUsers = contacts.filter(user =>
  //   user.name.toLowerCase().includes(filterValue.toLocaleLowerCase())
  // )
  // console.log(visibleUsers);

//   const AddUser = newUser => {
//     setUsers(prevUser => {
//       return (
//         [...prevUser, newUser]
//       )
//     })
//   }
//  useEffect(() => {
//     window.localStorage.setItem('saved-contacts', JSON.stringify(users));
//   }, [users]);

//   const onDeleteContact = (id) => {
//     setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id))
  
//  }
 

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={AddUser} ></ContactForm>
      <SearchBox valueIn={filterValue} onChange={ handleChange}></SearchBox>
      <ContactList allContacts={contacts} onDeleteContact={ onDeleteContact} ></ContactList>
      
    </div>
  )
    
}

export default App
