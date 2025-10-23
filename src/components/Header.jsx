import "./../css/Header.css";
import logo from "../images/house-logo.jpeg"

const Header = () => {
    return (
        <header id="main-header">
            <img id="logo" src={logo} alt="logo" />
            <h1>Finding the Right Home</h1>
        </header>
    );
};

export default Header;