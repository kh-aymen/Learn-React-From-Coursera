import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Card from './projects/project-1/Card'
import Main from './Main'
import Airbnb from './projects/project-2/Airbnb'
import Travel from './projects/project-3/Travel'




export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Main />} />
          <Route exact path='/project1' element={<Card />} />
          <Route exact path='/project2' element={<Airbnb />} />
          <Route exact path='/project3' element={<Travel />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
