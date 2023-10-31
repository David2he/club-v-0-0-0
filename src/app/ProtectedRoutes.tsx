import { ProtectedRouteProps } from "../types/ComponentsElementsTypes";
import { Route, Redirect } from "react-router";
import { useAuth } from "../services/contexts/AuthContext";

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ component: Component, ...rest }) => {
    const auth = useAuth();
    return (
        <Route
            {...rest}
            render={(props) =>
                auth?.isAuthenticated ? <Component {...props} /> : <Redirect to="/home" />
            }
        />
    );
};