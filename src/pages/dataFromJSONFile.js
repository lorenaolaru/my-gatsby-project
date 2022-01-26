import * as React from 'react'
import CustomGatsbyElement1 from "../components/CustomGatsbyElement1"
import Layout from '../components/layout'
import { Container, Row } from 'react-bootstrap'

// markup
//src="../images/clifford.jpg"
const DataFromJSONFile = () => {
  return (
    <Layout>
      <Container>
        <Row>
          <CustomGatsbyElement1/>
        </Row>
      </Container>
    </Layout>
  )
}

export default DataFromJSONFile
