import { Col, Container, Image, Row } from "react-bootstrap";
import profile from '../../assets/images/profile.png'
import Language from "../../languages/Language";
import { observer } from "mobx-react-lite";

export default observer(function Banner() {

    const language = Language.getInstance();

    return (
        <Container className="banner" style={{ marginTop: '1%' }}>
            <Row>
                <Col className="image" sm={4} md={4}>
                    <Image
                        roundedCircle
                        fluid
                        src={profile}
                    />
                </Col>
                <Col className="data" sm={8} md={8}>
                    <Row className="name">
                        {language.mappedExtra.name}
                    </Row>
                    <Row className="introduction">
                        {language.mappedExtra.presentation}
                    </Row>
                </Col>
            </Row>
        </Container>
    )
})
