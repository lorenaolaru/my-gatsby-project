import * as React from 'react'
import { Col, Card, Image } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import JSONData from "../content/My-JSON-Content.json"

const CustomGatsbyElement = () => {
    return (
            JSONData.map((data, index) => {
                return <Col tabindex="0" md={6}>
                    <Card className="mb-3">
                        <Image
                            tabindex="0"
                            key={'card_photo_${index}'}
                            src={data.photo}
                            className="card-img-top"
                            alt="some image"
                            fluid
                        />
                        <Card.Body>
                            <Card.Title>
                                <h3 key={'card_title_${index}'}>{data.name}</h3>
                            </Card.Title>
                            <Card.Text>
                                <p key={'card_descriptiion_${index}'}>{data.description} </p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

            })        
    )
}




export default CustomGatsbyElement;