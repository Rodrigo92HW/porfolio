import { Card, Row, Col, ListGroup } from "react-bootstrap";
interface Props {
    index: number,
    data: { title: string; content: string[] }[]
}

export default function PersonalDataCard({index, data}: Props) {

    const content = data[index].content;

    return (
        <Card style={{padding: '3px', margin: '5px'}}>
            <Row>
                <Col>
                    <Row>
                        <Col>
                        <Card.Title>{data[index]?.title}</Card.Title>
                        <Card.Subtitle style={{fontSize: 'small'}}>{data[index].content[0]}</Card.Subtitle>
                        </Col>
                    </Row>
                    <Row>
                        <Card.Text>
                            {data[index].content[1]}
                            <ListGroup variant="list-group-flush">
                            {content.slice(2).map((item, i) => (
                                <ListGroup.Item key={i}>{item}</ListGroup.Item>
                            ))}
                            </ListGroup>
                        </Card.Text>
                    </Row>
                </Col>
            </Row>
        </Card>
    )
}
