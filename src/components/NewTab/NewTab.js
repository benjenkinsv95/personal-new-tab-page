import React, { useState, useEffect } from 'react'
// import Tab from 'react-bootstrap/Tab'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
// import Nav from 'react-bootstrap/Nav'
import PersonalTab from '../PersonalTab/PersonalTab'
import WorkTab from '../WorkTab/WorkTab'
const moment = require('moment')

const isDuringWorktime = (time) => {
  const morningTime = moment('09:00:00', 'hh:mm:ss')
  const eveningTime = moment('05:00:00 PM', 'hh:mm:ss a')
  const isWeekday = time.day() !== 0 && time.day !== 6 // sunday 0, saturday 6
  return isWeekday && time.isBetween(morningTime, eveningTime)
}

const Home = () => {
  const [time, setTime] = useState(moment())

  useEffect(() => {
    setInterval(() => {
      setTime(moment())
    }, 500)
  }, [])

  const tab = isDuringWorktime(time) ? <WorkTab/> : <PersonalTab/>

  return (
    <div>
      <h1 className='display-4 text-center'>{time.format('hh:mm:ss')}<small><sup>{time.format('a')}</sup></small></h1>
      <h3 className='text-center'>{time.format('MMMM Do YYYY')}</h3>
      {tab}
    </div>
  )
}

export default Home

// <Tab.Container id="left-tabs-example" defaultActiveKey="first">
//   <Row>
//     <Col sm={3}>
//       <Nav variant="pills" className="flex-column">
//         <Nav.Item>
//           <Nav.Link eventKey="first">Tab 1</Nav.Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Nav.Link eventKey="second">Tab 2</Nav.Link>
//         </Nav.Item>
//       </Nav>
//     </Col>
//     <Col sm={9}>
//       <Tab.Content>
//         <Tab.Pane eventKey="first">
//           a
//         </Tab.Pane>
//         <Tab.Pane eventKey="second">
//           b
//         </Tab.Pane>
//       </Tab.Content>
//     </Col>
//   </Row>
// </Tab.Container>
