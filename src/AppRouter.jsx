import React from 'react'
import { Routes, Route } from 'react-router-dom'
import App from './App' // Your existing homepage
import ServicesOverview from './pages/ServicesOverview'
import LocationsOverview from './pages/LocationsOverview'

// Area Pages
import Brownsville from './pages/areas/Brownsville'
import McAllen from './pages/areas/McAllen'
import Edinburg from './pages/areas/Edinburg'
import Harlingen from './pages/areas/Harlingen'
import Mission from './pages/areas/Mission'
import Pharr from './pages/areas/Pharr'

// Service Pages
import SprayFoam from './pages/services/SprayFoam';
import BlownIn from './pages/services/BlownIn';
import Attic from './pages/services/Attic';
import Wall from './pages/services/Wall';
import Commercial from './pages/services/Commercial';
import Soundproofing from './pages/services/Soundproofing';
import Specialty from './pages/services/Specialty';
import Roof from './pages/services/Roof';
import EnergyEfficiency from './pages/services/EnergyEfficiency';

// Import new pages as you create them
import About from './pages/About'
import Quote from './pages/Quote'

const AppRouter = () => {
  return (
    <>
      <Routes>
        {/* Homepage - your existing App.jsx */}
        <Route path="/" element={<App />} />
      
      {/* Overview Pages */}
      <Route path="/services" element={<ServicesOverview />} />
      <Route path="/locations" element={<LocationsOverview />} />
      
      {/* Service Pages */}
      <Route path="/services/spray-foam" element={<SprayFoam />} />
      <Route path="/services/blown-in" element={<BlownIn />} />
      <Route path="/services/attic" element={<Attic />} />
      <Route path="/services/wall" element={<Wall />} />
      <Route path="/services/commercial" element={<Commercial />} />
      <Route path="/services/soundproofing" element={<Soundproofing />} />
      <Route path="/services/specialty" element={<Specialty />} />
      <Route path="/services/roof" element={<Roof />} />
      <Route path="/services/energy-efficiency" element={<EnergyEfficiency />} />
      
      {/* Area Pages */}
      <Route path="/areas/mcallen" element={<McAllen />} />
      <Route path="/areas/edinburg" element={<Edinburg />} />
      <Route path="/areas/brownsville" element={<Brownsville />} />
      <Route path="/areas/harlingen" element={<Harlingen />} />
      <Route path="/areas/mission" element={<Mission />} />
      <Route path="/areas/pharr" element={<Pharr />} />
      
      {/* Other Pages */}
      <Route path="/about" element={<About />} />
      <Route path="/quote" element={<Quote />} />
      {/* <Route path="/services" element={<Services />} /> */}
      {/* <Route path="/areas" element={<Areas />} /> */}
    </Routes>
    </>
  )
}

export default AppRouter