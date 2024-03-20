import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import Service from './pages/Service';
import Pricing from './pages/Pricing';
import Career from './pages/Career';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import OurTeamPage from './pages/OurTeamPage';

import AboutCompany from './components/About/AboutCompany';
import WhyChooseUs from './components/About/WhyChooseUs';
import { Footer, OurPlatform } from './components';

import './components/HomeComponent/blob.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<Service />} />
        <Route path="/about" element={<AboutCompany />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/career" element={<Career />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ourteam" element={<OurTeamPage />} />
        <Route path="/whychooseus" element={<WhyChooseUs />} />
        <Route path="/platforms" element={<OurPlatform />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
