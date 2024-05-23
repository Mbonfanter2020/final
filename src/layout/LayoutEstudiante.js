import React from 'react'
import Aside from '../componentes/Aside'
import Header from '../componentes/Header'
import Footer from '../componentes/Footer'


const LayoutEstudiante = () => {
  return (
    <div>
     <Aside/>
     <Header/>
     <contentEstudiante/>
     <Footer/>
    </div>
  )
}

export default LayoutEstudiante
