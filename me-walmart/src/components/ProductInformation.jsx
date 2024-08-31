import '../styles/ProductInformation.css';
import NotFound from './NotFound';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


function ProductInformation(){
    const { productId } = useParams();
    const [error, setError] = useState(true);
    const [product, setProduct] = useState(null);

    useEffect(() => {
            const url = `http://localhost:8080/product/${productId}`
            fetch(url).then((result) => {
                return result.json()
            }).then((json) => {
                setProduct(json);
                setError(false);
                return json;
            }).catch((error) => {
                console.log(error);
                setError(true);
            })
        }, [productId])

    let USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    if(error){
        return <NotFound />;
    }

    if(!error){
        return (
        <div className="product-container">
            <img className="product-image-main" src="/BLACK-DECKER-6-Slice-Crisp-N-Bake-Air-Fry-Toaster-Oven-TO3217SS.webp" alt="Temporary product image."></img>
            <div className="product-information-container">
                <div className="product-card-main">
                    <div className="product-card-top">
                        <span className="product-name">{product.full_name}</span>
                        <div className="product-price-container">
                            <span className="product-price">{USDollar.format(product.price)}/ea</span>
                        </div>
                        <div className = "product-number-container">
                            <span>Item #</span>
                            <span className="product-value">{product.item_number}</span>
                        </div>
                        <div className = "product-department-container">
                            <span>Department</span>
                            <span className="product-value">{product.department}</span>
                        </div>
                        <div className="product-category-container">
                            <span>Category</span>
                            <span className="product-value">{product.category}</span>
                        </div>
                        <div className="product-upc-container">
                            <span>UPC</span>
                            <div>
                                <span className="product-value">{product.upc.substring(0, product.upc.length - 4)}</span>
                                <span id="product-upc-last-four" className="product-value">{product.upc.substring(product.upc.length - 4)}</span>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="product-details-three">
                        <div className="product-size-container">
                            <span>Size</span>
                            <span>{product.size}</span>
                        </div>
                        <div className="product-details-border"></div>
                        <div className="product-color">
                            <span>Color</span>
                            <span>{product.color}</span>
                        </div>
                        <div className="product-details-border"></div>
                        <div className="product-case-pack">
                            <span>Case pack</span>
                            <span>{product.case_pack} ea</span>
                        </div>
                    </div>
                    <hr></hr>
                    <div id="pd-bottom" className="product-details-three">
                    <div className="product-on-hand-count">
                        <span>On hand</span>
                        <span>{product.on_hand_count}</span>
                    </div>
                    <div className="product-details-border"></div>
                    <div className="product-sales-floor-count">
                        <span>Sales floor</span>
                        <span>{product.sales_floor_count}</span>
                    </div>
                    <div className="product-details-border"></div>
                    <div className="product-backroom-count">
                        <span>Backroom</span>
                        <span>{product.backroom_count}</span>
                    </div>
                </div>
                <hr></hr>
                </div>
            </div>
        </div>
        );
    }

    return (
        <NotFound></NotFound>
    );
};

export default ProductInformation;