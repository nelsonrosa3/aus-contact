import React from 'react';
import {Grid} from "@mui/material";
import {Outlet} from "react-router-dom";

const AuthLayout = () => {
    return (
        <Grid container height="100vh" justifyContent="center" alignItems="center">
            <Grid item xs="auto">
                <Outlet/>
            </Grid>
        </Grid>
    );
};

export default AuthLayout;