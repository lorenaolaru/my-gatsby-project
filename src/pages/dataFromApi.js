import * as React from 'react'
import GatsbyElement2 from "../components/gatsby_element2"
import Layout from '../components/layout'
import { Container, Row } from 'react-bootstrap'

const DataFromApi = () => {
  return (
    <Layout>
      <Container>
        <Row>
          <GatsbyElement2/>
        </Row>
      </Container>
    </Layout>
  )
}

export default DataFromApi
