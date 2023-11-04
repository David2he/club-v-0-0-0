import { useRef, useEffect, useState } from "react";
import { Browser } from "@capacitor/browser";
import { useCheckCodeParrainage } from "./useCheckCodeParrainage";

export const useCodeParrainageHandler = (goToUrl?: string, setShowToast?: any) => {
    const currentUrl = new URL(window.location.href);
    const [submitCount, setSubmitCount] = useState(0);
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
    const codeFromUrl = currentUrl.searchParams.get("code");
    const [isCodeValid, setIsCodeValid] = useState(false);

    const firstRender = useRef(true);

    if (codeFromUrl && firstRender.current) {
        const codeArray = codeFromUrl.split("");
        inputRefs.current.forEach((input, index) => {
            if (input && codeArray[index]) {
                input.value = codeArray[index];
            }
        });
    }

    const onSubmitForm = async (e: React.FormEvent) => {
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
            const result = await useCheckCodeParrainage(code, setShowToast);
            setIsCodeValid(result);

            if (firstRender.current) firstRender.current = false;
            if (!result) {
                inputRefs.current.forEach((input) => {
                    if (input) {
                        input.value = "";
                    }
                });
            }
        }
    };

    useEffect(() => {
        const inputElements = inputRefs.current;
        const keydownHandlers: ((e: KeyboardEvent) => void)[] = [];
        const inputHandlers: ((e: Event) => void)[] = [];
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

        return () => {
            inputElements.forEach((ele, index) => {
                ele?.removeEventListener("keydown", keydownHandlers[index]);
                ele?.removeEventListener("input", inputHandlers[index]);
            });
        };
    });

    return {
        inputRefs,
        onSubmitForm,
    };
};
