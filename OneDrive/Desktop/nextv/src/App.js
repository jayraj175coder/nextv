import React ,{useState}from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Colleges from './components/Colleges';
import Cutoff from './components/Cutoff';
import ContactUs from './components/ContactUs';
import AiAssistant from './components/AiAssistant';
import Discuss from './components/Discuss';
import Login from './components/Login';
import RegionDetails from './components/RegionDetails';
import './App.css';
import CollegeSearch from './components/CollegeSearch';
import ProtectedRoute from './components/ProtectedRoute';
import Noticeboard from './components/Noticeboard';
import PredictCollege from './components/PredictCollege';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
  <Router basename={process.env.PUBLIC_URL}>

      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/colleges" element={<Colleges />} />
          <Route path="/cutoff" element={<Cutoff />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/ai-assistant" element={<AiAssistant />} />
          
          <Route path="/contact-us" element={<ContactUs/>}/>
          <Route path="/colleges/:region" element={<RegionDetails/>} />
          <Route path="/find-your-college" element={<CollegeSearch/>}/>
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/noticeboard" element={<Noticeboard />} />
        <Route 
          path="/discuss" 
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Discuss />
            </ProtectedRoute>
          } 
        />
        <Route path="/Predictclg" element={<PredictCollege/>}/>
        <Route path="/" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
