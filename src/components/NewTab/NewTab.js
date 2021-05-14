import React, { useState, useEffect } from 'react'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import AppeaseTheBirdButton from '../AppeaseTheBirdButton'
import Anki from '../Anki/Anki'

const moment = require('moment')

// const isDuringWorktime = (time) => {
//   const morningTime = moment('09:00:00', 'hh:mm:ss')
//   const eveningTime = moment('05:00:00 PM', 'hh:mm:ss a')
//   const isWeekday = time.day() !== 0 && time.day !== 6 // sunday 0, saturday 6
//   return isWeekday && time.isBetween(morningTime, eveningTime)
// }
// {isDuringWorktime(time) &&

const Home = () => {
  const [time, setTime] = useState(moment())

  useEffect(() => {
    setInterval(() => {
      setTime(moment())
    }, 500)
  }, [])

  return (
    <div>
      <h1 className='display-4 text-center'>{time.format('hh:mm')}<small> <sup>{time.format('a')}</sup></small></h1>
      <h3 className='text-center'>{time.format('MMMM Do YYYY')}</h3>
      <section className='container'>
        <Tabs className='mb-4' defaultActiveKey="home" id="uncontrolled-tab-example">
          <Tab eventKey="home" title="Daily">
            <div className='text-center'>
              <AppeaseTheBirdButton/>
              <hr/>
              <Anki/>
            </div>
          </Tab>
          <Tab eventKey="profile" title="Profile">
            b
          </Tab>
        </Tabs>
      </section>
    </div>
  )
}

export default Home
