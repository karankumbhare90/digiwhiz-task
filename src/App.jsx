import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Works from './components/Features/Works';
import ContactAlert from './components/Contact-Alert/ContactAlert';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import EmployeeDetails from './components/Employee Details/EmployeeDetails';
import './App.css'

function App() {
  return (
    <div className="min-h-screen max-w-[100vw]">
      <div className='min-w-full overflow-x-hidden'>
        <Navbar />
        <Banner />
        <ContactAlert />
      </div>
      <div id='#about'>
        <About />
      </div>
      <Works />
      <EmployeeDetails />
      <Footer />
    </div>
  );
}

export default App;