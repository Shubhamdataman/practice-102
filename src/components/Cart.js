import React from "react";
import { useCart } from "../context/CartContext";
import {
    Box,
    Typography,
    Card,
    CardContent,
    CardActions,
    Button,
    Grid,
    Divider,
} from "@mui/material";

const Cart = () => {
    const { cart, removeFromCart, cartTotal, clearCart } = useCart();

    return (
        <Box sx={{ p: 2,marginTop:7 }}>
            <Typography variant="h4" gutterBottom>
                Your Cart
            </Typography>
            {cart.length === 0 ? (
                <Typography variant="body1" color="text.secondary">
                    Your cart is empty.
                </Typography>
            ) : (
                <Grid container spacing={3}>
                    {cart.map((item) => (
                        <Grid item xs={12} sm={6} md={4} key={item.id}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h6">{item.name}</Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Price: Rs.{item.price}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button
                                        size="small"
                                        color="error"
                                        variant="outlined"
                                        onClick={() => removeFromCart(item.id)}
                                    >
                                        Remove
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            )}
            {cart.length > 0 && (
                <>
                    <Divider sx={{ my: 3 }} />
                    <Typography variant="h5" sx={{ mb: 2 }}>
                        Total: Rs.{cartTotal}
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={clearCart}
                        sx={{ mr: 2 }}
                    >
                        Clear Cart
                    </Button>
                </>
            )}
        </Box>
    );
};

export default Cart;
