import { Card, Col, Row } from 'react-bootstrap'
import Language from '../../../languages/Language';
import { observer } from 'mobx-react-lite';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';

interface Props {
    index: number
}
export default observer(function SkillCard({index} : Props) {
    const language = Language.getInstance();
    const skill = language.mappedSkills[index];

return (
    <Card style={{minWidth: '350px', margin: '1%'}}>
        <Row>
            <Col md={2}>
            <Card.Img src={skill.img} style={{width: '60px', padding: '10%', marginTop: '40%'}} />
            </Col>
            <Col md={10}>
            <Card.Body>
                <Card.Title className='skillTitle'>
                    <Row>
                        <Col>
                            {skill.name}
                        </Col>
                        <Col>
                        {/* @ts-expect-error Server Component */}
                            <Rating
                                emptySymbol={<FontAwesomeIcon icon={regularStar} className="fa fa-star-o fa" />}
                                fullSymbol={<FontAwesomeIcon icon={solidStar} className="fa fa-star fa" />}
                                fractions={2}
                                initialRating={skill.level}
                                readonly
                            />
                            <Card.Subtitle style={{fontSize: 'small', textAlign: 'end'}}>
                                {skill.levelMeaning}
                            </Card.Subtitle>
                        </Col>
                    </Row>
                </Card.Title>
                <Card.Text>
                    {skill.text}
                </Card.Text>
            </Card.Body>
            </Col>
        </Row>
    </Card>
    );
});