import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Pager from './components/Pager'
import SectionName from './components/SectionName'
import ItemList from './components/ItemList'


function App() {


  return (
    <>
    <div className='min-h-screen flex flex-col mt-10 ml-5 mr-12'>
    <Header />
    <Pager />
    <SectionName />
    <ItemList />
    <Footer />
      </div>
    </>
  )
}

export default App
