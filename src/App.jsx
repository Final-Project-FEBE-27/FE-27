import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import Index from './pages/Index';
import Login from './pages/Login';
import LoginAdmin from './pages/LoginAdmin';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import UploadForum from './pages/UploadForum';
import DetailForum from './pages/DetailForum';
import CategoryPage from './pages/CategoryPage';
import AdminPanel from './pages/AdminPanel';
import UserDetail from './components/admin/UserDetail';
import PrivateRoute from './components/PrivateRoute';
import PrivateRouteAdmin from './components/PrivateRouteAdmin';
import Logout from './pages/Logout';
import MyProfile from './pages/MyProfile';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/loginadmin" element={<LoginAdmin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/yourforum/:id" element={<DetailForum />} />
          <Route path="/upload" element={<UploadForum />} />
          <Route path="/upload" element={<UploadForum />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/kategori/:kategori" element={<CategoryPage />} />
          <Route path="/profile" element={<MyProfile />} />
        </Route>
        <Route path="/" element={<PrivateRouteAdmin />}>
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/editUser/:id" element={<UserDetail />} />
          <Route path="/logout" element={<Logout />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App;