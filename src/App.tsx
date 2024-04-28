import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from './Pages/HomePage';
import { AccessDeniedPage } from './Pages/AccessDeniedPage';
import { ProfilePage } from './Pages/ProfilePage';
import { AdminPanel } from './Pages/AdminPanel';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/home"/>}/>
      <Route path="/home" element={<HomePage/>}/>
      <Route path="/profile" element={<ProfilePage/>}/>
      <Route path="/access" element={<AccessDeniedPage/>}/>
      <Route path="/admin" element={<AdminPanel/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
