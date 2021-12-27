import React from 'react'
import NavbarComponent from './NavbarComponent'
import { Provider } from "react-redux";
import { store } from '../store/store'
import CardComponent from './CardComponent';

const App = () => {

  return (
    <>
      <Provider store={store}>
        <NavbarComponent />
        <br />
        <CardComponent></CardComponent>
      </Provider>
    </>
  )
}

export default App
