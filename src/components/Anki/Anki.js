import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import AutoCheck from '../AutoCheck'

const Anki = () => {
  const [showAnki, setShowAnki] = useState(false)
  // if showAnki, dont show
  if (showAnki) {
    return false
  }

  return (
    <div>
      <Form.Group controlId="anki">
        <AutoCheck icon='🧐' label='Reviewed Anki' setValue={setShowAnki}/>
      </Form.Group>
      <hr/>
    </div>
  )
}

export default Anki
