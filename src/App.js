import logo from './logo.svg';
import './App.css';
import Header from './header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Destinations from './destinations';
import Favorites from './favorites';
import About_us from './about-us';
import Main from './main';





function App() {
  return (
    <>
    <div className="background-image">
        <Header />
        
        <Router>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/destination" element={<Destinations />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/about-us" element={<About_us />} />
          </Routes>
        </Router>
        <br />
        <br />
        <footer />
        </div>
    </>
  );
}

export default App;