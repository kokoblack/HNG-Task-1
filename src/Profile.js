import React from 'react'
import Identification from './componets/identification/Identification'
import BtnLink from './componets/btnLink/BtnLink'
import Footer from './componets/footer/Footer'
import './profile.css'

function Profile() {
  return (
    <div className='center'>
        <Identification/>
        <BtnLink/>
        <Footer/>
    </div>
  )
}

export default Profile