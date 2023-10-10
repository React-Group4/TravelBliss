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
      <Header />
      <Router>
      <Routes>
        <Route path="/" Component={Main} ></Route>
        <Route path="/destination" Component={Destinations} ></Route>
        <Route path="/favorites" Component={Favorites} ></Route>
        <Route path="/about-us" Component={About_us } ></Route>
        </Routes>
    </Router>

      
      
      </>
      
  );
}

export default App;
