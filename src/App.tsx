import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from './Pages/HomePage';
import { AccessDeniedPage } from './Pages/AccessDeniedPage';
import { ProfilePage } from './Pages/ProfilePage';
import { AdminPanel } from './Pages/AdminPanel';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './Components/Redux/hooks';
import { login } from './Components/Redux/user';
import { RootState } from './Components/Redux/store';

function App() {

  const dispatch = useAppDispatch()

  const selector = useAppSelector((state : RootState) => state.user)

  useEffect(() => {
    if(sessionStorage.getItem("jwt") != null && sessionStorage.getItem("jwt") != undefined){
      let data : string = sessionStorage.getItem("jwt")!
      dispatch(login(data))
    }
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/admin" element={selector.RoleId == 1 ? <AdminPanel /> : <AccessDeniedPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
