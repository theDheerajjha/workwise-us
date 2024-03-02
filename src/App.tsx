import React from 'react';
import './App.scss';
import Header from './components/Header/index';
import Bannner from './components/Banner/index'
import List from './components/List/index';
import Footer from "./components/Footer/index";


function App() {
  return (
  <>
  <Header></Header>
  <Bannner></Bannner>
  <List></List>
  <Footer></Footer>
  </>
  );
}

export default App;
