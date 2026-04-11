import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProgressBar from './components/ProgressBar';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import CaseStudy from './pages/CaseStudy';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <ProgressBar />
      <Navbar />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work/:id" element={<CaseStudy />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
