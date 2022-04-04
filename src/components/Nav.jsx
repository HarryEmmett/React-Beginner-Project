import '../css/Nav.css';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

const Nav = () => {

    return (

        <div className="nav-bar-container">
            <Link className='links' to='/'>
                <div className="d-grid gap-2">
                    <Button variant="primary" size="lg">
                        Book a room
                    </Button>
                </div>
            </Link>

            <Link className='links' to='/aboutUs'>
                <div className="d-grid gap-2">
                    <Button variant="info" size="lg">
                        About us
                    </Button>
                </div>
            </Link>
        </div>

    );
}

export default Nav;