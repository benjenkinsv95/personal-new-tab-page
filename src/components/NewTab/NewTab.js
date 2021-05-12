import React, { useState, useEffect } from 'react'
import Tab from 'react-bootstrap/Tab'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
const moment = require('moment')
const Home = () => {
  const [time, setTime] = useState(moment())

  useEffect(() => {
    setInterval(() => {
      setTime(moment())
    }, 500)
  }, [])

  return (
    <div>
      <h1 className='display-4 text-center'>{time.format('hh:mm:ss')}<small><sup>{time.format('a')}</sup></small></h1>
      <h3 className='text-center'>{time.format('MMMM Do YYYY')}</h3>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">Tab 1</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Tab 2</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                a
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                b
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  )
}

export default Home
