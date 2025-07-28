import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ReportIssuePage from './pages/ReportIssuePage';
import DashboardPage from './pages/DashboardPage';
import VolunteerPage from './pages/VolunteerPage';
import BlogPage from './pages/BlogPage';
import AdminPage from './pages/AdminPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/report" element={<ReportIssuePage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/volunteer" element={<VolunteerPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;