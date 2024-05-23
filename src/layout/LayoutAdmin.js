import React from 'react'
import ContentAdmin from '../Content/contentAdmin'
import Aside from '../componentes/Aside'
import Header from '../componentes/Header'
import Footer from '../componentes/Footer'
const LayoutAdmin = () => {
  return (
    <div>
     <Aside/>
     <Header/>
     <ContentAdmin/>
     <Footer/>
    </div>
  )
}

export default LayoutAdmin
