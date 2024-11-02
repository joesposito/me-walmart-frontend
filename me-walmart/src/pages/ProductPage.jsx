import ProductSearchBar from "../components/ProductSearchBar/ProductSearchBar";
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ProductInformation from "../components/ProductInformation/ProductInformation";

function ProductPage(){
    return (
        <div>
            <Header></Header>
            <ProductSearchBar></ProductSearchBar>
            <ProductInformation></ProductInformation>
            <Footer></Footer>
        </div>
    );
}

export default ProductPage;