import { createContext, useState, useContext, useEffect } from "react";
import { useStorageServices } from "../storages/useStorageServices";
import { AuthContextType } from "../../types/Types";

const AuthContext = createContext<AuthContextType | undefined>(undefined);
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(!!localStorage.getItem("token"));

    const { getStorageItem } = useStorageServices();
    const [user, setUser] = useState<any>(null);
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

    const updateUser = (token: string) => {
        setUser({ token });
    };
    const login = () => {
        console.log("login");
        setIsAuthenticated(true);
        console.log(isAuthenticated, "isAuthenticated state");
    };

    const logout = () => {
        console.log("logout");
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, login, logout, updateUser, checkToken }}>
            {children}
        </AuthContext.Provider>
    );
};
