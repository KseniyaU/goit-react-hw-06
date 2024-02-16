import { useState, useEffect } from 'react'

import '../App/App.module.css'
import { ContactList } from '../ContactList/ContactList.jsx'
import { SearchBox } from '../SearchBox/SearchBox.jsx'
import {ContactForm} from '../ContactForm/ContactForm.jsx'
import { useSelector } from 'react-redux'
//npm install redux
//npm install react-redux
//npm install @redux-devtools/extension
//npm install @reduxjs/toolkit
//npm install @reduxjs/toolkit react-redux


function App() {

  const satate = useSelector(state => state.contacts);

  
  const contacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]
  

  const [inputValue, setInputValue] = useState('');
  const [users, setUsers] = useState(() => {
    const savedContacts = window.localStorage.getItem("saved-contacts");
    return savedContacts ? JSON.parse(savedContacts) : contacts;
  })
    

  const handleChange = even => {
    // console.log(even.target.value);
    setInputValue(even.target.value)
  }
  const visibleUsers = users.filter(user =>
    user.name.toLowerCase().includes(inputValue.toLocaleLowerCase())
  )
  console.log(visibleUsers);

  const AddUser = newUser => {
    setUsers(prevUser => {
      return (
        [...prevUser, newUser]
      )
    })
  }
 useEffect(() => {
    window.localStorage.setItem('saved-contacts', JSON.stringify(users));
  }, [users]);

  const onDeleteContact = (id) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id))
  
 }
 

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={AddUser} ></ContactForm>
      <SearchBox valueIn={inputValue} onChange={ handleChange}></SearchBox>
      <ContactList allContacts={visibleUsers} onDeleteContact={ onDeleteContact} ></ContactList>
      
    </div>
  )
    
}

export default App
