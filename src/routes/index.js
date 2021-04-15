import React from 'react';
import { Redirect } from 'react-router-dom';

// Pages Component
import Home from '../pages/home'
import Profile from '../pages/profile'


//routes
const publicRoutes = [
  { path: '/home', component: Home },
  { path: '/profile/:username', component: Profile },

  // this route should be at the end of all other routes
  { path: '/', exact: true, component: () => <Redirect to='/home' /> }
];

export { publicRoutes };
