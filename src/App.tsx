import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from './Pages/HomePage'
import { ProfilePage } from './Pages/ProfilePage'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/home"/>}/>
      <Route path="/home" element={<HomePage/>}/>
      <Route path="/profile" element={<ProfilePage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
