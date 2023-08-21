import React from "react";
import { Route, Redirect } from "react-router-dom";
import { IonRouterOutlet } from "@ionic/react";
import Home from "../pages/Home";
import Register from "../pages/Register/Register";
// Import other page components here

const AppRouter: React.FC = () => {
  return (
    <IonRouterOutlet>
      <Route exact path="/home" component={Home} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
    </IonRouterOutlet>
  );
};

export default AppRouter;
