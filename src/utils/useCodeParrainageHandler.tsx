import { useRef, useEffect } from "react";
import { Browser } from "@capacitor/browser";

export const useCodeParrainageHandler = (goToUrl?: string) => {
  const currentUrl = new URL(window.location.href);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const codeFromUrl = currentUrl.searchParams.get("code");
  codeFromUrl ? console.log(codeFromUrl) : null;

  if (codeFromUrl) {
    const codeArray = codeFromUrl.split("");
    inputRefs.current.forEach((input, index) => {
      if (input && codeArray[index]) {
        input.value = codeArray[index];
      }
    });
  }

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

    const codeFromUrl = currentUrl.searchParams.get("code");
    if (codeFromUrl) {
      const codeArray = codeFromUrl.split("");
      inputRefs.current.forEach((input, index) => {
        if (input && codeArray[index]) {
          input.value = codeArray[index];
        }
      });
    }

    return () => {
      inputElements.forEach((ele, index) => {
        ele?.removeEventListener("keydown", keydownHandlers[index]);
        ele?.removeEventListener("input", inputHandlers[index]);
      });
    };
  }, [])

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = inputRefs.current.map((input) => input?.value).join("");

    const openInBrowser = async (currentUrl: URL) => {
      const newUrl = currentUrl.origin + "/register";
      await Browser.open({
        url: `${newUrl}?code=${code}`,
      });
    };
    goToUrl ? openInBrowser(currentUrl) : null;
  };

  return {
    inputRefs,
    onSubmit,
  };
};
