export type InputProps = {
    iconURL?: string;
    altIcon?: string;
    labelType?: string;
    placeholder?: string;
    name?: string;
    value?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => any;
};

export type ButtonSubmitProps = {
    text: string;
    callFunctionOnClick?: (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => any;
};

export type ParraingeFormProps = {
    goToUrl?: string;
    loginType?: string;
};

export type LogPromptProps = {
    typeLog: string;
    message: string;
};

export type registerFormDataStateProps = {
    email: string;
    password: string;
    confirmPassword: string;
    fName: string;
    name: string;
    phone: string;
};
