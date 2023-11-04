import "./ParainageCode.scss";
import { ParraingeFormProps } from "../../../types/Types";
import { useCodeParrainageHandler } from "../../../utils/CheckCodeParrainage/useCodeParrainageHandler";

export const ParrainageCodeForm = ({
    goToUrl,
    loginType,
}: ParraingeFormProps & React.InputHTMLAttributes<HTMLInputElement>) => {
    const { inputRefs, onSubmitForm } = useCodeParrainageHandler(goToUrl);

    const setRef = (el: any, index: number) => {
        inputRefs.current[index] = el;
    };

    const renderLogin = () => {
        return (
            <>
                <form onSubmit={onSubmitForm} className="formParrainage">
                    <div className="inputCodeContainer">
                        {[...Array(6)].map((_, index) => (
                            <input
                                key={index}
                                name="code"
                                placeholder="*"
                                required
                                maxLength={1}
                                className="code-input"
                                ref={(el) => setRef(el, index)}
                            />
                        ))}
                    </div>
                    <input type="submit" value="S'enrengistrer" className="submitButton" />
                </form>
            </>
        );
    };

    const renderRegister = () => {
        return (
            <>
                <form onSubmit={onSubmitForm} className="formContainer formParrainage">
                    <div className="boxFormRegisterContainer">
                        <p>Code parrainage</p>
                        <div className="inputCodeContainer">
                            {[...Array(6)].map((_, index) => (
                                <input
                                    key={index}
                                    name="code"
                                    placeholder="*"
                                    required
                                    maxLength={1}
                                    className="code-input"
                                    ref={(el) => (inputRefs.current[index] = el)}
                                />
                            ))}
                        </div>
                    </div>
                    <input type="submit" value="S'enrengistrer" className="submitButton" />
                </form>
                <div className="toastContainer"></div>
            </>
        );
    };

    return <div>{loginType === "register" ? renderLogin() : renderRegister()}</div>;
};
