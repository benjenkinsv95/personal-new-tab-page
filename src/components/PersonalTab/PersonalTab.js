import React from 'react'
import AppeaseTheBirdButton from '../AppeaseTheBirdButton'
import Anki from '../Anki/Anki'

const PersonalTab = () => {
  return (
    <div className='text-center'>
      <h3 className='mt-4'>Personal</h3>
      <AppeaseTheBirdButton/>
      <hr/>
      <Anki/>
    </div>
  )
}

export default PersonalTab
