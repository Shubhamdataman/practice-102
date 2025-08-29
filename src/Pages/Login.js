import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import shubham from "../Pages/skk.jpeg";

import {
  Box,
  Button,
  TextField,
  Typography,
  Alert,
  Container,
} from "@mui/material";
import "react-toastify/dist/ReactToastify.css";

import { toast } from "react-toastify";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    // if (email === "shubham66@gmail.com" && password === "11111111") {
    login({ name: "Shubham Keshri", email, password, image: shubham });
    toast.success("Login Success", {
      position: "top-center",
    });
    setError("");
    navigate("/");
    // } else {
    //     setError("Invalid email or password.");
    // }
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: 20 }}>
      <Box
        sx={{
          mt: 8,
          p: 3,
          border: "1px solid #ddd",
          borderRadius: 2,
          boxShadow: 1,
          backgroundColor: "#fff",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>
        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}
        <form onSubmit={handleSubmit}>
          <Box sx={{ mb: 3 }}>
            <TextField
              label="Email"
              type="email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Box>
          <Box sx={{ mb: 3 }}>
            <TextField
              label="Password"
              type="password"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Box>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Login
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Login;
