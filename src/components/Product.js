import './Product.css';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';

import { useLocation } from 'react-router-dom';

const Product = () => {

  const location = useLocation();
  const productData = location.state.productData;

  console.log(productData);

  const dollar = Math.trunc(productData.price);
  const cents = productData.price.toString().split(".")[1];

  const addItemToCart = () => {
    var shoppingCart = JSON.parse(localStorage.getItem("shoppingCart")) || [];
    var itemIndex = shoppingCart.findIndex(item => item.id == productData.id)

    if (itemIndex > -1) {
      shoppingCart[itemIndex] = { ...shoppingCart[itemIndex], quantity: shoppingCart[itemIndex].quantity + 1 }
    } else {
      shoppingCart.push({
        id: productData.id,
        quantity: 1
      });
    }

    localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
  }

  return (
    <div className="product-ex">

      <div className="image">
        <img src={productData.image} height="400"></img>
      </div>

      <div className="details-ex">
        <Typography align="left" fontSize={28} fontFamily="AmazonBd">{productData.title}</Typography>
        <div className='ratingRow'>
          <Rating name="read-only" value={productData.rating.rate} readOnly size='small' />
          <Typography fontSize={14} fontFamily="AmazonRg" >{productData.rating.count} ratings</Typography>
        </div>
        <hr />
        <div className='price'>
          <Typography fontFamily="AmazonRg" lineHeight={1}>$</Typography>
          <Typography fontFamily="AmazonBd" lineHeight={1} marginTop={-0.2} fontSize={28} > {dollar}</Typography>
          <Typography fontFamily="AmazonRg" lineHeight={1} >{cents}</Typography>
        </div>
        <hr />

        <div className="category-ex">
          <Typography align="left" fontFamily="AmazonBd" style={{ marginRight: 20 }} >Category</Typography>
          <Typography fontFamily="AmazonRg">{productData.category}</Typography>
        </div>
        <hr />

        <Typography align="left" fontFamily="AmazonBd" style={{ marginRight: 40 }} fontWeight="bold" >Description</Typography>
        <Typography align="left" fontFamily="AmazonRg" >{productData.description}</Typography>
        <br />


        {/* Align following button to the left */}
        <Button variant="contained" onClick={() => addItemToCart()} style={{ color: "black", height: 30, minWidth: 220, fontFamily: "AmazonRg", backgroundColor: "#ffd712", borderRadius: 35, textTransform: 'none' }}>Add to cart</Button>
      </div>
    </div>
  );
}

export default Product;
