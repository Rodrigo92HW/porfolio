import { Button, Card, Carousel, Col, Image, Row } from "react-bootstrap";
import Language from '../../../languages/Language';
import { observer } from "mobx-react-lite";
import GithubFetcher from "../utils/GithubFetcher";

interface Props {
    index: number
}

export default observer(function FullProjectCard({index}: Props) {
    const language = Language.getInstance();
    const project = language.mappedProjects[index];

    function longText(){ 
        const paragraphs = [];
            for (let i = 0; i < project.longText.length; i++) {
                paragraphs.push(<p style={{fontSize: 'larger', textAlign: "justify", fontStyle: "oblique", marginRight: '20px'}} key={i}>{project.longText[i]}</p>);
            }
        return paragraphs;
    }

    return (
        <Card className="fullProjectCard" border="dark" >
            <Row>
                <Col sm={11}>
                    <Card.Title>
                        <h1 className="display-3" style={{ marginBottom: 0 }}>{project.name}</h1>
                    </Card.Title>
                </Col>
                <Col sm={1}>
                    <Button variant="outline-primary" style={{marginTop: '20%', fontSize: "larger"}} size="lg">
                        <a href="https://rodrigo92hw.github.io/pta-generator/" target="_blank" style={{all: 'unset'}}>Link</a>
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col sm={5} md={5}>
                <Carousel>
                    <Carousel.Item>
                        <Image src={project.bannerImage[0]} style={{ height: '30rem' }} />
                        <Carousel.Caption>
                            <p style={{color: 'black'}}>{project.bannerText[0]}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image src={project.bannerImage[1]} style={{ height: '30rem' }} />
                        <Carousel.Caption>
                            <p style={{color: 'black'}}>{project.bannerText[1]}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image src={project.bannerImage[2]} style={{ height: '30rem' }} />
                        <Carousel.Caption>
                            <p style={{color: 'black'}}>{project.bannerText[2]}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                </Col>
                <Col sm={7} md={7}>
                <Card.Body style={{paddingTop: '1%'}}>
                    <Card.Text style={{ height: '29rem' }} className="overflow-y-auto">
                        {longText()}
                    </Card.Text>
                    <Card.Footer className="text-muted" style={{textAlign: 'end'}}>{project.webText}<GithubFetcher web={project.web}/></Card.Footer>
                </Card.Body>
                </Col>
            </Row>
        </Card>
    )
})