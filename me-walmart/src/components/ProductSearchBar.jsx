import "../styles/ProductSearchBar.css"
import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";

function ProductSearchBar(){
    
    const [productId, setProductId] = useState('');
    const navigate = useNavigate();

    async function getProduct(e) {
        e.preventDefault();
        const searchbar = document.getElementById("upc");
        setProductId(searchbar.value);

        if(productId === ''){
            return;
        }

        const path = "/product/" + productId;
        return navigate(path);
    };

    return (
        <div className="search-bar-container">
            <form onSubmit={getProduct}>
                <div className="search-bar">
                    <div className="input-icon">
                        <input type="image" src="/Search_Icon.svg" alt="submit button" width="30px" height="30px"/>
                    </div>
                    <input className="search-bar-input" type="text" id="upc" placeholder="Enter UPC to search for an item"/>
                </div>
            </form>
        </div>
    );
};

export default ProductSearchBar;