import "./Header.css"
import { Link } from "react-router-dom";

function Header(){

    return (
        <header>
            <nav className="nav-bar">
                <a href="/">
                    <div className="TitleLogo">
                        <span>Me@Walmart</span>
                        <img src="/images/Walmart_Spark.svg" alt="Walmart Logo"></img>
                    </div>
                </a>
                <ul className="nav-bar-links">
                    <div className="home-link">
                        <a href="#!">
                            <li>Home</li>  
                        </a>
                    </div>
                    <div className="profile-link">
                        <a href="#!">
                            <li>Profile</li>  
                        </a>
                    </div>
                    <div className="ask-sam-link">
                        <a href="#!">
                            <li>Ask Sam</li>
                        </a>
                    </div>
                    <div className="my-team-link">
                        <a href="#!">
                            <li>My Team</li>
                        </a>
                    </div>
                    <div className="logout-link">
                        <Link to="/login">Logout</Link>
                    </div>
                </ul>
            </nav>
        </header>
    );
}

export default Header;