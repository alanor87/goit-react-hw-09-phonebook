import React, { Suspense, lazy, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import NavHeader from './components/NavHeader';
import authOps from './redux/auth/auth-operations';
import { useDispatch } from 'react-redux';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

const DefaultView = lazy(() => import('./views/DefaultView'))
const LoginView = lazy(() => import('./views/LoginView'))
const RegisterView = lazy(() => import('./views/RegisterView'))
const ContactsView = lazy(() => import('./views/ContactsView'))
const DefaultLoggedInView = lazy(() => import('./views/DefaultLoggedInView'))

export default function App() {

  const dispatch = useDispatch();
  useEffect(() => dispatch(authOps.getCurrentUser()), [dispatch])

  return (
    <>
      <NavHeader />
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <PublicRoute path='/login' component={LoginView} redirectTo='/contacts' restricted />
          <PublicRoute path='/register' component={RegisterView} redirectTo='/contacts' restricted />
          <PrivateRoute path='/contacts' component={ContactsView} redirectTo='/login' />
          <PrivateRoute path='/home' component={DefaultLoggedInView} redirectTo='/login' />
          <Route component={DefaultView} />
        </Switch>
      </Suspense>
    </>
  );
}
