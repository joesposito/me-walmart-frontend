import Header from '../components/Header/Header';
import ProductSearchBar from '../components/ProductSearchBar/ProductSearchBar';
import Dashboard from '../components/Dashboard/Dashboard';
import Footer from '../components/Footer/Footer';

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