import { Col, Image, Row } from "react-bootstrap";
import Language from "../../../languages/Language";
import { observer } from "mobx-react-lite";
import PersonalDataCard from "../cards/PersonalDataCard";
import cerficate from "../../../assets/images/66ad0e678d910a38e903a94c.png";

export default observer(function PersonalInfo() {

    const language = Language.getInstance();
    const personalInfo = language.mappedPersonalInfo;

    var currentTime = new Date();
    var year = currentTime.getFullYear();
    const ageValue: number | string = personalInfo.age[1];
    const ageAsNumber: number = typeof ageValue === 'string' ? parseInt(ageValue, 10) : ageValue;

    return (
        <Row className="personalInfo">
            <Col sm={1} md={1} style={{marginTop: '1%'}}>
                <p>{language.mappedExtra.myself}</p>
            </Col>
            <Col sm={11} md={11}>
                <Row>
                    <Col className="personalCity">
                        <b>{personalInfo.city[0]}</b>
                        <br />
                        {personalInfo.city[1]} / {personalInfo.city[2]}
                    </Col>
                    <Col className="personalAge">
                        <b>{personalInfo.age[0]}  </b> 
                        <br />
                        {year - ageAsNumber} {personalInfo.age[3]}  - {personalInfo.age[2]}
                    </Col>
                </Row>
                <Row>
                    <b>{personalInfo.titles[0]}</b>
                    {personalInfo.studies.map((_, index) => (
                    <Col key={index} sm={6} md={6}>
                    <PersonalDataCard 
                        key={index}
                        index={index}
                        data={personalInfo.studies}
                    />
                    </Col>
                    ))}
                </Row>
                <Row>
                    <b>{personalInfo.titles[2]}</b>
                    <Col sm={6} md={6}>
                        <Image src={cerficate} fluid thumbnail/>
                    </Col>
                </Row>
                <Row>
                    <b>{personalInfo.titles[1]}</b>
                    {personalInfo.experience.map((_, index) => (
                    <Col key={index} sm={6} md={6}>
                    <PersonalDataCard 
                        key={index}
                        index={index}
                        data={personalInfo.experience}
                    />
                    </Col>
                    ))}
                </Row>
            </Col>
        </Row>
    )
})
