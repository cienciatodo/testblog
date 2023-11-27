import { useState } from 'react'
import './App.css'
import MaluContext from './MaluContext';
import Butto from './Butto';
import Locale from './Locale';
import DataNotes from './DataNotes';
import Priva from './Priva';
import Publi from './Publi';


function App() {
 

  return (
    <>

 <h1>MY NOTES</h1>
 

    <MaluContext>

      <Locale/>

      <Butto/>

      <DataNotes/>

      <Priva/>

      <Publi/>

    </MaluContext>


     
    </>
  )
}

export default App
