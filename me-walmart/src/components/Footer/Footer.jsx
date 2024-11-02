import "./Footer.css"

function Footer(){
    return (
        <footer>
            <div className="footer-container">
                <span>© {((new Date()).getFullYear())} Walmart. All Rights Reserved.</span>
            </div>
        </footer>
    );
}

export default Footer;