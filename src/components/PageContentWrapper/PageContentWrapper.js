import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import "./PageContentWrapper.scss"

const PageContentWrapper = props => {
  const { children, wide, ...otherProps } = props

  return (
    <div className='PageContentWrapper' {...otherProps}>
      <Container >
        <Row>
          <Col lg={wide ? 12 : 10} className='PageContentWrapper__Content'>
            {children}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default PageContentWrapper
