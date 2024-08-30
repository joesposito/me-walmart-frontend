import '../styles/NotFound.css';

function NotFound(){
    return (
        <div className="not-found-container">
            <h1 className="not-found-h1">404 Page not found</h1>
            <h2 className="not-found-h2">We couldn't find this page</h2>
            <p className="not-found-p">Try searching or go to the homepage.</p>
        </div>
    );
}

export default NotFound;