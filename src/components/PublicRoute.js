import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isAuthentificated } from '../redux/auth/auth-selectors';

/**
 * - Если маршрут ограниченный, и пользователь залогинен, рендерит редирект на /todos
 * - В противном случае рендерит компонент
 */
const PublicRoute = ({
    component: Component,
    redirectTo,
    ...routeProps
}) => {
    const isLoggedIn = useSelector(isAuthentificated);
    return (
        <Route
            {...routeProps}
            render={props =>
                isLoggedIn && routeProps.restricted ? (
                    <Redirect to={redirectTo} />
                ) : (
                    <Component {...props} />
                )
            }
        />
    )
};

export default PublicRoute;