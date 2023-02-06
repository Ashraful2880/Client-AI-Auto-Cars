import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Footer from './Page/Shared/Footer/Footer';
import About from './Page/About/About';
import Header from './Page/Shared/Header/Header';
import Register from './Page/Register/Register';
import Login from './Page/Login/Login';
import Error from './Page/Error/Error';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Private/PrivateRoute';
import Purchase from './Page/Purchase/Purchase';
import Explore from './Page/Explore/Explore';
import Dashboard from './Page/Dashboard/Dashboard/Dashboard';
import ManageOrders from './Page/Dashboard/ManageOrders/ManageOrders';
import MyOrders from './Page/Dashboard/MyOrders/MyOrders';
import RateUs from './Page/Dashboard/RateUs/RateUs';
import Home from './Page/Home/Home/Home';
import Success from './Page/Dashboard/MyOrder/Success';
import OurBlogs from './Page/OurBlogs/OurBlogs';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/home'>
              <Home />
            </Route>
            <Route path='/explore'>
              <Explore />
            </Route>
            <PrivateRoute path='/purchase/:orderId'>
              <Purchase />
            </PrivateRoute>
            <Route path='/dashboard'>
              <Dashboard />
            </Route>
            <Route path='/myOrders'>
              <MyOrders />
            </Route>
            <Route path='/manageOrders'>
              <ManageOrders />
            </Route>
            <Route path='/aboutus'>
              <About />
            </Route>
            <Route path='/blogs'>
              <OurBlogs />
            </Route>
            <Route path='/userRating'>
              <RateUs />
            </Route>
            <Route path='/signup'>
              <Register />
            </Route>
            <Route path='/signin'>
              <Login />
            </Route>
            <Route path='/success'>
              <Success />
            </Route>
            <Route path='*'>
              <Error />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
