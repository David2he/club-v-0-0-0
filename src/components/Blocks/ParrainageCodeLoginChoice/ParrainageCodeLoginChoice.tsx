import React, { useEffect, useRef } from "react";
import style from "./ParrainageCodeLoginChoice.module.scss";

export const ParrainageCodeLoginChoice = () => {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    const inputElements = inputRefs.current;
    const keydownHandlers: ((e: KeyboardEvent) => void)[] = [];
    const inputHandlers: ((e: Event) => void)[] = [];

    inputElements.forEach((ele, index) => {
      if (!ele) return;

      const keydownHandler = (e: KeyboardEvent) => {
        if (e.keyCode === 8 && ele.value === "") {
          inputElements[Math.max(0, index - 1)]?.focus();
        }
      };

      const inputHandler = (e: Event) => {
        const [first, ...rest] = ele.value;
        ele.value = first ?? "";
        const lastInputBox = index === inputElements.length - 1;
        const didInsertContent = first !== undefined;
        if (didInsertContent && !lastInputBox) {
          inputElements[index + 1]?.focus();
          inputElements[index + 1]!.value = rest.join("");
          inputElements[index + 1]?.dispatchEvent(new Event("input"));
        }
      };

      ele.addEventListener("keydown", keydownHandler);
      ele.addEventListener("input", inputHandler);

      keydownHandlers.push(keydownHandler);
      inputHandlers.push(inputHandler);
    });

    return () => {
      inputElements.forEach((ele, index) => {
        ele?.removeEventListener("keydown", keydownHandlers[index]);
        ele?.removeEventListener("input", inputHandlers[index]);
      });
    };
  }, []);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = inputRefs.current.map((input) => input?.value).join("");
    //// REDIRIGER SUR LE SITE AVEC LE CODE
    console.log(code);
    
  };

  return (
    <div className={style.codeLoginChoiceContainer}>
      <div className={style.orChoiceContainer}>
        <span></span>
        <p>OU</p>
        <span></span>
      </div>
      <p>Code de parrainage</p>
      <div>
        <form onSubmit={onSubmit}>
          <div className={style.inputCodeContainer}>
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
          <input type="submit" value="Checker le code" className={style.submitButton} />
        </form>
      </div>
    </div>
  );
};
