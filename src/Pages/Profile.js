import React from "react";
import { useAuth } from "../context/AuthContext";
import { Box, Typography, Container, Card, CardContent } from "@mui/material";

const Profile = () => {
    const { user } = useAuth();

    return (
        <Container maxWidth="sm">
            <Box
                sx={{
                    mt: 12,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                }}
            >
                <Typography variant="h4" gutterBottom>
                    Your Profile
                </Typography>
                <Card
                    sx={{
                        width: "100%",
                        boxShadow: 3,
                        borderRadius: 2,
                        backgroundColor: "#f9f9f9",
                        p: 2,
                    }}
                >
                    <CardContent>
                        <Typography variant="h6" sx={{ mb: 1 }}>
                            Name:
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 2 }}>
                            {user.name}
                        </Typography>

                        <Typography variant="h6" sx={{ mb: 1 }}>
                            Email:
                        </Typography>
                        <Typography variant="body1">
                            {user.email}
                        </Typography>
                        <Typography variant="h6" sx={{ mb: 1 }}>
                            Password:
                        </Typography>
                        <Typography variant="body1">
                            {user.password}
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </Container>
    );
};

export default Profile;
