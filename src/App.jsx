import './App.css';
import { Navbar } from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Footer } from './layouts/Footer';
function App() {

  return (
    <>
    <Navbar />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
    <Footer />
    </>
  )
}

export default App
