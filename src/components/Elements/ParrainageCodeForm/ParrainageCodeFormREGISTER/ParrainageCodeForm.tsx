import style from "./ParrainageCodeForm.module.scss";
import "../ParainageCode.scss";
import { ParraingeFormProps } from "../../../../types/ComponentsElementsTypes";
import { useCodeParrainageHandler } from "../../../../utils/useCodeParrainageHandler";
import { LogPrompt } from "../../../Blocks/LogPrompt/LogPrompt";
import { useState } from "react";

export const ParrainageCodeForm = ({
  goToUrl,
}: ParraingeFormProps & React.InputHTMLAttributes<HTMLInputElement>) => {
  const [showError, setShowError] = useState<string[]>([]);
  const { inputRefs, onSubmit, errorCode } = useCodeParrainageHandler(goToUrl, showError, setShowError, );


  return (
    <div>
      <form onSubmit={onSubmit} className={`${style.formContainer} formParrainage`}>
        <div className={`${style.boxFormRegisterContainer}`}>
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
      {showError.map((error, index) => (
        <LogPrompt key={index} typeLog="Error" message={error} />
      ))}
    </div>
  );
};
