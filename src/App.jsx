import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Header from './components/headerComponent';
import BacklogProgressTasks from './components/backlogComponents';
import CompletedTasks from './components/completedComponent';


function App() {

  return <>
    <HeaderComponent />
    <BacklogProgressTasks />
    <CompletedTasks />
  </>

}

export default App
