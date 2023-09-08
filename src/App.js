import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
      <footer>
        <p>Copyright &copy; 2023 Chudisoft. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
