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
  const contacts = useSelector(state => state.contacts.abs);
  const filterValue = useSelector(state => state.filters)

    const AddUser = newUser => {
    dispatch(addContact(newUser));
  }

  const onDeleteContact = (id) => {
    dispatch(deleteContact(id));
  }

  

    // console.log(contacts);

  const handleChange = even => { 
    dispatch(inputValue(even.target.value))
  }



  const visibleUsers = contacts.filter(user =>
    user.name.toLowerCase().includes(filterValue.toLocaleLowerCase())
  )

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={AddUser} ></ContactForm>
      <SearchBox valueIn={filterValue} onChange={ handleChange}></SearchBox>
      <ContactList allContacts={visibleUsers} onDeleteContact={ onDeleteContact} ></ContactList>
      
    </div>
  )
    
}

export default App
