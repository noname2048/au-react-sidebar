import { BsPersonFill } from 'react-icons/bs';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

const Navbar = ({show}) => {
    return (
        <div className={show ? 'sidenav active' : 'sidenav'}>
            <ul>
                <img src={logo} alt="Logo" className="logo"/>
                <li><Link to="/"><FaHome />Home</Link></li>
                <li><Link to="/about"><BsPersonFill />About us</Link></li>
                <li><Link to="/">Contact</Link></li>
            </ul>
        </div>
    )
}

export default Navbar;
