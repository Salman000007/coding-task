import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faBars, faA ,} from '@fortawesome/free-solid-svg-icons'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
 


function Header() {
  const item = ["Drugs", "Calculator", "Article", "News", "Quizzes", "Surveys", "Webinars", "Guidelines"];
  return (
    <Navbar className='p-3' collapseOnSelect expand="lg" bg="light" variant="light">
      <img className='h-6 mr-3' src='https://www.hidoc.co/ad_campaign/pharma/sai_allergy/img/logo.png' alt='logo' />
      <Container>
       <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <div className='flex'>
              <Nav className='ml-48' href="#features">{item.map((value, index) => <li className='m-[5px] cursor-pointer' key={index}>{value} |</li>)}</Nav>
            </div>
          </Nav>
          <Nav>
          <FontAwesomeIcon className='mr-3 mt-[12px] cursor-pointer' icon={faBars} />
            <div className='border border-black rounded-full my-2 px-3 mr-2'>
            <FontAwesomeIcon icon={faTrophy} />
            <span className='text-red-500 font-bold ml-1'>274</span>
            </div>
            <FontAwesomeIcon className='border border-black rounded-full p-[5px] px-2 py-2 mt-1' icon={faA} />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;