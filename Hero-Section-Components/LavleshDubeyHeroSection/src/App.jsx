import React from 'react';
import background from "./assets/background.png";
import Navbar from './components/Navbar';
import Herosection from './components/Herosection';

const App = () => {
  return (
    <div style={{ background: `url(${background})` }} className="h-screen w-full text-white overflow-clip">
      <Navbar />
      <Herosection />
    </div>
  )
}

export default App;