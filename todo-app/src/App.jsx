import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import TodosPage from './pages/TodosPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import './App.css'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/todos" replace />} />
        <Route path="/todos" element={<TodosPage />} />
        <Route path="/about" element={<ContactPage />} />
      </Routes>
    </div>
  )
}

export default App
