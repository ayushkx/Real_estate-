import './App.css';
import Filter from './components/Filter';
import Properties from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
       <Navbar/>
       <Filter/>
       <Properties/>
    </div>
  );
}

export default App;
