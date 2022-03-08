import './App.css';
import {
  Route,
  Routes,
} from 'react-router-dom';
import { General } from './pages/General';

function App() {
  return (
    <Routes>
      <Route path="/general" element={<General />} />
    </Routes>
  );
}

export default App;
