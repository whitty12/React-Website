import { Col, Row, Container } from 'reactstrap';
import HouseCard from './HouseCard';
import House from './House';
import { selectAllHouses } from './houseSlice';
import { useSelector } from 'react-redux';

const HouseList = () => {
    //const houses = selectAllHouses();

    const houses = useSelector(selectAllHouses);
    console.log('houses:', houses);

    return (
        <div class="py-5">
            <Container className="px-4 px-lg-5 mt-5">
                <Row className="gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    {houses.map((house) => {
                        return (
                            <Col className='mb-5'>
                                <HouseCard house={house} />
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </div>
    );
};

export default HouseList;