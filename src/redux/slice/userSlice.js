import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: null,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setReduxUser: (state, action) => {
            // console.log(action);
            state.value = action.payload    // state.value to be replaced by action.payload
        },
        logoutReduxUser: (state) => {
            state.value = null
            localStorage.clear()
        }
    },
})

// Action creators are generated for each case reducer function
export const { setReduxUser, logoutReduxUser } = userSlice.actions

export default userSlice.reducer