import React from 'react'
import SolidButton from './SolidButton/SolidButton'
import Form from 'react-bootstrap/Form'
import AutoCheck from './AutoCheck'

const AppeaseTheBirdButton = () => (
  <div>
    <Form.Group controlId="formBasicCheckbox">
      <AutoCheck label='Appeased'/>
      <a href='https://www.duolingo.com/learn'>
        <SolidButton primaryColor="rgb(119, 200, 0)">Appease The Bird</SolidButton>
      </a>
    </Form.Group>
  </div>
)

export default AppeaseTheBirdButton
