import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import "./Home.scss"

const Home = () => (
  <div className='Home'>
    <Container>
      <Row>
        <Col lg={10} className='Home__Content'>
          <h3>
            hi, i'm <span className='accented'>nate</span>
          </h3>
          <h1>
            a <span className='accented'>full stack developer</span> focused on
            delivering <span className='accented'>business value</span> through
            <span className='accented'> code</span>
          </h1>
          <h2></h2>
        </Col>
      </Row>
    </Container>
  </div>
)
export default Home
