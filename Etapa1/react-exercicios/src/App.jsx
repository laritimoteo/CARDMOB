import { useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Contato from './components/Contato';
import ListaContatos from "./components/ListaContatos";

function App() {
  return (
    <div>
      <h1>Lista de Contatos</h1>
      <ListaContatos />
    </div>
  );
}
export default App;
