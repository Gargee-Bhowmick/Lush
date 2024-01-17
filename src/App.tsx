import { Routes, Route } from 'react-router-dom';
import './globals.css';
import SigninForm from './auth/forms/SigninForm';
import SignupForm from './auth/forms/SignupForm';
import { Home } from './root/pages';
import AuthLayout from './auth/AuthLayout';
import RootLayout from './root/RootLayout';
const App = () => {
  return (
    <main className="flex h-screen">
        <Routes>
          {/* public routes */}
          <Route element = { <AuthLayout />}>  {/* utilising the layouts */}
            <Route path="/sign-in" element= { <SigninForm /> } />
            <Route path="/sign-up" element= { <SignupForm /> } />
          </Route>
          
          {/* private routes (available only after loging in) */}
          <Route element = { <RootLayout /> }>
            <Route index element={<Home />} />
          </Route>

        </Routes>
    </main>
  )
}

export default App