// import logo from './logo.svg';
import { useState } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Counter from './components/Counter';
import './App.css';
// const [nombre, setNombre ]
function App() {
  const [counter, setCounter] = useState(0);

  const increment = ()=>{
    setCounter(counter + 1);
  }

  const decrase = ()=>{
    setCounter(counter - 1);
  }


  return (
    <div className="App">
      <Header />
      <Counter counter={counter} increment={increment} decrase={decrase}/>
      <Footer />
    </div>
  );
}

export default App;
