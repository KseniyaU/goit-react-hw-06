import '../App/App.module.css'
import { ContactList } from '../ContactList/ContactList.jsx'
import { SearchBox } from '../SearchBox/SearchBox.jsx'
import {ContactForm} from '../ContactForm/ContactForm.jsx'
import { useSelector, useDispatch } from 'react-redux'




//npm install react-redux
//npm install redux-persist
//npm install @reduxjs/toolkit
//npm install @reduxjs/toolkit react-redux


function App() {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm ></ContactForm>
      <SearchBox></SearchBox>
      <ContactList></ContactList>
      
    </div>
  )
    
}

export default App
