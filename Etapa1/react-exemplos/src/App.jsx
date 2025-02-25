import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter';



function App() {
  const [count, setCount] = useState(0)



       const updateCount = () => {
        return count + 1;

      }
      const updateCount1 = () => (count) => count + 1;

      const dados = {
        "nome": "fulano",
        "atualiza" : (novo_nome) => `Nome nome é ${novo_nome}`,
        "endereco": {
          "rua": "xyz",
          "numero": "111",
          
        }  
      
       }; // é um objeto JS
      dados.atualiza("gerson")
      dados.endereco.complementos[1]; 

      return (
    <>
       <Counter title="Contando..."/>
        <Counter inital="100"/> 
      
    </>
  )

}
export default App
