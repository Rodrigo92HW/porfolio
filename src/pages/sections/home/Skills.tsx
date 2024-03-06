import { Col, Row } from "react-bootstrap";
import SkillCard from "../cards/SkillCard";
import Language from "../../../languages/Language";
import { observer } from "mobx-react-lite";

export default observer(function Skills() {

    const language = Language.getInstance();

    return (
        <Row className="skills">
            <Col sm={1} md={1} style={{marginTop: '1%'}}>
                <p>{language.mappedExtra.skill}</p>
            </Col>
            <Col>
                <Row>
                {language.mappedSkills.map((_, index) => (
                    <Col md={6} xl={4} key={index}>
                    <SkillCard
                        index={index}
                    />
                    </Col>
                ))}
                </Row>
            </Col>
        </Row>
    )
})
