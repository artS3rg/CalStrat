import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { jwtDecode } from 'jwt-decode'

export interface UserState {
  id : number
  email : string
  nickname: string
  idAim : number
  InitWeight : number
  CurWeight : number
  AimWeight : number
  IdActivity : number
  KcalPerDay : number
  RoleId : number
}

const initialState: UserState = {
  id : 0,
  email : "",
  nickname: "",
  idAim : 0,
  InitWeight : 0,
  CurWeight : 0,
  AimWeight : 0,
  IdActivity : 0,
  KcalPerDay : 0,
  RoleId : 0
}

export const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (data, action: PayloadAction<string>) => {
      const user = jwtDecode(action.payload)
      console.log(user)
    }
  }
})

export const { login } = authSlice.actions