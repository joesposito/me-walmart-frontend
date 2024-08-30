import ProductSearchBar from "../components/ProductSearchBar";
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductInformation from "../components/ProductInformation";

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