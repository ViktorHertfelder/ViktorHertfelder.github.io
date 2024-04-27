import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function scrollIntoView(sectionID){
    const section = document.getElementById(sectionID)
    section.scrollIntoView({behavior: "smooth"})
}

function NavBar() {
    return (
        <Navbar bg="dark" data-bs-theme="dark" fixed="top">
            <Container>
                <Navbar.Brand href="" onClick={ () => scrollIntoView("home")}>Viktor Hertfelder</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="" onClick={ () => scrollIntoView("home")}>Home</Nav.Link>
                    <Nav.Link href="" onClick={ () => scrollIntoView("skills")}>Skills</Nav.Link>
                    <Nav.Link href="" onClick={ () => scrollIntoView("about")}>About me</Nav.Link>
                    <Nav.Link href="" onClick={ () => scrollIntoView("socials")}>Socials</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavBar;