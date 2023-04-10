import React from 'react';
import {Grid, Typography} from "@mui/material";
import {Outlet} from "react-router-dom";

const NotFoundPage = () => {
    return (
        <Grid container height="100vh" justifyContent="center" alignItems="center">
            <Grid item xs="auto">
                <Typography color="black">404 PAGE NOT FOUND</Typography>
            </Grid>
        </Grid>
    );
};

export default NotFoundPage;