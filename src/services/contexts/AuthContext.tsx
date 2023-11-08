import { createContext, useState, useContext, useEffect } from "react";
import { useStorageServices } from "../storages/useStorageServices";
import { AuthContextType, UserType } from "../../types/Types";

const AuthContext = createContext<AuthContextType | undefined>(undefined);
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
        !!localStorage.getItem("token")
    );

    const { getStorageItem } = useStorageServices();
    const [user, setUser] = useState<UserType | null>(null);
    useEffect(() => {
        const autoCheckToken = async () => {
            const token = await getStorageItem("token");

            if (token) {
                setIsAuthenticated(true);
            }
        };
        autoCheckToken();
        console.log("isAuthenticated", isAuthenticated);
    }, [getStorageItem]);

    const checkToken = async () => {
        const token = await getStorageItem("token");
        if (token) {
            setIsAuthenticated(true);
        }
    };

    const updateUser = async () => {
        const token = await getStorageItem("token");
        const email = await getStorageItem("email");
        
        if (token && email) {
            const newUser: UserType = {
                token: token,
                email: email,
            };
            setUser(newUser);
        } else {
            console.log("no token or email");
        }
    };

    const login = () => {
        console.log("login");
        updateUser();
        setIsAuthenticated(true);
        console.log(isAuthenticated, "isAuthenticated state");
    };

    const logout = () => {
        console.log("logout");
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider
            value={{ isAuthenticated, user, login, logout, updateUser, checkToken }}
        >
            {children}
        </AuthContext.Provider>
    );
};
