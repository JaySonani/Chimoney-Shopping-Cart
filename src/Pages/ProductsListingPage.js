import ProductCard from "../components/ProductCard";
import './ProductsListingPage.css';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import axios from 'axios';

const ProductsListingPage = () => {

    const [products, loadProducts] = useState([]);
    useEffect(() => {
        var config = {
            method: 'get',
            url: 'https://fakestoreapi.com/products',
            headers: {
                'Content-Type': 'application/json'
            },
        };
        axios(config)
            .then(function (response) {
                loadProducts(response.data);
                localStorage.setItem("productData", response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    return (
        <div className="products">
            <Box sx={{ width: '100%' }}>
                <Grid container>
                    {
                        products.map((product) => {
                            return (
                                <Grid item>
                                    <ProductCard productData={product} />
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Box>
        </div>
    );
}

export default ProductsListingPage;