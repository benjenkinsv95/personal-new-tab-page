import React, { useState } from 'react'
import SolidButton from './SolidButton/SolidButton'
import Form from 'react-bootstrap/Form'
import AutoCheck from './AutoCheck'

const AppeaseTheBirdButton = () => {
  const [appeased, setAppeased] = useState(false)
  // if appeased, dont show
  if (appeased) {
    return false
  }

  return (
    <div>
      <Form.Group className='centered-check' controlId="appeased">
        <AutoCheck label='Appeased' setValue={setAppeased}/>
        <a href='https://www.duolingo.com/learn' target='_blank' rel="noopener noreferrer">
          <SolidButton primaryColor="rgb(119, 200, 0)">Appease The Bird</SolidButton>
        </a>
      </Form.Group>
    </div>
  )
}

export default AppeaseTheBirdButton
