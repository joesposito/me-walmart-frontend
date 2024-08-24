import "../styles/Header.css"

function Header(){
    return(
        <header>
                <nav>
                <a href="app.js">
                    <div className="TitleLogo">
                        <span>Me@Walmart</span>
                        <img src="/Walmart_Spark.svg" alt="Walmart Logo"></img>
                    </div>
                </a>
                <ul>
                    <div className="login-link">
                        <a href="#">
                            <li>Profile</li>  
                        </a>
                    </div>
                    <div className="ask-sam-link">
                        <a href="#">
                            <li>Ask Sam</li>
                        </a>
                    </div>
                    <div className="my-team-link">
                        <a href="#">
                            <li>My Team</li>
                        </a>
                    </div>
                    <div className="home-link">
                        <a href="#">
                            <li>Home</li>  
                        </a>
                    </div>
                </ul>
            </nav>
        </header>
    );
}

export default Header