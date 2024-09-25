import PlagiarismDetector from './pages/PlagiarismDetector.tsx';
import Home from './pages/Home.tsx';
import { Routes, Route } from "react-router-dom";
import ComingSoon from './pages/ComingSoon.tsx';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plagiarism-check" element={<PlagiarismDetector />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
      </Routes>
    </div>
  );
}

export default App;
