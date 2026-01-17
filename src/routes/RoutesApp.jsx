import React, { Suspense } from "react"
import { Routes, Route, Navigate } from "react-router"
import ProtectedRoutes from "./ProtectedRoutes.jsx"

const Register = React.lazy( () => import('../pages/register/RegisterPage'))
const Login = React.lazy( () => import('../pages/login/LoginPage.jsx'))
const Home = React.lazy( () => import('../pages/home/HomePage.jsx'))
const NotFound = React.lazy( () => import("../pages/not-found/NotFoundPage.jsx"))

const RoutesApp = () => {

  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Navigate to="/register" />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/dashboard" element={<Home/>} />
          
        </Route>
      
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Suspense>
  )
}
 
export default RoutesApp;