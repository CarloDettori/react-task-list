import { useState } from 'react'
import Header from './components/headerComponent';
import BacklogProgressTasks from './components/backlogComponents';
import CompletedTasks from './components/completedComponent';
import './App.css'


function App() {

  return <>
    <Header />
    <BacklogProgressTasks />
    <CompletedTasks />
  </>

}

export default App
