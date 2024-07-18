import './App.scss';
import { BrowserRouter as Router , Routes ,Route } from 'react-router-dom';
import HomePage from './components/Home';
import NotFound from './components/404';
import Signup from './Auth/Auth';
const AuthenticatedRoutes= ()=>{
  return (
    <Routes>
      <Route path="/home" element={<HomePage/>} />
    </Routes>
  );
}

const App= ()=> {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Signup/>} />
        <Route path="*" element={<NotFound/>} />
        <Route path="/*" element={<AuthenticatedRoutes />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
