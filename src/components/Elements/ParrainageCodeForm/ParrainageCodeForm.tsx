import "./ParainageCode.scss";
import { ParraingeFormProps } from "../../../types/ComponentsElementsTypes";
import { useCodeParrainageHandler } from "../../../utils/useCodeParrainageHandler";
import { LogPrompt } from "../../Blocks/LogPrompt/LogPrompt";
import { useState } from "react";

export const ParrainageCodeForm = ({
  goToUrl,
  loginType,
}: ParraingeFormProps & React.InputHTMLAttributes<HTMLInputElement>) => {
  const [showError, setShowError] = useState<Array<[string, string]>>([]);
  const { inputRefs, onSubmit } = useCodeParrainageHandler(goToUrl, showError, setShowError);

  const setRef = (el: any, index: number) => {
    inputRefs.current[index] = el;
  };

  const loginRender = () => {
    return (
      <>
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
                ref={(el) => setRef(el, index)}
              />
            ))}
          </div>
          <input type="submit" value="Checker le code" className="submitButton" />
        </form>
      </>
    );
  };

  const renderRegister = () => {
    return (
      <>
        <form onSubmit={onSubmit} className="formContainer formParrainage">
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
          <input type="submit" value="Checker le code" className="submitButton" />
        </form>
        {showError.map(([errorType, errorMessage], index) => (
          <LogPrompt key={index} typeLog={errorType} message={errorMessage} />
        ))}
      </>
    );
  };

  return <div>{loginType === "register" ? loginRender() : renderRegister()}</div>;
};
