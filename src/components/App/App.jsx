import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import Favorites from '../Favorites/Favorites';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import TrailDetails from '../TrailDetails/TrailDetails';
import Feedback from '../Feedback/Feedback';
import EditPage from '../EditPage/EditPage';
import Forecast from '../Forecast/Forcast';


import './App.css';

function App() {
  const dispatch = useDispatch();
  const user = useSelector(store => store.user.id)

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
    // dispatch({ type: 'FETCH_TRAILS' });
  }, []);

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/home" />

          {/* Visiting localhost:3000/about will show the about page. */}
          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/about"
          >
            <AboutPage />
          </Route>

          <Route
            exact
            path='/forecast'
          >
            <Forecast />
          </Route>

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/user"
          >
            <UserPage />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/favorites"
          >
            <Favorites />
          </ProtectedRoute>

          {/* When a value is supplied for the authRedirect prop the user will
            be redirected to the path supplied when logged in, otherwise they will
            be taken to the component and path supplied. */}
          <ProtectedRoute
            // with authRedirect:
            // - if logged in, redirects to "/user"
            // - else shows LoginPage at /login
            exact
            path="/login"
            authRedirect="/user"
          >
            <LoginPage />
          </ProtectedRoute>

          <ProtectedRoute
            // with authRedirect:
            // - if logged in, redirects to "/user"
            // - else shows RegisterPage at "/registration"
            exact
            path="/registration"
            authRedirect="/user"
          >
            <RegisterPage />
          </ProtectedRoute>

          <ProtectedRoute
            // with authRedirect:
            // - if logged in, redirects to "/user"
            // - else shows LandingPage at "/home"
            exact
            path="/home"
            authRedirect="/user"
          >
            <LandingPage />
          </ProtectedRoute>

          {/* <Route path="/details/:id" render={(props) => <TrailDetails id={props.match.params.id} />}> */}
            
            <Route path='/details/:id' render={(props) => <TrailDetails trail={props.match.params} id={props.match.params.id} /> }>
            {/* <TrailDetails /> */}
            </Route>

            {/* <ProtectedRoute> */}
            <Route path='/edit' >
              <EditPage />
            </Route>
            {/* </ProtectedRoute> */}

          {/* </Route> */}
          <ProtectedRoute>
          <Route path='/feedback/:id' render={(props) => <Feedback trail={props.match.params} id={props.match.params.id} /> }>
            {/* <Feedback path="/feedback" /> */}
          </Route>
          </ProtectedRoute>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
