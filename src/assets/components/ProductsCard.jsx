import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

export const ProductsCard = ({product}) => {

    const {setCart} = useContext(ProductContext);


    // Add to Cart
    const addToCart = (product) => {
    
        console.log("se agrego al carrito =>" + product.name)
        setCart((prev) => [...prev, product])
    
    }


  return (
    <Card sx={{ maxWidth: 345, backgroundColor: "#ffe"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{aspectRatio: "16/9", objectFit: "cover"}}
          height="200"
          image={product.urlImage}
          alt={product.name}
        />
        <CardContent sx={{height:"100px"}}>
          <Typography gutterBottom variant="h6" component="div">
            {product.name}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {product.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" variant="outlined" color="info"
        onClick={() => addToCart(product)}>
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};
