import './App.css';
import { Routes, Route } from "react-router-dom";
import Index from './pages/Index';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import UploadForum from './pages/UploadForum';
import DetailForum from './pages/DetailForum';
import CategoryPage from './pages/CategoryPage';
import AdminPanel from './pages/AdminPanel';
import UserDetail from './components/admin/UserDetail';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/editUser/:id" element={<UserDetail />} />
        <Route path="/login/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/detail/:id" element={<DetailForum />} />
        <Route path="/upload" element={<UploadForum />} />
        <Route path="/category/:kategori" element={<CategoryPage />} />
      </Routes>
    </div>
  )
}

export default App;