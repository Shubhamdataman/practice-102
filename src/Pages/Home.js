import React from "react";
import { Button, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                backgroundImage: `url('https://www.shutterstock.com/image-vector/vector-realistic-isolated-neon-sign-260nw-1188351907.jpg')`, // Add the path to your image here
                backgroundSize: "cover",
                backgroundPosition: "center",
                textAlign: "center",
                padding: 3,
                marginTop:5
            }}
        >
            <Typography
                variant="h3"
                component="h1"
                sx={{
                    fontWeight: "bold",
                    marginBottom: 2,
                    color: "#fff",
                    fontSize: "2.5rem",
                }}
            >
                Welcome to MyStore!
            </Typography>
            <Typography
                variant="h6"
                sx={{
                    marginBottom: 3,
                    color: "#f5f5f5",
                    fontSize: "1.2rem",
                }}
            >
                Your favorite place to shop amazing products at unbeatable prices.
            </Typography>
            <Button
                component={Link}
                to="/products"
                variant="contained"
                color="primary"
                sx={{
                    padding: "10px 20px",
                    fontSize: "1rem",
                    borderRadius: "5px",
                    textTransform: "none",
                    transition: "transform 0.3s ease, background-color 0.3s ease",
                    "&:hover": {
                        transform: "scale(1.1)",
                        backgroundColor: "#1976d2", 
                    },
                }}
            >
                Shop Now
            </Button>
        </Box>
    );
};

export default Home;
