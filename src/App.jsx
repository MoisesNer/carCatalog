import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Home from './Pages/Home';
import { Cars }  from './Pages/Cars';
import Error from './Pages/Error';
import SingleCar from './Pages/SingleCar';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
      <Router>
        <Navbar/>

        <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/cars' exact component={Cars}/>
        <Route path='/cars/:slug' exact component={SingleCar}/>
        <Route path='/' component={Error}/>
        </Switch>

      </Router>
    </>
  );
}

export default App;
