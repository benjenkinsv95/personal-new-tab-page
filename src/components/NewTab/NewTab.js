import React, { useState, useEffect } from 'react'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Vocab from '../Vocab/Vocab'
import AppeaseTheBirdButton from '../AppeaseTheBirdButton'
import Anki from '../Anki/Anki'
import LLPSI from '../LLPSI/LLPSI'

const moment = require('moment')

const isDuringWorktime = (time) => {
  const morningTime = moment('09:00:00', 'hh:mm:ss')
  const eveningTime = moment('05:00:00 PM', 'hh:mm:ss a')
  const isWeekday = time.day() !== 0 && time.day !== 6 // sunday 0, saturday 6
  return isWeekday && time.isBetween(morningTime, eveningTime)
}
// {isDuringWorktime(time) &&

const NewTab = () => {
  const [time, setTime] = useState(moment())
  /* setShowPersonal */
  const [showPersonal] = useState(!isDuringWorktime(time))

  useEffect(() => {
    setInterval(() => {
      setTime(moment())
    }, 500)
  }, [])

  const profileTab = <Tab eventKey='profile' title='Profile'></Tab>

  return (
    <div>
      {/* <h1 className='display-4 text-center' onClick={() => setShowPersonal(!showPersonal)}>
        {time.format('hh:mm')}<small> <sup>{time.format('a')}</sup></small>
      </h1>
      <h3 className='text-center'>{time.format('MMMM Do YYYY')}</h3> */}
      <Vocab />
      <section className='container' style={{ maxWidth: '500px' }}>
        <Tabs
          className='mb-4'
          defaultActiveKey='home'
          id='uncontrolled-tab-example'>
          <Tab eventKey='home' title='Daily'>
            <div
              className='d-flex flex-column'
              style={{ justifyContent: 'space-between', margin: '0 auto' }}>
              <AppeaseTheBirdButton />
              <Anki />
              <LLPSI />
            </div>
          </Tab>
          {(showPersonal || !isDuringWorktime(time)) && profileTab}
        </Tabs>
      </section>
    </div>
  )
}

export default NewTab
