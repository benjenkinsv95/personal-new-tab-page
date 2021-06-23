import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import AutoCheck from '../AutoCheck'

const LLPSI = () => {
  const [readLLPSI, setReadLLPSI] = useState(false)
  const [addVocab, setAddVocab] = useState(false)

  return (
    <div>
      <Form.Group controlId="anki">
        {!readLLPSI && <div><AutoCheck icon='📖' label='Chapter Read From LLPSI' setValue={setReadLLPSI}/><hr/></div>}
        {!addVocab && <AutoCheck icon='🖊' label=' Vocab Added for New Chapter' setValue={setAddVocab}/>}
      </Form.Group>
    </div>
  )
}

export default LLPSI
