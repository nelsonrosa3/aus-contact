import React from 'react';
import {
    Box,
    Button,
    CircularProgress,
    IconButton,
    InputAdornment,
    Paper,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import {Controller, useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import {useAppDispatch, useAppSelector} from "../../common/hooks/reduxHook";
import {toggleShowPassword} from "./loginSlice";
import {useLoginMutation} from "../../services/api/authAPI";

const LoginPage = () => {
    const {control, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {
            username: '',
            password: ''
        }
    });
    const navigate = useNavigate();
    const showPassword = useAppSelector(state => state.login.showPassword);
    const dispatch = useAppDispatch();
    const [login, {isLoading, data}] = useLoginMutation();

    const onSubmit = async (data) => {
        await login(data);

        // navigate("/home", {replace: true});
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Paper sx={{p: 3, width: "350px", height: "350px"}}>
                <Stack height={"100%"} justifyContent="space-around" alignItems="flex-start">
                    <Typography>Contacts</Typography>
                    <Controller
                        name="username"
                        control={control}
                        rules={{required: "Username is required"}}
                        render={({field}) => <TextField {...field} error={errors.username != null}
                                                        helperText={errors.username?.message} fullWidth label="Username"
                                                        disabled={isLoading}
                                                        variant="outlined" type="text"/>}
                    />
                    <Controller
                        name="password"
                        control={control}
                        rules={{required: "Password is required"}}
                        render={({field}) => <TextField {...field} error={errors.password != null}
                                                        helperText={errors.password?.message} fullWidth label="Password"
                                                        variant="outlined" type={showPassword ? 'text' : 'password'}
                                                        disabled={isLoading}
                                                        InputProps={{
                                                            endAdornment: <InputAdornment position="end"> <IconButton
                                                                aria-label="toggle password visibility"
                                                                onClick={() => dispatch(toggleShowPassword())}
                                                                edge="end"
                                                            >
                                                                {showPassword ? <VisibilityOff/> : <Visibility/>}
                                                            </IconButton></InputAdornment>,
                                                        }}/>}
                    />

                    <Button type="submit" fullWidth variant="contained">
                        {isLoading
                            ? <CircularProgress size={24} sx={{color: 'white'}}/>
                            : <Typography>LOGIN</Typography>}
                    </Button>
                </Stack>
            </Paper>
        </form>

    );
};

export default LoginPage;