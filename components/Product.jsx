import { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
  Box,
  Stack
} from "@mui/material";

function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  const addToCart = (product) => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    storedCart.push(product);
    localStorage.setItem("cart", JSON.stringify(storedCart));
    window.dispatchEvent(new Event("storage"));
    alert("Product added to cart!");
  };

  const addToWishlist = (product) => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    
    // Prevent duplicates
    const exists = storedWishlist.find((item) => item.id === product.id);
    if (!exists) {
      storedWishlist.push(product);
      localStorage.setItem("wishlist", JSON.stringify(storedWishlist));
      alert("Product added to wishlist!");
    } else {
      alert("Product is already in wishlist!");
    }
  };

  return (
    <Grid container spacing={3} sx={{ p: 3 }}>
      {products.map((item) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
          <Card
            sx={{
              width: 250,
              height: 420, 
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ height: 180, p: 2 }}>
              <CardMedia
                component="img"
                image={item.image}
                alt={item.title}
                sx={{ height: "100%", objectFit: "contain" }}
              />
            </Box>

            <CardContent sx={{ flexGrow: 1 }}>
              <Typography
                variant="subtitle1"
                sx={{ height: 48, overflow: "hidden" }}
              >
                {item.title}
              </Typography>

              <Typography variant="body2" sx={{ mb: 1 }}>
                ₹ {item.price}
              </Typography>

              <Stack direction="row" spacing={1}>
                <Button
                  variant="contained"
                  fullWidth
                  onClick={() => addToCart(item)}
                >
                  Add to Cart
                </Button>

                <Button
                  variant="outlined"
                  fullWidth
                  onClick={() => addToWishlist(item)}
                >
                  Wishlist
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default Product;