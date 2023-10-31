import { createContext, useState, useContext } from "react";

interface AuthContextType {
    isAuthenticated: boolean;
    user: any;
    login: () => void;
    logout: () => void;
    updateUser: (token: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [user, setUser] = useState<any>(null);
    const updateUser = (token: string) => {
        setUser({ token });
    };
    const login = () => {
        console.log("login")
        setIsAuthenticated(true);
    };

    const logout = () => {
        console.log("logout")
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, login, logout, updateUser }}>
            {children}
        </AuthContext.Provider>
    );
};
