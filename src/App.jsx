import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Addtodo from './components/Addtodo'
import Todo from './components/Todo'
function App() {
  return (
    <> 
      <h1>Todo-with-Reduxtoolkit</h1>
      <Addtodo />
      <Todo />
    </>
  )
}

export default App
