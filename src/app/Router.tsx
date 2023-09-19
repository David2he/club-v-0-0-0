import React from "react";
import { Route, Redirect } from "react-router-dom";
import { IonRouterOutlet } from "@ionic/react";
import Home from "../pages/Home";
import Register from "../pages/Register/Register";
import RegisterForm from "../pages/RegisterForm/RegisterForm";
// Import other page components here

const AppRouter: React.FC = () => {
    return (
        <IonRouterOutlet>
            <Route exact path='/home' component={Home} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/RegisterForm' component={RegisterForm} />
            <Route exact path='/'>
                <Redirect to='/home' />
            </Route>
        </IonRouterOutlet>
    );
};

export default AppRouter;
