// import logo from './logo.svg';
import './App.css';
import Login from './pages/login.js'
import Dashboard from './pages/dashboard';
import { BrowserRouter as Router,
          Switch,
          Route,
          Link, Routes } from "react-router-dom";


function App() {

  return (
    <Router>
      <Routes>
          <Route path="/" element={<Login />}>
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="contact" element={<Contact />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
