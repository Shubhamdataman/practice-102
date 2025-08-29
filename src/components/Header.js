import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import "react-toastify/dist/ReactToastify.css";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Badge,
  Avatar,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { toast } from "react-toastify";

const Header = () => {
  const { user, isLoggedIn, logout } = useAuth();
  const { cart } = useCart();

  function logoutHandler() {
    logout();
    toast.success("Logout Success", {
      position: "top-center",
    });
  }
  

  return (
    <AppBar
      position="fixed"
      sx={{ backgroundColor: "black", border: "1px solid white" }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            flexGrow: 1,
            textDecoration: "none",
            color: "inherit",
          }}
        >
          MyStore
        </Typography>

        <Button
          component={Link}
          to="/products"
          color="inherit"
          sx={{ textTransform: "none" }}
        >
          Products
        </Button>

        <IconButton component={Link} to="/cart" color="inherit" sx={{ mr: 2 }}>
          <Badge badgeContent={cart.length} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>

        {isLoggedIn ? (
          <>
            <IconButton
              component={Link}
              to="/profile"
              color="inherit"
              sx={{ mr: 2 }}
            >
              <Avatar
                alt={user.name}
                src={user.image} // User's image URL
                sx={{ width: 32, height: 32 }}
              >
                {user.name.charAt(0)} {/* Fallback to initials */}
              </Avatar>
            </IconButton>
            <Button
              onClick={logoutHandler}
              color="inherit"
              sx={{ textTransform: "none" }}
            >
              Logout
            </Button>
          </>
        ) : (
          <Button
            component={Link}
            to="/login"
            color="inherit"
            sx={{ textTransform: "none" }}
          >
            Login
          </Button>
        )}
       
      </Toolbar>
    </AppBar>
  );
};

export default Header;
