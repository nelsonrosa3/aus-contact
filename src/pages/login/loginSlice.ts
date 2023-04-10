import { createSlice } from '@reduxjs/toolkit'

export interface loginState {
    showPassword: boolean
}

const initialState: loginState = {
    showPassword: false,
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        toggleShowPassword: (state) => {
            state.showPassword = !state.showPassword
        }
    },
})

// Action creators are generated for each case reducer function
export const { toggleShowPassword } = loginSlice.actions

export default loginSlice.reducer