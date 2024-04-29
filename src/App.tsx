import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from './Pages/HomePage';
import { AccessDeniedPage } from './Pages/AccessDeniedPage';
import { ProfilePage } from './Pages/ProfilePage';
import { AdminPanel } from './Pages/AdminPanel';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './Components/Redux/hooks';
import { UserState, login } from './Components/Redux/user';
import { RootState } from './Components/Redux/store';

function App() {

  const dispatch = useAppDispatch()

  const selector : UserState = useAppSelector((state: RootState) => state.user)

  useEffect(() => {
    if(sessionStorage.getItem("jwt") != null && sessionStorage.getItem("jwt") != undefined){
      let data : string = sessionStorage.getItem("jwt")!
      dispatch(login(data))
    }
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={(selector.RoleId == 0) ? <AccessDeniedPage /> : <AdminPanel />} />
        <Route path="/" element={(selector.Email == "") ? <Navigate to="/home" /> : <Navigate to="/profile" />} />
        <Route path="/home" element={(selector.Email == "") ? <HomePage /> : <Navigate to="/profile" />}/>
        <Route path="/profile" element={(selector.Email == "") ? <Navigate to="/home" /> : <ProfilePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
