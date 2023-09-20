import "./ParainageCode.scss";
import { ParraingeFormProps } from "../../../types/ComponentsElementsTypes";
import { useCodeParrainageHandler } from "../../../utils/useCodeParrainageHandler";
import { Toast } from "../../Blocks/Toast/Toast";
import { useState } from "react";

export const ParrainageCodeForm = ({
    goToUrl,
    loginType,
}: ParraingeFormProps & React.InputHTMLAttributes<HTMLInputElement>) => {
    const [showToast, setShowToast] = useState<Array<[string, string]>>([]);
    const { inputRefs, onSubmit } = useCodeParrainageHandler(
        goToUrl,
        showToast,
        setShowToast
    );

    const setRef = (el: any, index: number) => {
        inputRefs.current[index] = el;
    };

    const loginRender = () => {
        return (
            <>
<<<<<<< HEAD
                <form onSubmit={onSubmit} className="formParrainage">
                    <div className="inputCodeContainer">
                        {[...Array(6)].map((_, index) => (
                            <input
                                key={index}
                                name="code"
                                placeholder="*"
                                required
                                maxLength={1}
                                className="code-input"
=======
                <form onSubmit={onSubmit} className='formParrainage'>
                    <div className='inputCodeContainer'>
                        {[...Array(6)].map((_, index) => (
                            <input
                                key={index}
                                name='code'
                                placeholder='*'
                                required
                                maxLength={1}
                                className='code-input'
>>>>>>> formRegister
                                ref={(el) => setRef(el, index)}
                            />
                        ))}
                    </div>
                    <input
<<<<<<< HEAD
                        type="submit"
                        value="Checker le code"
                        className="submitButton"
=======
                        type='submit'
                        value='Checker le code'
                        className='submitButton'
>>>>>>> formRegister
                    />
                </form>
            </>
        );
    };

    const renderRegister = () => {
        return (
            <>
                <form
                    onSubmit={onSubmit}
<<<<<<< HEAD
                    className="formContainer formParrainage"
                >
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
=======
                    className='formContainer formParrainage'
                >
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
>>>>>>> formRegister
                                    ref={(el) =>
                                        (inputRefs.current[index] = el)
                                    }
                                />
                            ))}
                        </div>
                    </div>
                    <input
<<<<<<< HEAD
                        type="submit"
                        value="Checker le code"
                        className="submitButton"
=======
                        type='submit'
                        value='Checker le code'
                        className='submitButton'
>>>>>>> formRegister
                    />
                </form>
                {showToast.map(([toastType, toastMessage], index) => (
                    <Toast
                        key={index}
                        typeLog={toastType}
                        message={toastMessage}
                    />
                ))}
            </>
        );
    };

    return (
        <div>{loginType === "register" ? loginRender() : renderRegister()}</div>
    );
};
