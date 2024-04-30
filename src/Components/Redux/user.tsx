import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { jwtDecode } from 'jwt-decode'

export interface UserState {
  Id : number
  Email : string
  Nickname: string
  IdAim : number
  InitWeight : number
  CurWeight : number
  AimWeight : number
  IdActivity : number
  KcalPerDay : number
  RoleId : number
  GenderId : number
  Height : number
}

const initialState: UserState = {
  Id : 0,
  Email : "",
  Nickname: "",
  IdAim : 0,
  InitWeight : 0,
  CurWeight : 0,
  AimWeight : 0,
  IdActivity : 0,
  KcalPerDay : 0,
  RoleId : 0,
  GenderId : 0,
  Height : 0
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      const jwt_data : UserState = jwtDecode(action.payload)
      state.Id = jwt_data.Id
      state.Email = jwt_data.Email
      state.Nickname = jwt_data.Nickname
      state.IdAim = jwt_data.IdAim
      state.InitWeight = jwt_data.InitWeight
      state.CurWeight = jwt_data.CurWeight
      state.AimWeight = jwt_data.AimWeight
      state.IdActivity = jwt_data.IdActivity
      state.KcalPerDay = jwt_data.KcalPerDay
      state.RoleId = jwt_data.RoleId
      state.GenderId = jwt_data.GenderId
      state.Height = jwt_data.Height
    },

    logout: (state) => {
      state = initialState
      sessionStorage.clear()
    }
  }
})

export const { login, logout } = userSlice.actions