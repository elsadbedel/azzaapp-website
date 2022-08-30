import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Admin from './components/Admin';
import Cookies from './components/Cookies';
import EditProduct from './components/EditProduct';
import Ekler from './components/Ekler';
import Error from './components/Error';
import Home from './components/Home';
import Login from './components/Login';
import National from './components/National';
import Orders from './components/Orders';
import Pasta from './components/Pasta';
import PrivateRoute from './utils/PrivateRouteAdmin';
import PrivateRouteUser from './utils/PrivateRouteUser';

import './App.css';

function App() {
  return (
    <div className="App" >
      <Router>

        <Routes >

          <Route path='/' element={<Login />} />

          <Route element={<PrivateRouteUser />} >
            <Route path='/home/:filterKey' element={<Home />} />
            <Route path='/pasta/:filterKey' element={<Pasta />} />
            <Route path='/cookies/:filterKey' element={<Cookies />} />
            <Route path='/national/:filterKey' element={<National />} />
            <Route path='/ekler/:filterKey' element={<Ekler />} />
            <Route path='/orders' element={<Orders />} />
            <Route path='*' element={<Error />} />
          </Route>

          <Route element={<PrivateRoute />}>
            <Route path='/admin/:filterKey' element={<Admin />} />
            <Route path='/edititem/:id' element={<EditProduct />} />
          </Route>

        </Routes>

      </Router>

    </ div>
  );
}
export default App;
