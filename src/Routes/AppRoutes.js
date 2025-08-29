import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import ProductList from "../components/ProductList";
import Cart from "../components/Cart";
import ProtectedRoutes from "./ProtectedRoutes";
import Profile from "../Pages/Profile";
import Login from "../Pages/Login";


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/cart" element={<Cart />} />
            <Route
                path="/profile"
                element={
                    <ProtectedRoutes>
                        <Profile/>
                    </ProtectedRoutes>
                }
            />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
    );
};

export default AppRoutes;
