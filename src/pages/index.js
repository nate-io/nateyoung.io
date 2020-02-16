import React from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const IndexPage = () => (
  <>
    <Container>
      <Row>
        <Col offset={2}>
          <div className="home">
            <h1>hello!</h1>
          </div>
        </Col>
      </Row>
    </Container>
  </>
)

export default IndexPage
