// App.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import About from './assets/Pages/about.jsx';
import PostBlog from './assets/Pages/post.jsx';
import Home from './assets/Pages/home.jsx';
import BlogList from './assets/Pages/blogs.jsx';
import Login from './assets/Pages/login.jsx';
import Admin from './assets/Pages/admin.jsx';

import './App.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blogs' element={<BlogList />} />
        
        {/* Redirect /blog to /blogs */}
        <Route path='/blog' element={<Navigate to="/blogs" replace />} />
        
        <Route path='/post' element={<PostBlog />} />
        <Route path='/login' element={<Login />} />
        <Route path='/admin' element={<Admin />} />
        
        {/* 404 fallback route */}
        <Route path='*' element={<h2>404 - Page Not Found</h2>} />
      </Routes>
    </Router>
  );
}

export default App;
