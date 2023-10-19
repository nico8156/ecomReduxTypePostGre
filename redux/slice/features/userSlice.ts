import { User } from '@/types/globalTypes'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface CurrentUserState {
  currentUser: User | null
}

const initialState: CurrentUserState | null = {
  currentUser: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state!.currentUser = action.payload
    },
    logoutUser: (state) => {
      state!.currentUser = null
    },
  }
})

export const { loginUser, logoutUser } = userSlice.actions

export default userSlice.reducer