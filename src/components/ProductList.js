import React from "react";
import { useCart } from "../context/CartContext";
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Button,
    Grid,
    Box,
} from "@mui/material";

const products = [
    {
        id: 1,
        name: "Laptop",
        img: "https://th.bing.com/th/id/OIP.5EZRHGR0LgL2IWcQ511TkQHaF5?w=226&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        price: 1000,
    },
    {
        id: 2,
        name: "Phone",
        img: "https://th.bing.com/th/id/R.050870287c1562f9054a257a8f093f44?rik=Q11l1rxh4I5RTw&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f2016%2f03%2fSmartphone.png&ehk=8kbDG8lbgzekZ53EGsk99konADoWH3QRXrAPUqM2PBo%3d&risl=&pid=ImgRaw&r=0",
        price: 500,
    },
    {
        id: 3,
        name: "T-shirts",
        img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQYGTOi0WNZup9hkDE1KLMb8BSC9ajT1MzSAhk6osTe7lR_pg6mEXO3m1KW2diR0SXS3p4Vx90f2LUWFZQGus4vrd6r8z54Am9B1mKhKzgb",
        price: 200,
    },
    {
        id: 4,
        name: "Jeans",
        img:"",
        price: 1600,
    },
    {
        id: 5,
        name: "Shirt",
        img:"",
        price: 300,
    },
    {
        id: 6,
        name: "Cap",
        img:"",
        price: 100,
    },
];

const ProductList = () => {
    const { addToCart } = useCart();

    return (
        <Box sx={{ p: 2, marginTop: 7 }}>
            <Typography variant="h4" gutterBottom sx={{ textAlign: "center", fontWeight: "bold" }}>
                Products
            </Typography>
            <Grid container spacing={3}>
                {products.map((product) => (
                    <Grid item xs={12} sm={6} md={4} key={product.id}>
                        <Card 
                            sx={{
                                maxWidth: 345, 
                                boxShadow: 3, 
                                transition: "transform 0.3s ease-in-out", 
                                "&:hover": {
                                    transform: "scale(1.05)", 
                                    boxShadow: 6,
                                }
                            }}
                        >
                            <CardMedia
                                component="img"
                                height="180"
                                image={product.img}
                                alt={product.name}
                                sx={{
                                    objectFit: "contain",
                                    borderBottom: "1px solid #ddd",
                                }}
                            />
                            <CardContent>
                                <Typography variant="h6" component="div" sx={{ fontWeight: "bold", color: "#333" }}>
                                    {product.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 2 }}>
                                    Rs. {product.price}
                                </Typography>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => addToCart(product)}
                                    sx={{
                                        padding: "8px 20px",
                                        fontSize: "1rem",
                                        fontWeight: "bold",
                                        borderRadius: "5px",
                                        textTransform: "none",
                                        "&:hover": {
                                            backgroundColor: "#1565c0",
                                        },
                                    }}
                                >
                                    Add to Cart
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default ProductList;
