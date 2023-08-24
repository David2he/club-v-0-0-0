import { useRef, useEffect } from "react";
import { Browser } from "@capacitor/browser";
import style from "./ParrainageCodeForm.module.scss";
import "../ParainageCode.scss";
import { ParraingeFormProps } from "../../../../types/ComponentsElementsTypes";
import { useCodeParrainageHandler } from "../../../../utils/useCodeParrainageHandler";

export const ParraingageCodeForm = ({
  goToUrl,
}: ParraingeFormProps & React.InputHTMLAttributes<HTMLInputElement>) => {

  const { inputRefs, onSubmit } = useCodeParrainageHandler(goToUrl);

  const setRef = (el: any, index: number) => {
    inputRefs.current[index] = el;
  };
  return (
    <div>
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
    </div>
  );
};
