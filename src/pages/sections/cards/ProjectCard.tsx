import { Card, CardGroup, Container } from "react-bootstrap";
import Language from '../../../languages/Language';
import { observer } from "mobx-react-lite";

interface Props {
    index: number
}

export default observer(function ProjectCard({index}: Props) {
    const language = Language.getInstance();
    const project = language.mappedProjects[index];

    return (
        <Container className="projectCard">
            <b>{project.name}</b>
        <CardGroup className="projectCard">
            <Card>
                <Card.Img variant="top" src={project.img[0]} />
                <Card.Body>
                <Card.Title>{project.text1[0]}</Card.Title>
                <Card.Text>
                    <p>{project.text1[1]}</p>
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">{project.text1[2]}</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src={project.img[1]} />
                <Card.Body>
                <Card.Title>{project.text2[0]}</Card.Title>
                <Card.Text>
                    <p>{project.text2[1]}</p>
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">{project.text2[2]}</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src={project.img[2]} />
                <Card.Body>
                <Card.Title>{project.text3[0]}</Card.Title>
                <Card.Text>
                    <p>{project.text3[1]}</p>
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">{project.text3[2]}</small>
                </Card.Footer>
            </Card>
    </CardGroup>
    </Container>
    )
})
