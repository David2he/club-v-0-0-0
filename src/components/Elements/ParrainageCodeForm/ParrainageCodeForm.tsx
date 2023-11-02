import "./ParainageCode.scss";
import { ParraingeFormProps } from "../../../types/Types";
import { useCodeParrainageHandler } from "../../../utils/useCodeParrainageHandler";
import { Toast } from "../../Blocks/Toast/Toast";
import { useState } from "react";
import { toastType } from "../../../types/Types";

export const ParrainageCodeForm = ({
    goToUrl,
    loginType,
}: ParraingeFormProps & React.InputHTMLAttributes<HTMLInputElement>) => {
    const [showToast, setShowToast] = useState<toastType>({ type: "", message: "", key: 0 });
    const { inputRefs, onSubmitForm } = useCodeParrainageHandler(goToUrl, setShowToast);

    const setRef = (el: any, index: number) => {
        inputRefs.current[index] = el;
    };

    const loginRender = () => {
        return (
            <>
                <form onSubmit={onSubmitForm} className='formParrainage'>
                    <div className='inputCodeContainer'>
                        {[...Array(6)].map((_, index) => (
                            <input
                                key={index}
                                name='code'
                                placeholder='*'
                                required
                                maxLength={1}
                                className='code-input'
                                ref={(el) => setRef(el, index)}
                            />
                        ))}
                    </div>
                    <input type='submit' value='Checker le code' className='submitButton' />
                </form>
            </>
        );
    };

    const renderRegister = () => {
        return (
            <>
                <form onSubmit={onSubmitForm} className='formContainer formParrainage'>
                    <div className='boxFormRegisterContainer'>
                        <p>Code parrainage</p>
                        <div className='inputCodeContainer'>
                            {[...Array(6)].map((_, index) => (
                                <input
                                    key={index}
                                    name='code'
                                    placeholder='*'
                                    required
                                    maxLength={1}
                                    className='code-input'
                                    ref={(el) => (inputRefs.current[index] = el)}
                                />
                            ))}
                        </div>
                    </div>
                    <input type='submit' value='Checker le code' className='submitButton' />
                </form>
                <div className='toastContainer'>
                    <Toast typeLog={showToast.type} message={showToast.message} key={showToast.key} />
                </div>
            </>
        );
    };

    return <div>{loginType === "register" ? loginRender() : renderRegister()}</div>;
};
