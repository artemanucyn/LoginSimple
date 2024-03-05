import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './Pages/Login';
import PasswordForgot from './Pages/ForgotPassword';
import PasswordReset from './Pages/ResetPassword';
import AuthContainer from './Containers/AuthContainer';

import './App.css';

function App() {
  return (
    <>
      <AuthContainer>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/reset-password" element={<PasswordReset />}/>
            <Route exact path="/forgot-password" element={<PasswordForgot />}/>
          </Routes>
        </BrowserRouter>
      </AuthContainer>
    </>
  );
}

export default App;
