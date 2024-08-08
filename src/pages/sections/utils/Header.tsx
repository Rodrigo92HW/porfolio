import { useEffect, useState } from 'react';
import { Nav, Navbar, Container, ButtonGroup, ToggleButton } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import Language from '../../../languages/Language';
import { observer } from 'mobx-react-lite';

export default observer(function Navigation() {
    const location = useLocation();
    const [activePage, setActivePage] = useState('/');

    useEffect(() => {
        setActivePage(location.pathname)
    }, [location])

    const language = Language.getInstance();
    const header = language.mappedExtra.header;

    const [radioValue, setRadioValue] = useState('1');
    const radios = [
        { name: 'ES', value: '1' },
        { name: 'EN', value: '2' }
    ];

    const handleLanguageToggle = (selectedValue: string) => {
        if (selectedValue === '2') {
            language.toggleLanguage('es');
        } else if (selectedValue === '1') {
            language.toggleLanguage('en');
        }
    };

    return (
        <Navbar bg="dark" variant="dark" sticky="top"  style={{paddingTop: '5px'}}>
        <Container>
            <Navbar.Brand>Curriculum</Navbar.Brand>
            <Nav variant="underline" defaultActiveKey="/porfolio/" activeKey={activePage} className="me-auto">
            <Nav.Link as={Link} to="/porfolio/" eventKey="/porfolio/" style={{ textDecoration: 'none' }}>
                {header[0]}
            </Nav.Link>
            <Nav.Link as={Link} to="/projects/" eventKey="/projects/" style={{ textDecoration: 'none' }}>
                {header[1]}
            </Nav.Link>
            </Nav>
            <ButtonGroup>
    <p className='language'>{language.mappedExtra.header[2]}</p>
    {radios.map((radio, idx) => (
        <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant={idx % 2 ? 'outline-success' : 'outline-success'}
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
            onClick={() => handleLanguageToggle(radio.value)}
        >
            {radio.name}
        </ToggleButton>
    ))}
</ButtonGroup>

        </Container>
        </Navbar>
    );
})