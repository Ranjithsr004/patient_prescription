import { Route, Routes } from 'react-router-dom';
import './App.css';
import Add_Pres from './components/Add_Pres/Add_Pres';
import Home from './components/Home/Home';
import PatientDetails from './components/PatientDetails/PatientDetails';
import ViewPatient from './components/ViewPatient/ViewPatient';
import Sidebar from './components/Sidebar/Sidebar';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
  
    <div className="app-container">
        <Sidebar />
        <Navbar />
      <Routes>
        <Route path="/" element={
          <div>
            <div className="home-content">
              {
                <PatientDetails />
              }
            </div>
          </div>
        } />
        <Route path="/addpres" element={<Add_Pres />} />
        <Route path="/viewpres" element={<ViewPatient />} />
      </Routes>
    </div>
  );
}

export default App;
