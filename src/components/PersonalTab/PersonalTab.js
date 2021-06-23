import React from 'react'
import AppeaseTheBirdButton from '../AppeaseTheBirdButton'
import Anki from '../Anki/Anki'
import LLPSI from '../LLPSI/LLPSI'

const PersonalTab = () => {
  return (
    <div className='text-center'>
      <h3 className='mt-4'>Personal</h3>
      <AppeaseTheBirdButton/>
      <Anki/>
      <LLPSI/>
    </div>
  )
}

export default PersonalTab
