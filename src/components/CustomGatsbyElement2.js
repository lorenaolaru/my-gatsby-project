import * as React from 'react'
import { Col, Card, Image } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { graphql, useStaticQuery } from 'gatsby';

const CustomGatsbyElement2 = () => {

    const data = useStaticQuery(graphql`
    query {
        allMyEvents {
            nodes {
              description
              date(formatString: "MMMM DD, YYYY")
              name
              photo
            }
          }
      }
  `);

    return (
        data.allMyEvents.nodes.map((data, index) => {
            return <Col key={'$index'} tabindex="0" md={6}>
            <Card className="mb-3">
                <Image
                    tabindex="0"
                    src={data.photo}
                    className="card-img-top"
                    alt="some image"
                    fluid
                />
                <Card.Body>
                    <Card.Title>
                        <h3>{data.name}</h3>
                    </Card.Title>
                    <Card.Text>
                        <p>{data.description}</p>
                        <h4>{data.date}</h4>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
        })
    )

}

export default CustomGatsbyElement2;

/*export const query = graphql`
query MyQuery {
    allMyEvents {
      edges {
        node {
          date(formatString: "MMMM DD, YYYY")
          description
          name
          photo
        }
      }
    }
  }
`;*/