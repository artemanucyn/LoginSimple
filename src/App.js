import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Login from './Pages/Login'
import PasswordForgot from './Pages/ForgotPassword'
import PasswordReset from './Pages/ResetPassword'

import { AuthLayout } from './Layouts'

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <AuthLayout>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/reset-password" element={<PasswordReset />} />
          <Route exact path="/forgot-password" element={<PasswordForgot />} />
        </Routes>
      </AuthLayout>
    </BrowserRouter>
  )
}

export default App
