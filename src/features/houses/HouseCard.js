import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Card, CardText, CardBody, CardTitle, CardFooter, Button, Row, Col } from 'reactstrap';


const HouseCard = ({ house }) => {
    const { image, name, available, beds, baths} = house;

    return (
        <>
        <Card>
            <img class="card-img-top" src={image} alt={name} />
            <CardBody className="card-body p-4">
                <CardTitle><h5>{name}</h5></CardTitle>
                <Row>
                    <Col>
                        <FontAwesomeIcon icon={icon({name: 'bed'})} />
                        <CardText>{beds}</CardText>
                    </Col>
                    <Col>
                        <FontAwesomeIcon icon={icon({name: 'bath'})} />
                        <CardText>{baths}</CardText>
                    </Col>
                </Row>
            </CardBody>
            <CardFooter>
                <Button className='btn btn-outline-dark mt-auto'> Details </Button>
            </CardFooter>
        </Card>
        </>
    );
};
export default HouseCard
