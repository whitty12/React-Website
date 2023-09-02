import { Container, Col, Row } from "reactstrap"


const AboutPage = () => {
    return (
        <section class="py-5">
            <Container class="px-4 px-lg-5 mt-5">
                <Row className="justify-content-center">
                    <Col>
                        <p>At Twin Oaks, we believe in family values. Your family is yours! Locally owned and operated for decades,
                            we aim to serve our community and provide fair, competitive housing to everyone.
                            Our family has lived in Oklahoma for close to a century and it is our mission to bring our homes to you.
                        </p>
                    </Col>
                    <Col>
                        <img class="image" src='src\app\assets\img\aboutus.jpg' alt="..." />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default AboutPage
