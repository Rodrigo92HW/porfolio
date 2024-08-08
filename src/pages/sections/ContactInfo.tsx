import { Col, Container, Image, Row } from "react-bootstrap";
import githubIcon from '../../assets/images/github.png';
import linkedinIcon from '../../assets/images/linkedin.png';
import gmailhubIcon from '../../assets/images/gmail.png';
import argentinaBanner from '../../assets/images/argentina.png'
import Language from "../../languages/Language";
import { observer } from "mobx-react-lite";

export default observer(function ContactInfo() {

    const language = Language.getInstance();

    return (
        <Container className="contactInfo" style={{ margin: '1% auto' }}>
            <Row>
                <Col>
                    <b>
                        {language.mappedExtra.contact[0]}
                        <br />
                        {language.mappedExtra.contact[1]}
                        <br />
                        {language.mappedExtra.contact[2]}
                    </b>
                </Col>
                <Col className="phone">
                    <Row>
                        <Col className="d-flex align-items-center">
                            <Image src={argentinaBanner} style={{ width: '70px', height: '50px' }} />
                            <p className="ml-1">(+54) 3442-644915</p>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <a href="https://www.linkedin.com/in/rodrigo-harispe/" target="_blank">
                        <Image src={linkedinIcon} style={{ width: '50px', height: '50px', marginLeft: '10%' }} />
                    </a>
                    <a href="https://github.com/Rodrigo92HW" target="_blank">
                        <Image src={githubIcon} style={{ width: '50px', height: '50px', marginLeft: '10%' }} />
                    </a>
                    <a href="" target="_blank">
                        <Image src={gmailhubIcon} style={{ width: '50px', height: '50px', marginLeft: '10%' }} />
                    </a>
                </Col>
            </Row>
        </Container>
    )
})
