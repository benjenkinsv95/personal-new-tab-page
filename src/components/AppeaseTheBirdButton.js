import React, { useState } from 'react'
import SolidButton from './SolidButton/SolidButton'
import Form from 'react-bootstrap/Form'
import AutoCheck from './AutoCheck'

const AppeaseTheBirdButton = () => {
  const [appeased, setAppeased] = useState(false)

  return (
    <div className={appeased ? 'success-overlay' : ''} style={{ order: appeased ? 4 : 0, minWidth: '350px' }}>
      <Form.Group className='centered-check' controlId="appeased">
        <AutoCheck icon='🦉' label='Appeased' setValue={setAppeased}/>
        <a href='https://www.duolingo.com/learn' target='_blank' rel="noopener noreferrer">
          <SolidButton primaryColor="rgb(119, 200, 0)">Appease The Owl</SolidButton>
        </a>
      </Form.Group>
      <hr/>
    </div>
  )
}

export default AppeaseTheBirdButton
