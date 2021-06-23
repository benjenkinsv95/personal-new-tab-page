import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
const moment = require('moment')

// return true if we have a timestamp showing we checked the box today
const wasCheckedToday = id => {
  const timestamp = localStorage.getItem(id)

  if (!timestamp) {
    return false
  }

  const loadedTime = moment(timestamp)
  const currentTime = moment()
  return currentTime.isSame(loadedTime, 'date')
}

// A checkmark that forgets its value after a day
// id - the id to keep track of this checkbox's value
// label - the text to show in this checkbox
const AutoCheck = ({ label, id = label, setValue, icon = '' }) => {
  const [checked, setChecked] = useState(wasCheckedToday(id))
  setValue && setValue(wasCheckedToday(id))

  // toggle between checked and unchecked
  const toggleChecked = () => {
    // when unchecking
    if (checked) {
      // remove the timestamp from localStorage
      localStorage.removeItem(id)
    } else {
      // Add a timestamp with the current time to localStorage
      const timestamp = moment().toISOString()
      localStorage.setItem(id, timestamp)
    }

    // reverse state
    setChecked(!checked)
    // set external state as well
    setValue && setValue(!checked)
  }

  return (
    <Form.Check
      size='lg'
      type="checkbox"
      label={<span>{icon}&nbsp;&nbsp;{label}</span>}
      style={{ display: 'inline', marginRight: '0.5rem' }}
      checked={checked}
      onChange={toggleChecked}
    />
  )
}

export default AutoCheck
