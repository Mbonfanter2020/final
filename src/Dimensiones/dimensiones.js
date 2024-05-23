import React from 'react'
import Aside from '../componentes/Aside'
import Header from '../componentes/Header'
import Footer from '../componentes/Footer'
import contentDimensiones from '../Content/contentDimensiones'
const dimensiones = () => {
  return (
    <div>
    <Aside/>
     <Header/>
     <contentDimensiones/>
     <Footer/>
    </div>
  )
}

export default dimensiones
