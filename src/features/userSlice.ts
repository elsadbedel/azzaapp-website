import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type User = {
    name: string;
    password: string;
}
export interface IUser {
    users: User[]
}

const initialState: IUser = {
    users: []
}
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<User>) => {
            state.users.push(action.payload)
        }
    }
})
export const { addUser } = userSlice.actions
export default userSlice.reducer