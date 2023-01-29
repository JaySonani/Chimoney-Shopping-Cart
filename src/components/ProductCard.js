import './ProductCard.css';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const ProductCard = ({ productData }) => {

    const dollar = Math.trunc(productData.price);
    const cents = productData.price.toString().split(".")[1];

    const navigate = useNavigate();

    return (
        <div className='product'>
            <Card sx={{ maxWidth: 250, minWidth: 250, height: 500 }} onClick= {()=> navigate("/details",{state: {productData}})}  >
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="gift_card_logo"
                        height="250"
                        image={productData.image}
                    />
                    <CardContent>
                        <Typography variant="h6" component="div" align='left' fontFamily="AmazonRg">
                            {productData.title}
                        </Typography>
                        <div className='ratingRow'>
                            <Rating name="read-only" value={productData.rating.rate} readOnly size='small' />
                            <Typography fontSize={14} >{productData.rating.count}</Typography>
                        </div>

                        <div className='price'>
                            <Typography fontFamily="AmazonRg" lineHeight={1}>$</Typography>
                            <Typography fontFamily="AmazonBd" lineHeight={1} marginTop={-0.2} fontSize={28} > {dollar}</Typography>
                            <Typography fontFamily="AmazonRg" lineHeight={1} >{cents}</Typography>

                        </div>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
}

export default ProductCard;