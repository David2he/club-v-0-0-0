import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { IonRouterOutlet } from "@ionic/react";

import Home from "../pages/Home";
import Register from "../pages/Register/Register";
import RegisterForm from "../pages/RegisterForm/RegisterForm";
import HomePageMenber from "../pages/HomePageMenber/HomePageMenber";
import Brand from "../pages/Brand/Brand";
import Refferal from "../pages/Refferal/Refferal";

import { ProtectedRoute } from "../utils/Routing/ProtectedRoutes";

const AppRouter: React.FC = () => {
    return (
        <IonRouterOutlet animated={false}>
            <Route exact path='/home' component={Home} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/RegisterForm' component={RegisterForm} />
            <ProtectedRoute
                exact
                path='/homePageMenber'
                authenticatedComponent={HomePageMenber}
                unauthenticatedComponent={Home}
            />
            <ProtectedRoute exact path='/' authenticatedComponent={HomePageMenber} unauthenticatedComponent={Home} />
            <ProtectedRoute exact path='/Brand/:id' authenticatedComponent={Brand} unauthenticatedComponent={Home} />
            <ProtectedRoute exact path='/Refferral' authenticatedComponent={Refferal} unauthenticatedComponent={Home} />
        </IonRouterOutlet>
    );
};

export default AppRouter;
