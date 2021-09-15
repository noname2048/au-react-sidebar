import './App.css';

import { GiHamburgerMenu } from 'react-icons/gi';
import Navbar from './components/Navbar';

function App() {
  return <div className='App'>
    <header><GiHamburgerMenu /></header>
    <Navbar />
  </div>;
}

export default App;
