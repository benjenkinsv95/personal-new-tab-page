import React, { useState } from 'react'
import AutoCheck from '../AutoCheck'

const LLPSI = () => {
  const [readLLPSI, setReadLLPSI] = useState(false)
  const [addVocab, setAddVocab] = useState(false)

  return (
    <div style={{ order: readLLPSI || addVocab ? 3 : 0 }}>
      <div className={readLLPSI ? 'success-overlay' : ''} style={{ order: readLLPSI ? 3 : 0, minWidth: '350px' }}><AutoCheck icon='📖' label='Chapter Read From LLPSI' setValue={setReadLLPSI}/><hr/></div>
      <div className={addVocab ? 'success-overlay' : ''} style={{ order: addVocab ? 3 : 0, minWidth: '350px' }}> <AutoCheck icon='🖊' label=' Vocab Added for New Chapter' setValue={setAddVocab}/><hr/></div>
    </div>
  )
}

export default LLPSI
