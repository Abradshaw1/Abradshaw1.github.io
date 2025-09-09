import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Publications from './pages/Publications';

function App() {
  return (
    <Router basename="/">
      <div className="min-h-screen bg-stone-50">
        <Navigation />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/publications" element={<Publications />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;