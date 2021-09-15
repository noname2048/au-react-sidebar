import logo from '../images/logo.png';

const Navbar = () => {
    return (
        <div className="sidenav active">
            <ul>
                <img src={logo} alt="Logo" className="logo"/>
                <li><a href="/">Home</a></li>
                <li><a href="/">About us</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
        </div>
    )
}

export default Navbar;
