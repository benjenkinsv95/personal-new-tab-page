import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import AutoCheck from '../AutoCheck'

const Anki = () => {
  const [showAnki, setShowAnki] = useState(false)

  return (
    <div className={showAnki ? 'success-overlay' : ''} style={{ order: showAnki ? 4 : 0, minWidth: '350px' }}>
      <Form.Group controlId="anki">
        <AutoCheck icon='🧐' label='Reviewed Anki' setValue={setShowAnki}/>
      </Form.Group>
      <hr/>
    </div>
  )
}

export default Anki
