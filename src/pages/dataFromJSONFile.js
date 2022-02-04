import * as React from 'react'
import GatsbyElement1 from "../components/GatsbyElement1"
import Layout from '../components/layout'
import { Container, Row } from 'react-bootstrap'

const DataFromJSONFile = () => {
  return (
    <Layout>
      <Container>
        <Row>
          <GatsbyElement1/>
        </Row>
      </Container>
    </Layout>
  )
}

export default DataFromJSONFile
