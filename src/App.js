import './App.css';
import {
  Route,
  Routes,
} from 'react-router-dom';
import { General } from './pages/General';
import { RobotsProvider } from './hooks/useRobots';

function App() {
  return (
    <RobotsProvider>
      <Routes>
        <Route path="/general" element={<General />} />
      </Routes>
    </RobotsProvider>
  );
}

export default App;
