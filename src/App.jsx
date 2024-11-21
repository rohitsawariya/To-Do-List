import { useState, useEffect } from 'react';
import styles from './App.module.css';
import Navbar from './Components/Navbar';
import Container from './Components/Container';
import Form from './Components/Form';
import ItemList from './Components/ItemList';
import Footer from './Components/Footer';

function App() {
 
  return (
    <>
      <Navbar />
      <Container>
        <h1 className={`${styles.h1}`}>Tasks Management App</h1>
        <hr />
        <Form />
        <ItemList />
      </Container>
      <Footer />
    </>
  );
}

export default App;
