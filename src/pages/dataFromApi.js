import * as React from 'react'
import CustomGatsbyElement2 from "../components/CustomGatsbyElement2"
import Layout from '../components/layout'
import { Container, Row } from 'react-bootstrap'

// markup
//src="../images/clifford.jpg"
const DataFromApi = () => {
  return (
    <Layout>
      <Container>
        <Row>
          <CustomGatsbyElement2/>
        </Row>
      </Container>
    </Layout>
  )
}

export default DataFromApi
