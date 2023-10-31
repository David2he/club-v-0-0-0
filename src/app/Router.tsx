import React from "react";
import { Route, Redirect  } from "react-router-dom";
import { IonRouterOutlet } from "@ionic/react";
import { useHistory } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register/Register";
import RegisterForm from "../pages/RegisterForm/RegisterForm";
import HomePageMenber from "../pages/HomePageMenber/HomePageMenber";
import { AuthProvider } from "../services/contexts/AuthContext";
import { ProtectedRoute } from "./ProtectedRoutes";



const AppRouter: React.FC = () => {
    return (
        <AuthProvider>
            <IonRouterOutlet>
                <Route exact path="/home" component={Home} />
                <Route exact path="/register" component={Register} />

                <Route exact path="/RegisterForm" component={RegisterForm} />
                <ProtectedRoute exact path="/homePageMenber" component={HomePageMenber} />
                {/* <Route exact path="/homePageMenber" component={HomePageMenber} /> */}
                <Route exact path="/">
                    <Redirect to="/home" />
                </Route>
            </IonRouterOutlet>
        </AuthProvider>
    );
};

export default AppRouter;
