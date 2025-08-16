import { useState } from 'react';
import ContactForm from './assets/pages/ContactForm';
import Home from './assets/pages/Home';
import ContactBook from './assets/pages/ContactBook';
import EditContact from './assets/pages/EditContact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/add' element={<ContactForm />} />
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<ContactBook />} />
          <Route path='/edit/:id' element={<EditContact />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
