import './App.css';

import { GiHamburgerMenu } from 'react-icons/gi';
import Navbar from './components/Navbar';
import { useState } from 'react';

function App() {
  const [showNav, setShowNav] = useState(false);

  return <div className='App'>
    <header><GiHamburgerMenu onClick={() => setShowNav(!showNav)}/></header>
    {showNav && <Navbar />}
  </div>;
}

export default App;
