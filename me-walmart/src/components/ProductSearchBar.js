import "../styles/ProductSearchBar.css"
import React, { useState } from 'react';

function ItemSearch(){
    
    const [upc, setUpc] = useState('');

    function handleChange(e){
        setUpc(e.target.value);
    }

    async function getProduct(e) {
        e.preventDefault();
        if(upc === ''){
            return;
        }

        const url = "http://localhost:8080/product/" + upc;
        const response = await fetch(url);
        console.log(response.json())
    };

    return (
        <div className="search-bar-container">
            <form onSubmit={getProduct}>
                <div className="search-bar">
                    <div className="input-icon">
                        <input type="image" src="/Search_Icon.svg" alt="submit button" width="30px" height="30px"/>
                    </div>
                    <input className="search-bar-input" type="text" id="upc" placeholder="Enter UPC to search for an item" onChange={handleChange}/>
                </div>
            </form>
        </div>
    );
};

export default ItemSearch;