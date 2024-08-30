import Header from '../components/Header';
import ProductSearchBar from '../components/ProductSearchBar';
import Dashboard from '../components/Dashboard';
import Footer from '../components/Footer';

function HomePage(){
    return (
        <div>
            <Header></Header>
            <ProductSearchBar></ProductSearchBar>
            <Dashboard></Dashboard>
            <Footer></Footer>
        </div>
    );
}

export default HomePage;