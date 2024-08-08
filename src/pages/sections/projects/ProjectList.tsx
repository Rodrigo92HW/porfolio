import { Col, Row } from "react-bootstrap";
import Language from "../../../languages/Language";
import FullProjectCard from "../cards/FullProjectCard";
import { observer } from "mobx-react-lite";

export default observer(function ProjectList() {

    const language = Language.getInstance();

    return (
        <Row style={{margin: '2% 5% 0 5%'}}>
            <Col>
                <Row>
                {language.mappedProjects.map((_, index) => (
                    <Row key={index}>
                    <FullProjectCard 
                        index={index}
                    />
                    </Row>
                ))}
                </Row>
            </Col>
        </Row>
    )
})
