import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import HomePage from './pages/HomePage/HomePage'
import AddOrder from './pages/AddOrder/AddOrder'
import EditOrder from './pages/EditOrder/EditOrder'
import Navbar from './layout/Navbar/Navbar'
import Footer from './layout/Footer/Footer'

import './App.css';

function App() {
  return (
    <div className="App">

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/addorder" element={<AddOrder/>} />
          <Route path="/editorder/:id" element={<EditOrder/>} />
        </Routes>
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;
