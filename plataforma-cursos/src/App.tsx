import Dashboard from './pages/Dashboard';
import CourseView from './pages/CourseView.tsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/course/:id" element={<CourseView />} />
      </Routes>
    </Router>
  );
}

export default App;