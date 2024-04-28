import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from './Pages/HomePage';
import { AccessDeniedPage } from './Pages/AccessDeniedPage';
import { ProfilePage } from './Pages/ProfilePage';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/home"/>}/>
      <Route path="/home" element={<HomePage/>}/>
      <Route path="/profile" element={<ProfilePage/>}/>
      <Route path="/access" element={<AccessDeniedPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
