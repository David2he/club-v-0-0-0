import { useRef, useEffect, useState } from "react";
import { Browser } from "@capacitor/browser";
import { useCheckCodeParrainage } from "./useCheckCodeParrainage";

export const useCodeParrainageHandler = (
    goToUrl?: string,
    showToast?: any,
    setShowToast?: any
) => {
    const currentUrl = new URL(window.location.href);
    const [submitCount, setSubmitCount] = useState(0);
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
    const codeFromUrl = currentUrl.searchParams.get("code");

    const { errorCode, checkCode } = useCheckCodeParrainage();
    const renderCount = useRef(0);
    if (codeFromUrl && renderCount.current === 0) {
        const codeArray = codeFromUrl.split("");
        inputRefs.current.forEach((input, index) => {
            if (input && codeArray[index]) {
                input.value = codeArray[index];
            }
        });
    }

    const onSubmit = (e: React.FormEvent) => {
        console.log(goToUrl, "goToUrl");

        e.preventDefault();
        setSubmitCount((prevCount) => prevCount + 1);
        const code = inputRefs.current.map((input) => input?.value).join("");
        const openInBrowser = async (currentUrl: URL) => {
            const newUrl = currentUrl.origin + "/register";
            await Browser.open({
                url: `${newUrl}?code=${code}`,
            });
        };

        if (goToUrl) {
            openInBrowser(currentUrl);
        } else {
            checkCode(code, setShowToast);
        }
    };

    useEffect(() => {
        const inputElements = inputRefs.current;
        const keydownHandlers: ((e: KeyboardEvent) => void)[] = [];
        const inputHandlers: ((e: Event) => void)[] = [];

        renderCount.current = renderCount.current + 1;
        console.log("renderCount", renderCount.current);

        inputElements.forEach((ele, index) => {
            if (!ele) return;
            const keydownHandler = (e: KeyboardEvent) => {
                if (e.key === "Backspace" && ele.value === "") {
                    inputElements[Math.max(0, index - 1)]?.focus();
                }
            };

            const inputHandler = () => {
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
        if (errorCode) {
            console.log("errorCode", errorCode);
            inputRefs.current.forEach((input) => {
                if (input) {
                    input.value = "";
                }
            });
        }

        return () => {
            inputElements.forEach((ele, index) => {
                ele?.removeEventListener("keydown", keydownHandlers[index]);
                ele?.removeEventListener("input", inputHandlers[index]);
            });
        };
    }, [errorCode, submitCount]);

    return {
        inputRefs,
        onSubmit,
        errorCode,
    };
};