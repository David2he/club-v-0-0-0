import { RouteProps } from "react-router-dom";

export type InputProps = {
    iconURL?: string;
    altIcon?: string;
    labelType?: string;
    placeholder?: string;
    name?: string;
    value?: string;
    type?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => any;
};

export type ButtonSubmitProps = {
    text: string;
    callFunctionOnClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => any;
};

export type ParraingeFormProps = {
    goToUrl?: string;
    loginType?: string;
};

export type toastProps = {
    typeLog: string;
    message: string;
};

export type registerFormDataStateProps = {
    email: string;
    password: string;
    fName: string;
    name: string;
    phone: string;
};

export type toastType = {
    type: string;
    message: string;
    key?: number;
};

export type RegisterFormDataToSendType = {
    email: string;
    password: string;
    userInfo: {
        firstName: string;
        lastName: string;
        birthday: string;
        phoneNumber: string;
    };
    isAdmin?: boolean;
    isBrandAdmin?: boolean;
    nonce: string;
};

export type LoginFormDataToSendType = {
    username: string;
    password: string;
};

export type BlockTextProps = {
    title: string;
    text: string | JSX.Element[] | (() => JSX.Element);
    closable?: boolean;
    expandable?: boolean;
};

export interface ProtectedRouteProps extends RouteProps {
    authenticatedComponent: React.ComponentType<any>;
    unauthenticatedComponent: React.ComponentType<any>;
}
export interface AuthContextType {
    isAuthenticated: boolean;
    user: any;
    login: () => void;
    logout: () => void;
    updateUser: (token: string) => void;
    checkToken: () => void;
}

export type RedirectProps = {
    path: string;
};
