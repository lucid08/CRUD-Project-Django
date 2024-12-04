import React from "react"
import {BrowserRouter, Navigate, Route, Router, Routes} from "react-router-dom"
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

function logout() {
  localStorage.clear();
  return <Navigate to="/login" />
}

function registerAndLogout() {
  localStorage.clear();
  return <Register/>
}
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <ProtectedRoute>
              <Home/>
            </ProtectedRoute>
          } />
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<registerAndLogout/>} />
          <Route path="/logout" element={logout} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
