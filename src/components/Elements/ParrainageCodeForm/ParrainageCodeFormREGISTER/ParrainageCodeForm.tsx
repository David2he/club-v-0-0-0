import style from "./ParrainageCodeForm.module.scss";
import "../ParainageCode.scss";
import { ParraingeFormProps } from "../../../../types/ComponentsElementsTypes";
import { useCodeParrainageHandler } from "../../../../utils/useCodeParrainageHandler";

export const ParraingageCodeForm = ({
  goToUrl,
}: ParraingeFormProps & React.InputHTMLAttributes<HTMLInputElement>) => {
  const { inputRefs, onSubmit } = useCodeParrainageHandler(); // Utilisez la logique ici
  return (
    <div>
      {/* className={style.boxFormRegisterContainer} */}

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
    </div>
  );
};
