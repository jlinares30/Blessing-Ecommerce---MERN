import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import ServicesPage from './pages/ServicesPage'
import ServicesDetailPage from './pages/ServiceDetailPage'
import ReservationsPage from './pages/ReservationsPage'
import ProfilePage from './pages/ProfilePage'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './ProtectedRoute'



function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/services/:_id" element={<ServicesDetailPage />} />
            <Route path="/reservations" element={<ReservationsPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
