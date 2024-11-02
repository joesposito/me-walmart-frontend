import './ProductInformation.css';
import NotFound from '../NotFound/NotFound';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

function ProductInformation(){
    const { productId } = useParams();
    const [error, setError] = useState(true);
    const [product, setProduct] = useState(null);

    // Making a fetch to the Spring REST API for product data using the productId into the URL
    useEffect(() => {
            const url = `http://localhost:8090/product/${productId}`
            fetch(url, {
                method: 'get',
                headers: new Headers({
                })
            }).then((result) => {
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

    if(!error){
        return (
        <div className="product-container">
            <ProductMain product={product}></ProductMain>
            <ProductSecondary product={product}></ProductSecondary>
        </div>
        );
    }

    return (
        <NotFound></NotFound>
    );
};

function ProductImage() {
    return (
        <div className="product-image-container">
            <img className="product-image-main" src="/images/BLACK-DECKER-6-Slice-Crisp-N-Bake-Air-Fry-Toaster-Oven-TO3217SS.webp" 
                alt="Temporary product image." ></img>
        </div>
    );
}

// Container for top part of product UI
function ProductMain({product}) {
    return (
        <div className="product-main-container">
            <ProductImage></ProductImage>
            <ProductMainCard product={product}></ProductMainCard>
        </div>
    );
}

// Container for bottom part of product UI
function ProductSecondary({product}) {
    return (
        <div className="product-secondary-container">
            <ProductInventoryCard product={product}></ProductInventoryCard>
            <ProductExtrasCard product={product}></ProductExtrasCard>
        </div>
    );
}

// The main card on the product page displaying the most important product information
function ProductMainCard({product}) {
    return (
        <div className="product-card-main">
            <div className="product-card-top">
                <span className="product-name">{product.fullName}</span>
                <div className="product-price-container">
                    <span className="product-price">{USDollar.format(product.price)}/ea</span>
                </div>
                <div className="product-number-container">
                    <span>Item #</span>
                    <span className="product-value">{product.itemNumber}</span>
                </div>
                <div className="product-department-container">
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
                        <span id="product-upc-last-four" className="product-value">
                            {product.upc.substring(product.upc.length - 4)}</span>
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
                    <span>{product.casePack} ea</span>
                </div>
            </div>
            <hr></hr>
        </div>
    );
}

// Holds the product inventory information, most notable the stock and the locations in the store
function ProductInventoryCard({product}){
    // Filters all product locations by their two types, either Sales Floor Location (locationTypeId = 1) or Backroom Location (locationTypeId = 2)
    const sales_floor_products = Object.values(product.productLocations).filter((x) => x.location.locationType.locationTypeId === 1);
    const backroom_products = Object.values(product.productLocations).filter((x) => x.location.locationType.locationTypeId === 2);

    return (
        <div className="product-inventory-container">
            <div className="product-secondary-header">
                <img className="box-img" src="/box-clip-art.webp" alt="Box icon."></img>
                <h2 className="product-secondary-h2">Inventory</h2>
            </div>
            <hr></hr>
            <div id="pd-bottom" className="product-details-three">
                <div className="product-on-hand-count">
                    <span>On hand</span>
                    <span>{product.onHandCount}</span>
                </div>
                <div className="product-details-border"></div>
                <div className="product-sales-floor-count">
                    <span>Sales floor</span>
                    <span>{product.salesFloorCount}</span>
                </div>
                <div className="product-details-border"></div>
                <div className="product-backroom-count">
                    <span>Backroom</span>
                    <span>{product.backroomCount}</span>
                </div>
            </div>
            <hr></hr>
            <div className="product-inventory-options">
                <a href="#!">
                    <div className="product-button">
                        <div className="edit-on-hand-button">
                            <span>Edit on hand</span>
                        </div>
                    </div>
                    <div id="product-button-item-oos" className="product-button">
                        <div className="item-oos">
                            <span>Item out of stock</span>
                        </div>
                    </div>
                </a>
            </div>
            <hr></hr>
            <div className="product-locations">
                <div className="product-sf-location-header">
                    <h3>Sales Floor Locations</h3>
                </div>
                {sales_floor_products.map((pl) =>
                    <div className="product-location">
                        <span>{pl.location.name}</span>
                        <span className="product-quantity">Shelf Cap Quantity: {pl.quantity} ea</span>
                        <div className="edit-shelf-cap">
                            <a href="#!"><span>Edit Shelf Cap</span></a>
                        </div>
                        <hr></hr>
                    </div>)}
                <div className="product-b-location-header">
                    <h3>Backroom Locations</h3>
                </div>
                {backroom_products.map((pl) =>
                    <div className="product-location">
                        <span>{pl.location.name} </span>
                        <span className="product-quantity">Quantity: {pl.quantity} ea</span>
                    </div>)}
            </div>
        </div>
    );
}

// Holds the extra information about the products as a dropdown card
function ProductExtrasCard({product}){
    return (
        <div className="product-extras-container">
            <div className="product-secondary-header">
                <h2 className="product-secondary-h2">Extras</h2>
            </div>
            <hr></hr>
            <div className="product-dropdown">
                <div className="product-dropdown-header">
                    <div className="product-dropdown-icon">
                        <img src="/BoxTruckIcon.png" alt="Box Truck Icon."></img>
                    </div>
                    <span>Replenishment</span>
                </div>
                <div className="product-dropdown-click">
                    <div className="product-dropdown-arrow">
                        <img src="/Down-Arrow.svg" alt="Downward arrow clickable icon."></img>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className="product-dropdown">
                <div className="product-dropdown-header">
                    <div className="product-dropdown-icon">
                        <img src="/DollarSignIcon.png" alt="Dollar Sign Icon."></img>
                    </div>
                    <span>Sales</span>
                </div>
                <div className="product-dropdown-click">
                    <div className="product-dropdown-arrow">
                        <img src="/Down-Arrow.svg" alt="Downward arrow clickable icon."></img>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className="product-dropdown">
                <div className="product-dropdown-header">
                    <div className="product-dropdown-icon">
                        <img src="/CrossReferencesIcon.png" alt="Cross References Chain Icon."></img>
                    </div>
                    <span>Cross References</span>
                </div>
                <div className="product-dropdown-click">
                    <div className="product-dropdown-arrow">
                        <img src="/Down-Arrow.svg" alt="Downward arrow clickable icon."></img>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className="product-dropdown">
                <div className="product-dropdown-header">
                    <div className="product-dropdown-icon">
                        <img src="/ClockIcon.png" alt="Item History Clock Icon."></img>
                    </div>
                    <span>Item History</span>
                </div>
                <div className="product-dropdown-click">
                    <div className="product-dropdown-arrow">
                        <img src="/Down-Arrow.svg" alt="Downward arrow clickable icon."></img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductInformation;