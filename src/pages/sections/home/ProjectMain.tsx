import { Col, Row } from "react-bootstrap";
import Language from "../../../languages/Language";
import ProjectCard from "../cards/ProjectCard";
import { observer } from "mobx-react-lite";

export default observer(function ProjectMain() {

    const language = Language.getInstance();

    return (
        <Row className="projectMain">
            <Col sm={1} md={1} style={{marginTop: '1%'}}>
                <p>{language.mappedExtra.project}</p>
            </Col>
            <Col>
                <Row style={{marginRight: '50px'}}>
                {language.mappedProjects.map((_, index) => (
                    <Col md={6} key={index}>
                    <ProjectCard 
                        index={index}
                    />
                    </Col>
                ))}
                </Row>
            </Col>
        </Row>
    )
})
