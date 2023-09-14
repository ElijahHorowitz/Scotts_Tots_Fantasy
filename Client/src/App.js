import './App.css';
import NavBar from './components/navbar';
import { BrowserRouter as Router, Routes, Route} from  'react-router-dom';

import HomePage from './page/homepage';

const App = () => {
  return (
    <Router>
      <div className="bg-slate-200 dark:bg-slate-900 h-screen min-w-screen text-white">
        <div>
          <NavBar />
        </div>

        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
